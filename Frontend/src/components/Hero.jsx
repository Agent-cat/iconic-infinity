import { useEffect } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { motion } from "framer-motion";

const Hero = () => {
  useEffect(() => {
   
    const container = document.getElementById("cube-canvas-container");
    if (!container) return;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const scene = new THREE.Scene();
    scene.background = null;

    // Adjust camera position to fit the cube within the canvas
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      precision: "highp",
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(0, 0, 10);
    scene.add(directionalLight);
    // Create Rubik's-style cube (3x3x3)
    const mainGroup = new THREE.Group();
    // Reduce cube size and gap to fit better within the canvas
    const cubeSize = 1.15;
    const gap = 0.05;
    

    // Create layer groups
    const layers = {
      x: [new THREE.Group(), new THREE.Group(), new THREE.Group()], // Left, Middle, Right
      y: [new THREE.Group(), new THREE.Group(), new THREE.Group()], // Bottom, Middle, Top
      z: [new THREE.Group(), new THREE.Group(), new THREE.Group()], // Back, Middle, Front
    };

    // Add layer groups to main group
    Object.values(layers).forEach((axisLayers) => {
      axisLayers.forEach((layer) => mainGroup.add(layer));
    });

    // Define colors for each face with improved materials
    const createMaterial = (color) =>
      new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.3,
        metalness: 0.2,
        side: THREE.DoubleSide,
      });

    const colors = {
      front: createMaterial("#2563eb"),
      back: createMaterial("#2563eb"),
      top: createMaterial("#ffffff"),
      bottom: createMaterial("#ffffff"),
      left: createMaterial("#2563eb"),
      right: createMaterial("#2563eb"),
    };

    // Create a map to store cube references
    const cubeMap = new Map();

    // Create all 27 cubes
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const key = `${x},${y},${z}`;
          const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
          const materials = [
            colors.left,
            colors.right,
            colors.top,
            colors.bottom,
            colors.front,
            colors.back,
          ];
          const mesh = new THREE.Mesh(geometry, materials);
          mesh.position.set(
            x * (cubeSize + gap),
            y * (cubeSize + gap),
            z * (cubeSize + gap),
          );

          // Add edges with improved material
          const edges = new THREE.EdgesGeometry(geometry);
          const line = new THREE.LineSegments(
            edges,
            new THREE.LineBasicMaterial({
              color: "#111",
              linewidth: 2,
              transparent: true,
              opacity: 0.8,
            }),
          );
          mesh.add(line);

          // Store the cube reference
          cubeMap.set(key, mesh);

          // Add the cube to the appropriate layers
          layers.x[x + 1].add(mesh);
          layers.y[y + 1].add(mesh);
          layers.z[z + 1].add(mesh);
        }
      }
    }

    scene.add(mainGroup);

    // Animation variables
    let targetRotation = { x: 0, y: 0 };
    let isAnimating = false;
    let animationStartTime = 0;
    let currentMoveIndex = 0;
    const selfRotationSpeed = 0.008; 
    let currentRotation = 0; 
   
    const moveSequence = [
      // Front face moves
      { axis: "z", layer: 0, angle: Math.PI / 2, duration: 800 }, // Front layer
      { axis: "z", layer: 1, angle: Math.PI / 2, duration: 800 }, // Middle layer
      { axis: "z", layer: 2, angle: Math.PI / 2, duration: 800 }, // Back layer

      // Right face moves
      { axis: "x", layer: 2, angle: Math.PI / 2, duration: 800 }, // Right layer
      { axis: "x", layer: 1, angle: Math.PI / 2, duration: 800 }, // Middle layer
      { axis: "x", layer: 0, angle: Math.PI / 2, duration: 800 }, // Left layer

      // Top face moves
      { axis: "y", layer: 2, angle: Math.PI / 2, duration: 800 }, // Top layer
      { axis: "y", layer: 1, angle: Math.PI / 2, duration: 800 }, // Middle layer
      { axis: "y", layer: 0, angle: Math.PI / 2, duration: 800 }, // Bottom layer

      // Counter-clockwise moves
      { axis: "z", layer: 0, angle: -Math.PI / 2, duration: 800 },
      { axis: "x", layer: 2, angle: -Math.PI / 2, duration: 800 },
      { axis: "y", layer: 2, angle: -Math.PI / 2, duration: 800 },
    ];

    function animate() {

      requestAnimationFrame(animate);

      // Update continuous rotation
      currentRotation += selfRotationSpeed;
      
      // Handle continuous rotation of the entire cube
      mainGroup.rotation.x += (targetRotation.x - mainGroup.rotation.x) * 0.05;
      mainGroup.rotation.y = currentRotation + (targetRotation.y - mainGroup.rotation.y) * 0.05;

      // Handle layer rotation animation
      if (isAnimating) {
        const currentMove = moveSequence[currentMoveIndex];
        const elapsed = Date.now() - animationStartTime;
        const progress = Math.min(elapsed / currentMove.duration, 1);

        const layer = layers[currentMove.axis][currentMove.layer];
        if (currentMove.axis === "x") {
          layer.rotation.x = currentMove.angle * progress;
        } else if (currentMove.axis === "y") {
          layer.rotation.y = currentMove.angle * progress;
        } else if (currentMove.axis === "z") {
          layer.rotation.z = currentMove.angle * progress;
        }

        if (progress === 1) {
          isAnimating = false;
          currentMoveIndex = (currentMoveIndex + 1) % moveSequence.length;
          setTimeout(startNewMove, 200); // Short pause between moves
        }
      }

      renderer.render(scene, camera);
    }

    function startNewMove() {
      if (!isAnimating) {
        isAnimating = true;
        animationStartTime = Date.now();
      }
    }

    // Start the animation sequence
    startNewMove();

    // Mouse move interaction
    function onMouseMove(e) {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      targetRotation.x = y * Math.PI * 0.5;
      targetRotation.y = x * Math.PI * 0.5;
    }
    container.addEventListener("mousemove", onMouseMove);

    animate();

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      while (container.firstChild) container.removeChild(container.firstChild);
    };
  }, []);

  return (
    <div className="w-full h-screen pt-28 md:pt-0 bg-black relative  flex flex-col lg:flex-row items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between h-full px-2 sm:px-4 md:px-8">
        <div className="z-10 w-full lg:w-1/2 flex flex-col justify-center items-start lg:items-start lg:mb-0 px-2 sm:px-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-[#2563eb] leading-tight mb-3 sm:mb-4"
          >
            ICONIC INFINITY GROUP
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4"
          >
            Face of the Future
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-xl md:text-2xl text-gray-300 mb-2"
          >
            Excellence, quality and innovation across multiple verticals
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8"
          >
            A multi-domain enterprise delivering cutting-edge solutions in
            technology, design, sustainability, and construction.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="md:flex hidden flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg flex items-center gap-2 shadow-lg transition-all duration-300 w-full sm:w-auto">
              <span>✦</span> <Link to="/services"> Explore Our Services</Link>
            </button>
            <button className="border-2 border-[#D4B678] hover:bg-[#D4B678]/10 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg flex items-center gap-2 shadow-lg transition-all duration-300 w-full sm:w-auto">
              <span>◎</span>
              <Link to="/about-us"> Learn More</Link>
            </button>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="z-10 w-full lg:w-1/2 flex items-center justify-center h-[220px] sm:h-[320px] md:h-[400px] lg:h-[500px]"
        >
          <div
            id="cube-canvas-container"
            className="w-[220px] md:mb-0 h-[220px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[450px]"
          ></div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex md:hidden flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg flex items-center gap-2 shadow-lg transition-all duration-300 w-full sm:w-auto">
            <span>✦</span> <Link to="/services"> Explore Our Services</Link>
          </button>
          <button className="border-2 border-[#D4B678] hover:bg-[#D4B678]/10 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg flex items-center gap-2 shadow-lg transition-all duration-300 w-full sm:w-auto">
            <span>◎</span>
            <Link to="/about-us"> Learn More</Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
