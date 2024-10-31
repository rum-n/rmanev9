import * as THREE from "three";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const WaveWrapper = styled.div`
  position: absolute;
  z-index: -10;
  top: 0;
  left: 0;
  width: 50vw;
  overflow: hidden;
  @media (max-width: 768px) {
    /* background-color: #000000; */
  }

`;

function ConfinedWaveAnimation() {
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const sizes = {
      width: window.innerWidth * 0.5,
      height: window.innerHeight,
    };

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    if (refContainer.current) {
      refContainer.current.appendChild(renderer.domElement);
    }

    // Create a plane with vertical lines only
    const widthSegments = 50;
    const heightSegments = 50;
    const geometry = new THREE.PlaneGeometry(5, 10, widthSegments, heightSegments);
    const lineVertices: number[] = [];
    const { array: vertices } = geometry.attributes.position;

    // Extract only vertical line segments from the plane geometry
    for (let y = 0; y < heightSegments; y++) {
      for (let x = 0; x <= widthSegments; x++) {
        const i = y * (widthSegments + 1) + x;
        const j = (y + 1) * (widthSegments + 1) + x;

        lineVertices.push(vertices[i * 3], vertices[i * 3 + 1], vertices[i * 3 + 2]);
        lineVertices.push(vertices[j * 3], vertices[j * 3 + 1], vertices[j * 3 + 2]);
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3));

    // Shader for smooth wave displacement on vertical lines
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0.0 },
      },
      vertexShader: `
        uniform float uTime;
        void main() {
          vec3 pos = position;
          pos.z += 3.2 * sin(pos.x * 2.5 + uTime) + 0.15 * sin(pos.y * 2.9 + uTime * 1.7);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        void main() {
          gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }
      `,
      wireframe: false,
    });

    const verticalLines = new THREE.LineSegments(lineGeometry, material);
    verticalLines.position.x = -2;
    scene.add(verticalLines);

    // Animate the shader's time uniform
    const animateWave = () => {
      material.uniforms.uTime.value += 0.002;
      renderer.render(scene, camera);
      requestAnimationFrame(animateWave);
    };

    animateWave();

    // Handle resizing
    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth * 0.5;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    return () => {
      if (refContainer.current) {
        refContainer.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <WaveWrapper ref={refContainer}></WaveWrapper>;
}

export default ConfinedWaveAnimation;
