"use client";

import styled from "styled-components";
import { tokens } from "@/lib/theme";
import { ContentSection, SectionTitle, SectionText } from "@/components/ui/Section";
import { CalendarIcon, ClockIcon, LocationIcon } from "@/components/icons";
import { PaymentOptions } from "@/components/PaymentOptions";
import { UPCOMING_EVENTS, PAST_EVENTS } from "@/data/events";

const EventCarousel = styled.div.attrs({
  "data-component": "EventCarousel",
  role: "region",
  "aria-label": "Upcoming events",
})`
  display: flex;
  gap: ${(p) => p.theme.spacing.lg}px;
  overflow-x: auto;
  padding-bottom: ${(p) => p.theme.spacing.md}px;
  margin-bottom: ${(p) => p.theme.spacing.md}px;
`;

const EventCard = styled.div.attrs({ "data-component": "EventCard" } as any)`
  min-width: 220px;
  background: ${(p) => p.theme.colors.surfaceAlt};
  border-radius: ${(p) => p.theme.radii.large}px;
  box-shadow: ${(p) => p.theme.cardShadow};
  padding: ${(p) => p.theme.spacing.md}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${(p) => p.theme.spacing.sm}px;
`;

const NextEventCard = styled.div.attrs({
  "data-component": "NextEventCard",
} as any)`
  display: flex;
  background: ${(p) => p.theme.colors.surfaceAlt};
  border-radius: ${(p) => p.theme.radii.large}px;
  box-shadow: ${(p) => p.theme.cardShadow};
  padding: ${(p) => p.theme.spacing.md}px;
  margin-bottom: ${(p) => p.theme.spacing.lg}px;
  gap: ${(p) => p.theme.spacing.md}px;
  width: 100%;
`;

const NextEventThumbnail = styled.img.attrs({
  "data-component": "NextEventThumbnail",
} as any)`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: ${(p) => p.theme.radii.medium}px;
`;

const NextEventDetails = styled.div.attrs({
  "data-component": "NextEventDetails",
} as any)`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

const NextEventTitle = styled.h3.attrs({
  "data-component": "NextEventTitle",
} as any)`
  font-size: ${(p) => p.theme.typography.h6Size}px;
  color: ${(p) => p.theme.colors.accent};
  font-family: "Merriweather", serif;
  margin: 0 0 ${(p) => p.theme.spacing.sm}px 0;
`;

const NextEventInfo = styled.div.attrs({
  "data-component": "NextEventInfo",
} as any)`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.xs}px;
`;

const EventTitle = styled.h3`
  font-size: ${(p) => p.theme.typography.h6Size}px;
  color: ${(p) => p.theme.colors.accent};
  font-family: "Merriweather", serif;
  margin: 0;
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.sm}px;
  margin: ${(p) => p.theme.spacing.md}px 0;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing.sm}px;
  font-size: 0.95rem;

  svg {
    width: 20px;
    height: 20px;
    fill: ${(p) => p.theme.colors.accent};
  }
`;

const DescList = styled.div`
  margin-top: ${(p) => p.theme.spacing.md}px;

  h4 {
    font-weight: 700;
    margin-bottom: ${(p) => p.theme.spacing.sm}px;
  }

  ul {
    list-style-type: "✓";
    padding-left: ${(p) => p.theme.spacing.lg}px;
  }

  li {
    margin-bottom: ${(p) => p.theme.spacing.xs}px;
    padding-left: ${(p) => p.theme.spacing.sm}px;
  }
`;

export function EventsSection() {
  return (
    <ContentSection data-component="EventsSection">
      <SectionTitle>Upcoming Events</SectionTitle>
      <NextEventCard>
        <NextEventThumbnail
          src={UPCOMING_EVENTS[0].thumbnailUrl}
          alt={UPCOMING_EVENTS[0].title}
        />
        <NextEventDetails>
          <NextEventTitle>{UPCOMING_EVENTS[0].title}</NextEventTitle>
          <NextEventInfo>
            <DetailItem>
              <CalendarIcon />{" "}
              {new Date(UPCOMING_EVENTS[0].date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </DetailItem>
            <DetailItem>
              <ClockIcon /> {UPCOMING_EVENTS[0].time}
            </DetailItem>
            <DetailItem>
              <LocationIcon /> {UPCOMING_EVENTS[0].location}
            </DetailItem>
          </NextEventInfo>
        </NextEventDetails>
        {UPCOMING_EVENTS[0].payment && (
          <PaymentOptions payment={UPCOMING_EVENTS[0].payment} view="compact" />
        )}
      </NextEventCard>
      <SectionText>Upcoming Events:</SectionText>
      <EventCarousel>
        {UPCOMING_EVENTS.map((ev) => (
          <EventCard key={ev.title}>
            <img
              src={ev.img}
              alt={ev.title}
              style={{ width: "100%", borderRadius: tokens.radii.medium }}
              data-component="EventImage"
              loading="lazy"
            />
            <EventTitle>{ev.title}</EventTitle>
            <EventDetails>
              <DetailItem>
                <CalendarIcon />{" "}
                {new Date(ev.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </DetailItem>
              <DetailItem>
                <ClockIcon /> {ev.time}
              </DetailItem>
              <DetailItem>
                <LocationIcon /> {ev.location}
              </DetailItem>
            </EventDetails>
            <span>{ev.desc}</span>
            {ev.descLists &&
              ev.descLists.map((list) => (
                <DescList key={list.title}>
                  <h4>{list.title}</h4>
                  <ul>
                    {list.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </DescList>
              ))}
            {ev.payment && <PaymentOptions payment={ev.payment} />}
          </EventCard>
        ))}
      </EventCarousel>
      <SectionText>Past Events:</SectionText>
      <EventCarousel>
        {PAST_EVENTS.map((ev) => (
          <EventCard key={ev.title}>
            <img
              src={ev.img}
              alt={ev.title}
              style={{ width: "100%", borderRadius: tokens.radii.medium }}
              data-component="PastEventImage"
              loading="lazy"
            />
            <b>{ev.title}</b>
          </EventCard>
        ))}
      </EventCarousel>
    </ContentSection>
  );
}

