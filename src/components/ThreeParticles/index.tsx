import * as THREE from "three";
import { useEffect, useRef } from "react";
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes

function ConfinedWaveAnimation() {
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
<<<<<<< Updated upstream
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
=======
    const refContainerElement = refContainer.current;

    if (!refContainerElement) {
      console.error("refContainerElement is null");
      return;
    }

    try {
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
        console.log("Canvas element added to DOM:", renderer.domElement);
        console.log(
          "Canvas dimensions:",
          renderer.domElement.width,
          "x",
          renderer.domElement.height
        );
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
        colors[i] = 0.23 + colorMix * 0.14; // R: primary to secondary
        colors[i + 1] = 0.51 + colorMix * 0.16; // G: primary to secondary
        colors[i + 2] = 0.96 + colorMix * 0.05; // B: primary to secondary
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      // Shader material for animated particles
      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0.0 },
          uSize: { value: 30 * window.devicePixelRatio },
        },
        vertexShader: `
>>>>>>> Stashed changes
        uniform float uTime;
        void main() {
          vec3 pos = position;
          pos.z += 3.2 * sin(pos.x * 2.5 + uTime) + 0.15 * sin(pos.y * 2.9 + uTime * 1.7);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
<<<<<<< Updated upstream
      fragmentShader: `
=======
        fragmentShader: `
        varying vec3 vColor;
        
>>>>>>> Stashed changes
        void main() {
          gl_FragColor = vec4(1.0, 1.0, 1.0, 0.4);
        }
      `,
<<<<<<< Updated upstream
      transparent: true,
      opacity: 0.4,
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
=======
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // Animate
      let frameCount = 0;
      const animate = () => {
        frameCount++;
        if (frameCount % 60 === 0) {
          // Log every 60 frames (about once per second)
          console.log(
            "Animation frame:",
            frameCount,
            "time:",
            material.uniforms.uTime.value
          );
        }
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
    } catch (error) {
      console.error("Error setting up Three.js particles:", error);
    }
  }, []);

  console.log("ParticlesWrapper styled component rendering");
  return (
    <div
      ref={refContainer}
      style={{
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.6,
      }}
    />
  );
>>>>>>> Stashed changes
}

export default ConfinedWaveAnimation;
