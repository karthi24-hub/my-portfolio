// File: AnimatedBackground.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const AnimatedBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a23, 0.002);
    scene.background = new THREE.Color(0x000010);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(0, 0, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current?.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(100, 100, 100);
    scene.add(directionalLight);

    // Add star field
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 10000;
    const starVertices = [];
    for (let i = 0; i < starCount; i++) {
      starVertices.push(
        THREE.MathUtils.randFloatSpread(2000),
        THREE.MathUtils.randFloatSpread(2000),
        THREE.MathUtils.randFloatSpread(2000)
      );
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
    scene.add(new THREE.Points(starGeometry, starMaterial));

    // Add planets
    const createPlanet = (size, textureUrl, position) => {
      const geometry = new THREE.SphereGeometry(size, 64, 64);
      const texture = new THREE.TextureLoader().load(textureUrl);
      const material = new THREE.MeshStandardMaterial({ map: texture });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...position);
      scene.add(mesh);
      return mesh;
    };

    createPlanet(5, '/textures/earth.jpg', [-30, 0, -100]);
    createPlanet(7, '/textures/jupiter.jpg', [30, 15, -150]);
    createPlanet(4, '/textures/mars.png', [0, -20, -120]);
     createPlanet(10, '/textures/saturn.jpg', [-150, 100, -600]);
    createPlanet(14, '/textures/uranus.jpg', [200, -50, -800]);

    // Satellite
    const satellite = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 3),
      new THREE.MeshStandardMaterial({ color: 0x8888ff })
    );
    satellite.position.set(0, 10, -90);
    scene.add(satellite);

    // Asteroid
    const asteroid = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0xaaaaaa })
    );
    asteroid.position.set(-100, 0, -80);
    scene.add(asteroid);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      satellite.rotation.y += 0.05;
      asteroid.position.x += 0.5;
      if (asteroid.position.x > 100) asteroid.position.x = -100;

      time += 0.002;
      camera.position.x = Math.sin(time) * 80;
      camera.position.z = 100 + Math.cos(time) * 30;
      camera.lookAt(0, 0, 0);

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" style={{ zIndex: -1 }} />;
};

export default AnimatedBackground;
