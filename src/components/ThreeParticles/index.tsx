import * as THREE from "three";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const ParticlesWrapper = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.6;

  @media (max-width: 768px) {
    opacity: 0.3;
  }
`;

function ParticlesAnimation() {
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refContainerElement = refContainer.current;
    const scene = new THREE.Scene();

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    if (refContainerElement) {
      refContainerElement.appendChild(renderer.domElement);
    }

    // Create particles
    const particlesCount = 200;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      // Color - gradient from primary to secondary
      const colorMix = Math.random();
      colors[i] = 0.39 + colorMix * 0.14; // R: primary to secondary
      colors[i + 1] = 0.4 + colorMix * 0.16; // G: primary to secondary
      colors[i + 2] = 0.95 + colorMix * 0.05; // B: primary to secondary
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Shader material for animated particles
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0.0 },
        uSize: { value: 30 * window.devicePixelRatio },
      },
      vertexShader: `
        uniform float uTime;
        uniform float uSize;
        
        attribute vec3 color;
        varying vec3 vColor;
        
        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          
          // Rotate
          float angle = uTime * 0.2;
          modelPosition.xz *= mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
          
          // Wave
          modelPosition.y += sin(modelPosition.x * 2.0 + uTime) * 0.3;
          modelPosition.y += sin(modelPosition.z * 1.5 + uTime * 0.8) * 0.2;
          
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;
          
          gl_Position = projectedPosition;
          gl_PointSize = uSize;
          
          vColor = color;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          // Disc pattern
          float strength = distance(gl_PointCoord, vec2(0.5));
          strength = 1.0 - strength;
          strength = pow(strength, 3.0);
          
          // Mix colors
          vec3 color = mix(vColor, vec3(1.0), 0.3);
          
          gl_FragColor = vec4(color, strength * 0.8);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animate
    const animate = () => {
      material.uniforms.uTime.value += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle resizing
    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      material.uniforms.uSize.value = 30 * window.devicePixelRatio;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (refContainerElement && renderer.domElement) {
        refContainerElement.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <ParticlesWrapper ref={refContainer}></ParticlesWrapper>;
}

export default ParticlesAnimation;
