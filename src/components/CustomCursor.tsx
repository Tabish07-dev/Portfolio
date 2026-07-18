import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const addListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const handleLinkHover = () => {
      const targets = document.querySelectorAll('a, button, input, textarea, [role="button"]');
      targets.forEach((elem) => {
        elem.addEventListener('mouseenter', () => setLinkHovered(true));
        elem.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    addListeners();
    handleLinkHover();

    const observer = new MutationObserver(handleLinkHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      removeListeners();
      observer.disconnect();
    };
  }, []);

  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
  if (hidden || isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] transition-transform duration-200 ease-out -translate-x-1/2 -translate-y-1/2 border border-blue-500/50 mix-blend-difference ${
          clicked ? 'scale-75 bg-blue-500/20' : linkHovered ? 'scale-150 bg-blue-500/10 border-blue-400' : 'scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
      {/* Inner Dot */}
      <div
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 bg-blue-500 mix-blend-difference transition-transform duration-100 ${
          linkHovered ? 'scale-0' : 'scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
    </>
  );
};

export default CustomCursor;
