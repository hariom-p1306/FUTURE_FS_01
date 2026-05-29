// src/components/BlurBlob/BlurBlob.jsx

import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({
  top = "50%",
  left = "50%",
  size = "420px",
  color1 = "#8245ec",
  color2 = "#ec4899",
  color3 = "#38bdf8",
  opacity = 0.35,
  blur = "120px",
  delay = "0s",
  duration = "8s",
  zIndex = 0,
  className = "",
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none select-none ${className}`}
      style={{
        top,
        left,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        animationDelay: delay,
        animationDuration: duration,
        zIndex,
      }}
    >
      <div
        className="w-full h-full rounded-full animate-blob-premium"
        style={{
          opacity,
          filter: `blur(${blur})`,
          background: `
            radial-gradient(circle at 30% 30%, ${color1}, transparent 45%),
            radial-gradient(circle at 70% 60%, ${color2}, transparent 50%),
            radial-gradient(circle at 45% 80%, ${color3}, transparent 45%)
          `,
        }}
      />
    </div>
  );
};

BlurBlob.propTypes = {
  top: PropTypes.string,
  left: PropTypes.string,
  size: PropTypes.string,
  color1: PropTypes.string,
  color2: PropTypes.string,
  color3: PropTypes.string,
  opacity: PropTypes.number,
  blur: PropTypes.string,
  delay: PropTypes.string,
  duration: PropTypes.string,
  zIndex: PropTypes.number,
  className: PropTypes.string,
};

export default BlurBlob;