"use client";

import { HERO_CAROUSEL } from "@/data/events";
import { HeroCarouselItem } from "@/types";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const CarouselRoot = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  outline: none;
`;

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
  font-family: ${(p) => p.theme.typography.fontFamily};

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

const ControlsInner = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing.md}px;
  padding: ${(p) => p.theme.spacing.sm}px ${(p) => p.theme.spacing.lg}px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: ${(p) => p.theme.radii.large}px;
  box-shadow: ${(p) => p.theme.shadows.sm};
`;

const DotsRow = styled.div`
  display: flex;
  align-items: center;
`;

const SlideIndicator = styled.span`
  font-size: ${(p) => p.theme.typography.body2}px;
  color: ${(p) => p.theme.colors.textSecondary};
`;

const Dot = styled.button`
  background-color: ${(p) => p.theme.colors.border};
  border: none;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  margin: 0 ${(p) => p.theme.spacing.xs}px;
  cursor: pointer;
  transition: background-color 0.3s;

  &.active {
    background-color: ${(p) => p.theme.colors.accent};
  }
  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.accent};
    outline-offset: 2px;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: none;
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.accent};
  box-shadow: ${(p) => p.theme.shadows.sm};
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${(p) => p.theme.colors.accent};
    color: ${(p) => p.theme.colors.surface};
    transform: translateY(-50%) scale(1.03);
  }

  &:focus-visible {
    outline: 2px solid ${(p) => p.theme.colors.accent};
    outline-offset: 2px;
  }
`;

type CarouselItemProps = {
  item: HeroCarouselItem;
  isActive: boolean;
  index: number;
  total: number;
};

const CarouselItem = ({ item, isActive, index, total }: CarouselItemProps) => {
  const { textContent, type, url, aspect } = item;
  const [width, height] = aspect.split(":").map(Number);
  const MAX_HEIGHT = 500;
  const ASPECT_WIDTH = MAX_HEIGHT * (width / height);
  return (
    <CarouselItemContainer
      className={isActive ? "active" : ""}
      role="group"
      aria-roledescription="slide"
      aria-label={`${item.title} (${index + 1} of ${total})`}
    >
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
  const total = HERO_CAROUSEL.length;
  const activeItem = HERO_CAROUSEL[activeIndex];

  const goToIndex = (index: number) => {
    setActiveIndex((index + total) % total);
  };

  const goNext = () => {
    goToIndex(activeIndex + 1);
  };

  const goPrev = () => {
    goToIndex(activeIndex - 1);
  };

  return (
    <CarouselRoot
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured family messages"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goNext();
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          goPrev();
        }
      }}
    >
      <CarouselItem
        key={activeItem.title}
        item={activeItem}
        isActive
        index={activeIndex}
        total={total}
      />

      {total > 1 && (
        <>
          <NavButton
            type="button"
            style={{ left: 16 }}
            onClick={goPrev}
            aria-label="Previous slide"
          >
            {"‹"}
          </NavButton>
          <NavButton
            type="button"
            style={{ right: 16 }}
            onClick={goNext}
            aria-label="Next slide"
          >
            {"›"}
          </NavButton>
        </>
      )}

      {total > 1 && (
        <DotsContainer aria-label="Carousel pagination">
          <ControlsInner>
            <SlideIndicator>
              Slide {activeIndex + 1} of {total}
            </SlideIndicator>
            <DotsRow>
              {HERO_CAROUSEL.map((item, index) => (
                <Dot
                  key={item.title}
                  type="button"
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => goToIndex(index)}
                  aria-label={`Show slide ${index + 1}: ${item.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </DotsRow>
          </ControlsInner>
        </DotsContainer>
      )}
    </CarouselRoot>
  );
};
