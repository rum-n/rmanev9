import * as THREE from "three";
import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { PathContext } from "../../context/PathContext";

const ParticlesWrapper = styled.div`
   position: absolute;
   z-index: -10;
`;

function ThreeParticles() {
  const refContainer = useRef<HTMLDivElement>(null);
  const pathContext = useContext(PathContext);
  const currentPath = typeof pathContext?.currentPath === 'object' ? pathContext.currentPath : { path: "" };

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 5, 20);

    const sizes = { width: window.innerWidth, height: window.innerHeight };
    const camera = new THREE.PerspectiveCamera(20, sizes.width / sizes.height, 0.1, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio < 2 ? window.devicePixelRatio : 2);

    if (refContainer.current) {
      refContainer.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BufferGeometry();
    const particlesCnt = 5000;
    const posArray = new Float32Array(particlesCnt * 3);
    const colorArray = new Float32Array(particlesCnt * 3);

    for (let i = 0; i < particlesCnt; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 10;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 10;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 20;

      colorArray[i * 3] = Math.random();
      colorArray[i * 3 + 1] = Math.random();
      colorArray[i * 3 + 2] = Math.random();
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));

    const material = new THREE.PointsMaterial({
      size: 0.01,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particleMesh = new THREE.Points(geometry, material);
    scene.add(particleMesh);

    let targetCameraPosition = new THREE.Vector3(0, 0, 20);
    if (currentPath.path === "/projects") targetCameraPosition = new THREE.Vector3(0, 0, 10);
    if (currentPath.path === "/contact") targetCameraPosition = new THREE.Vector3(0, 0, 50);

    const mouse = new THREE.Vector2();
    window.addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      camera.position.x += (mouse.x * 0.1 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 0.1 - camera.position.y) * 0.05;
    });

    const updateCamera = () => {
      const dampingFactor = 0.04;
      camera.position.lerp(targetCameraPosition, dampingFactor);
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      particleMesh.rotation.y += 0.001;
      material.size = 0.005 + 0.0025 * Math.sin(Date.now() * 0.001);
      updateCamera();
    };
    animate();

    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    });

    return () => {
      if (refContainer.current) {
        (refContainer.current as HTMLDivElement).removeChild(renderer.domElement);
      }
    };
  }, [currentPath]);

  return <ParticlesWrapper ref={refContainer}></ParticlesWrapper>;
}

export default ThreeParticles;
