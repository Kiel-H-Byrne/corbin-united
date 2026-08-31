"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { tokens } from "@/lib/theme";

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${tokens.radii.medium}px;
  background: ${tokens.colors.surface};
`;

const ImagesWrapper = styled.div<{ $translateX: number }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(p) => p.$translateX}%);
`;

const ImageSlide = styled.div`
  min-width: 100%;
  flex: 0 0 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 10000;
  padding: 10px;
  line-height: 1;
`;

const NavButton = styled.button<{ $position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(p) => (p.$position === "left" ? "left: 8px;" : "right: 8px;")}
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${tokens.shadows.sm};
  color: #ffffff;
  font-size: 1.5rem;
  z-index: 2;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 6px;
  z-index: 2;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${(p) => (p.$active ? tokens.colors.accent : "rgba(255, 255, 255, 0.6)")};
  cursor: pointer;
  padding: 0;
`;

export function ImageCarousel({ 
  images, 
  altText,
  initialModalOpen = false,
}: { 
  images: string[]; 
  altText: string;
  initialModalOpen?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(initialModalOpen);

  if (!images || images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <>
        <CarouselContainer>
          <StyledImage src={images[0]} alt={altText} loading="lazy" onClick={() => setIsModalOpen(true)} />
        </CarouselContainer>
        {isModalOpen && (
          <ModalOverlay onClick={() => setIsModalOpen(false)}>
            <CloseButton onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}>&times;</CloseButton>
            <ModalImage src={images[0]} alt={`${altText} - Full Size`} onClick={(e) => e.stopPropagation()} />
          </ModalOverlay>
        )}
      </>
    );
  }

  const goNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <CarouselContainer>
      <ImagesWrapper $translateX={-currentIndex * 100}>
        {images.map((img, idx) => (
          <ImageSlide key={idx}>
            <StyledImage src={img} alt={`${altText} - Image ${idx + 1}`} loading="lazy" onClick={() => setIsModalOpen(true)} />
          </ImageSlide>
        ))}
      </ImagesWrapper>

      {currentIndex > 0 && (
        <NavButton $position="left" onClick={goPrev} aria-label="Previous image">
          &#8249;
        </NavButton>
      )}
      
      {currentIndex < images.length - 1 && (
        <NavButton $position="right" onClick={goNext} aria-label="Next image">
          &#8250;
        </NavButton>
      )}

      <DotsContainer>
        {images.map((_, idx) => (
          <Dot
            key={idx}
            $active={idx === currentIndex}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </DotsContainer>

      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <CloseButton onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}>&times;</CloseButton>
          
          {currentIndex > 0 && (
            <NavButton $position="left" style={{ left: 20 }} onClick={(e) => { e.stopPropagation(); goPrev(); }}>
              &#8249;
            </NavButton>
          )}
          
          <ModalImage src={images[currentIndex]} alt={`${altText} - Full Size`} onClick={(e) => e.stopPropagation()} />
          
          {currentIndex < images.length - 1 && (
            <NavButton $position="right" style={{ right: 20 }} onClick={(e) => { e.stopPropagation(); goNext(); }}>
              &#8250;
            </NavButton>
          )}
        </ModalOverlay>
      )}
    </CarouselContainer>
  );
}
