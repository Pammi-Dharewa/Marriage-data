import React, { useState, useRef, useEffect } from 'react';

const GlareCard = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(hover: none)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isMobile) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / (rect.height / 2)) * -20;
    const rotateY = (mouseX / (rect.width / 2)) * 20;

    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;

    setRotateX(rotateX);
    setRotateY(rotateY);
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleClick = () => {
    if (!isMobile) return;
    setIsHovered(prev => !prev);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
  };

  return (
    <div 
      className="card-container"
      style={{
        perspective: '1000px',
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        aspectRatio: '5/4',
        margin: '20px auto',
        padding: '0 10px'
      }}
    >
      <div
        ref={cardRef}
        className="card"
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 'clamp(10px, 4%, 20px)',
          background: 'linear-gradient(145deg, rgb(10, 8, 8),rgb(15, 3, 3))',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.1s',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Image */}
        <div
          className="background-image"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/backgroundimg.jpg")',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            zIndex: 1
          }}
        />

        {/* Overlay */}
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(145deg, rgba(42,42,42,0.8), rgba(58,58,58,0.8))',
            opacity: isHovered ? 0.5 : 1,
            transition: 'opacity 0.3s ease-in-out',
            zIndex: 2
          }}
        />

        {/* Glare Effect */}
        <div
          className="glare"
          style={{
            position: 'absolute',
            width: '50%',
            height: '50%',
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)',
            transform: `translate(${glarePosition.x}%, ${glarePosition.y}%)`,
            top: '-25%',
            left: '-25%',
            pointerEvents: 'none',
            zIndex: 3
          }}
        />

        {/* Card Content */}
        <div 
          className="card-content"
          style={{ 
            padding: 'clamp(10px, 5%, 20px)', 
            color: 'white',
            position: 'relative',
            zIndex: 4,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}
        >

          <p style={{
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            marginTop: '10px',
            paddingTop: '10px',
          }}>
            {isMobile ? 'Tap to reveal the image!' : 'Move your mouse over to reveal the image!'}
          </p>
        </div>
      </div>

      <style>
        {`
          .card {
            transform-style: preserve-3d;
            cursor: pointer;
          }
          
          .card:hover {
            box-shadow: 0 25px 50px rgba(0,0,0,0.3);
          }

          @media (max-width: 768px) {
            .card-container {
              margin: 10px auto;
            }
          }

          @media (hover: none) {
            .card:hover {
              transform: none !important;
            }
            
            .card {
              transition: transform 0.3s ease;
            }
          }
        `}
      </style>
    </div>
  );
};

export default GlareCard;