"use client";

import { HERO_CAROUSEL } from "@/data/events";
import { HeroCarouselItem } from "@/types";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const CarouselItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(p) => p.theme.spacing.lg}px;
  animation: fadeIn 0.5s ease-in-out;
  padding: ${(p) => p.theme.spacing.xl}px;
  min-height: 500px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: ${(p) => p.theme.spacing.xl}px ${(p) => p.theme.spacing.lg}px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const MediaContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${(p) => p.theme.radii.large}px;
  overflow: hidden;

  video,
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(p) => p.theme.colors.text};
  text-align: left;
  font-family: "Merriweather", serif;

  p {
    margin: 0;
  }

  .greeting {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: ${(p) => p.theme.spacing.md}px;
  }

  .message {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: ${(p) => p.theme.spacing.md}px;
  }

  .closing {
    font-style: italic;
    margin-bottom: ${(p) => p.theme.spacing.sm}px;
  }

  .signature {
    font-weight: 700;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${(p) => p.theme.spacing.md}px;
  z-index: 1;
`;

const Dot = styled.button`
  background-color: ${(p) => p.theme.colors.border};
  border: none;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin: 0 ${(p) => p.theme.spacing.xs}px;
  cursor: pointer;
  transition: background-color 0.3s;

  &.active {
    background-color: ${(p) => p.theme.colors.accent};
  }
`;

type CarouselItemProps = {
  item: HeroCarouselItem;
  isActive: boolean;
};

const CarouselItem = ({ item, isActive }: CarouselItemProps) => {
  const { textContent, type, url, aspect } = item;
  const [width, height] = aspect.split(":").map(Number);
  const MAX_HEIGHT = 500;
  const ASPECT_WIDTH = MAX_HEIGHT * (width / height);
  return (
    <CarouselItemContainer className={isActive ? "active" : ""}>
      <MediaContainer
        style={{
          maxHeight: `${MAX_HEIGHT}px`,
          aspectRatio: `${width} / ${height}`,
        }}
      >
        {type === "video" ? (
          <video src={url} autoPlay muted loop playsInline controls />
        ) : (
          <Image
            src={url}
            alt={item.title}
            width={ASPECT_WIDTH}
            height={MAX_HEIGHT}
          />
        )}
      </MediaContainer>
      <TextContainer>
        {textContent.greeting && (
          <p className="greeting">{textContent.greeting},</p>
        )}
        <p className="message">{textContent.message}</p>
        {textContent.closing && (
          <p className="closing">{textContent.closing}</p>
        )}
        {textContent.signature && (
          <p className="closing">
            {textContent.signature.text ? textContent.signature.text + "," : ""}
          </p>
        )}
        {textContent.signature && (
          <p className="signature">{textContent.signature.name}</p>
        )}
      </TextContainer>
    </CarouselItemContainer>
  );
};

export const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = HERO_CAROUSEL[activeIndex];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <CarouselItem key={activeIndex} item={activeItem} isActive={true} />
      <DotsContainer>
        {HERO_CAROUSEL.map((_, index) => (
          <Dot
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </DotsContainer>
    </div>
  );
};
