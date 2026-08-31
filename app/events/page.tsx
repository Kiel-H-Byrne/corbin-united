"use client";

import { PageWrapper } from "@/components/layout/PageWrapper";
import { EventsSection } from "@/components/sections/EventsSection";
import { Suspense } from "react";

export default function EventsPage() {
  return (
    <PageWrapper>
      <Suspense fallback={<div style={{ padding: 40, textAlign: "center" }}>Loading events...</div>}>
        <EventsSection />
      </Suspense>
    </PageWrapper>
  );
}

