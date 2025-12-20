"use client";

import { tokens } from "@/lib/theme";
import { Button } from "@/components/ui/Button";
import { ContentSection, SectionTitle, SectionText } from "@/components/ui/Section";

export function FundraisingSpotlight() {
  return (
    <ContentSection
      data-component="FundraisingSpotlight"
      style={{ marginTop: tokens.spacing.xl }}
    >
      <SectionTitle>Fundraising Spotlight</SectionTitle>
      <SectionText>
        <b>Spring Fundraiser</b>: Help us reach our goal to support more
        families!
        <br />
        <Button
          href="https://paypal.me/yourfoundation"
          target="_blank"
          rel="noopener"
          aria-label="Donate with PayPal"
        >
          Donate Now
        </Button>
      </SectionText>
    </ContentSection>
  );
}

