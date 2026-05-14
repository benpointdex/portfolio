import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const WebGLBackground = () => {
  const mountRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let renderer, scene, camera, particles;
    let frameId;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      
      renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true,
        failIfMajorPerformanceCaveat: true // Fail if no hardware acceleration
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      } else {
        throw new Error('Mount element not found');
      }

      // Particle Field Geometry
      const particlesCount = 2000;
      const positions = new Float32Array(particlesCount * 3);
      const colors = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

        colors[i * 3] = 0.32; 
        colors[i * 3 + 1] = 0.33; 
        colors[i * 3 + 2] = 0.24; 
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.015,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      camera.position.z = 5;

      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (event) => {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 0.5;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 0.5;
      };

      window.addEventListener('mousemove', handleMouseMove);

      const animate = () => {
        frameId = requestAnimationFrame(animate);

        particles.rotation.y += 0.001;
        particles.rotation.x += 0.0005;

        particles.position.x += (mouseX - particles.position.x) * 0.05;
        particles.position.y += (-mouseY - particles.position.y) * 0.05;

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
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(frameId);
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
        geometry.dispose();
        material.dispose();
      };
    } catch (e) {
      console.warn("WebGL initialization failed, falling back to CSS background.", e);
      setError(true);
    }
  }, []);

  if (error) {
    return (
      <div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: -1, 
          background: 'radial-gradient(circle at 50% 50%, #1a1c14 0%, #131410 100%)' 
        }} 
      />
    );
  }

  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: -1, 
        pointerEvents: 'none',
        background: '#131410' // Base background
      }} 
    />
  );
};

export default WebGLBackground;
