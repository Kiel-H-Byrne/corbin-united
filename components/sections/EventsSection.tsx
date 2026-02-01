"use client";

import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { tokens } from "@/lib/theme";
import { ContentSection, SectionTitle, SectionText } from "@/components/ui/Section";
import {
  CalendarIcon,
  ClockIcon,
  LocationIcon,
  CashAppIcon,
  ZelleIcon,
} from "@/components/icons";
import { PaymentOptions } from "@/components/PaymentOptions";
import { useCms } from "@/components/cms/useCms";
import { type Event as CmsEvent, type PastEvent as CmsPastEvent } from "@/components/cms/types";
import { type Event, type PastEvent } from "@/types";

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
  const { getEvents, getPastEvents, getSections } = useCms();
  const [title, setTitle] = useState("Upcoming Events");
  const [events, setEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<PastEvent[]>([]);

  const iconMap = useMemo(
    () => ({
      cashapp: <CashAppIcon />,
      zelle: <ZelleIcon />,
    }),
    []
  );

  useEffect(() => {
    let active = true;

    getSections().then((sections) => {
      if (!active) return;
      const match = (sections ?? []).find((sec) => sec.key === "events");
      if (match?.label) {
        setTitle(match.label);
      }
    });

    getEvents().then((cmsEvents) => {
      if (!active) return;
      if (!cmsEvents || cmsEvents.length === 0) return;
      const mapped = cmsEvents.map((ev: CmsEvent) => ({
        title: ev.title,
        date: ev.date ?? "",
        location: ev.location ?? "",
        time: ev.time ?? "",
        desc: ev.desc ?? "",
        img: ev.img ?? "",
        thumbnailUrl: ev.thumbnailUrl ?? ev.img ?? "",
        descLists: ev.descLists?.map((list) => ({
          title: list.title ?? "",
          items: list.items ?? [],
        })),
        payment: ev.payment
          ? {
              amount: {
                amount: ev.payment.amount?.amount ?? "",
                per: ev.payment.amount?.per ?? "",
              },
              options: (ev.payment.options ?? []).map((opt) => ({
                service: opt.service ?? "",
                username: opt.username ?? "",
                url: opt.url,
                icon: opt.iconName
                  ? iconMap[opt.iconName as keyof typeof iconMap]
                  : null,
              })),
              note: ev.payment.note ?? "",
              closingWords: ev.closingWords ?? "",
            }
          : undefined,
        closingWords: ev.closingWords,
      }));
      setEvents(mapped);
    });

    getPastEvents().then((cmsPastEvents) => {
      if (!active) return;
      if (!cmsPastEvents || cmsPastEvents.length === 0) return;
      const mapped = cmsPastEvents.map((ev: CmsPastEvent) => ({
        title: ev.title,
        img: ev.img ?? "",
      }));
      setPastEvents(mapped);
    });

    return () => {
      active = false;
    };
  }, [getEvents, getPastEvents, getSections, iconMap]);

  const nextEvent = events[0];

  return (
    <ContentSection data-component="EventsSection">
      <SectionTitle>{title}</SectionTitle>
      {nextEvent && (
        <NextEventCard>
          <NextEventThumbnail
            src={nextEvent.thumbnailUrl}
            alt={nextEvent.title}
          />
          <NextEventDetails>
            <NextEventTitle>{nextEvent.title}</NextEventTitle>
            <NextEventInfo>
              <DetailItem>
                <CalendarIcon />{" "}
                {nextEvent.date
                  ? new Date(nextEvent.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "TBD"}
              </DetailItem>
              <DetailItem>
                <ClockIcon /> {nextEvent.time || "TBD"}
              </DetailItem>
              <DetailItem>
                <LocationIcon /> {nextEvent.location || "TBD"}
              </DetailItem>
            </NextEventInfo>
          </NextEventDetails>
          {nextEvent.payment && (
            <PaymentOptions payment={nextEvent.payment} view="compact" />
          )}
        </NextEventCard>
      )}
      {events.length > 0 && (
        <>
          <SectionText>Upcoming Events:</SectionText>
          <EventCarousel>
            {events.map((ev) => (
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
                    {ev.date
                      ? new Date(ev.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "TBD"}
                  </DetailItem>
                  <DetailItem>
                    <ClockIcon /> {ev.time || "TBD"}
                  </DetailItem>
                  <DetailItem>
                    <LocationIcon /> {ev.location || "TBD"}
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
        </>
      )}
      {pastEvents.length > 0 && (
        <>
          <SectionText>Past Events:</SectionText>
          <EventCarousel>
            {pastEvents.map((ev) => (
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
        </>
      )}
    </ContentSection>
  );
}
