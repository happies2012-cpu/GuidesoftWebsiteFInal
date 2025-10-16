"use client";

import React, { useState } from "react";

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const SmartImage: React.FC<SmartImageProps> = ({ src, alt = "", fallbackSrc = "/placeholder.svg", ...rest }) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!error) setError(true);
  };

  return (
    <img
      src={error ? fallbackSrc : (src as string)}
      alt={alt}
      onError={handleError}
      {...rest}
    />
  );
};

export default SmartImage;


