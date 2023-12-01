import * as THREE from "three";
import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { PathContext } from "../../context/PathContext";

const ParticlesWrapper = styled.div`
  position: absolute;
  zindex: -10;
`;

function ThreeParticles() {
  const refContainer = useRef<HTMLInputElement>(null);

  //@ts-ignore
  const { currentPath } = useContext(PathContext);

  console.log(currentPath.path);

  useEffect(() => {
    const scene = new THREE.Scene();

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const camera = new THREE.PerspectiveCamera(
      20,
      sizes.width / sizes.height,
      0.1,
      100
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    refContainer?.current?.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const particlesCnt = 5000;

    const posArray = new Float32Array(particlesCnt * 3);

    for (let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
      size: 0.005,
    });

    const particleMesh = new THREE.Points(geometry, material);
    scene.add(particleMesh);

    let targetCameraPosition = new THREE.Vector3(0, 0, 20);

    if (currentPath.path === "/projects") {
      targetCameraPosition = new THREE.Vector3(0, 0, 10);
    }

    const updateCamera = () => {
      const dampingFactor = 0.08;
      camera.position.lerp(targetCameraPosition, dampingFactor);
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    const animate = function () {
      requestAnimationFrame(animate);
      // particleMesh.rotation.x += 0.01;
      particleMesh.rotation.y += 0.001;
      renderer.render(scene, camera);

      renderer.setPixelRatio(2);

      window.addEventListener("resize", () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        camera.updateProjectionMatrix();
        camera.aspect = sizes.width / sizes.height;
        renderer.setSize(sizes.width, sizes.height);
      });
      updateCamera();
    };
    animate();
    return () => {
      refContainer?.current?.removeChild(renderer.domElement);
    };
  }, [currentPath]);

  return <ParticlesWrapper ref={refContainer}></ParticlesWrapper>;
}

export default ThreeParticles;
