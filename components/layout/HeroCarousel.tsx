"use client";

import { HERO_CAROUSEL } from "@/data/events";
import { HeroCarouselItem } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  padding: ${(p) => p.theme.spacing.sm}px;
  z-index: 1;

  @media (min-width: 768px) {
    padding: ${(p) => p.theme.spacing.md}px;
  }
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

const NavButton = styled.button<{ $position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(p) => (p.$position === "left" ? "left: 16px;" : "right: 16px;")};
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

  @media (max-width: 767px) {
    width: 32px;
    height: 32px;
    ${(p) => (p.$position === "left" ? "left: 8px;" : "right: 8px;")};
  }

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

const PausePlayButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
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
    transform: scale(1.03);
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
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  const total = HERO_CAROUSEL.length;
  const activeItem = HERO_CAROUSEL[activeIndex];

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    ) {
      setPrefersReducedMotion(false);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    setPrefersReducedMotion(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isPausedByUser || isInteracting || total <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion, isPausedByUser, isInteracting, total]);

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
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocus={() => setIsInteracting(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsInteracting(false);
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
            $position="left"
            onClick={goPrev}
            aria-label="Previous slide"
          >
            {"‹"}
          </NavButton>
          <NavButton
            type="button"
            $position="right"
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
            <PausePlayButton
              type="button"
              onClick={() => setIsPausedByUser((prev) => !prev)}
              aria-label={
                isPausedByUser ? "Resume auto-advance" : "Pause auto-advance"
              }
            >
              {isPausedByUser ? "▶" : "❚❚"}
            </PausePlayButton>
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
