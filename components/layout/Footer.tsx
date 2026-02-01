"use client";

import Link from "next/link";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useCms } from "@/components/cms/useCms";
import { MailIcon, PhoneIcon, CopyIcon, CameraIcon, XIcon } from "@/components/icons";

const FooterContainer = styled.footer`
  width: 100%;
  background: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.surface};
  margin-top: auto;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${(p) => p.theme.spacing.xxl}px ${(p) => p.theme.spacing.lg}px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${(p) => p.theme.spacing.xl}px;
  margin-bottom: ${(p) => p.theme.spacing.xl}px;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const FooterCol = styled.div``;

const FooterTitle = styled.h4`
  color: ${(p) => p.theme.colors.surface};
  font-family: ${(p) => p.theme.typography.headingFont};
  font-size: ${(p) => p.theme.typography.h5Size}px;
  margin-bottom: ${(p) => p.theme.spacing.md}px;
  font-weight: 700;
  position: relative;
  padding-bottom: ${(p) => p.theme.spacing.sm}px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: ${(p) => p.theme.colors.secondary};

    @media (max-width: 600px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: ${(p) => p.theme.typography.body2}px;
  line-height: 1.7;
  margin: 0;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.9);
  font-size: ${(p) => p.theme.typography.body2}px;
  text-decoration: none;
  display: block;
  padding: ${(p) => p.theme.spacing.xs}px 0;
  transition: ${(p) => p.theme.transitions.fast};

  &:hover {
    color: ${(p) => p.theme.colors.surface};
    transform: translateX(4px);
    text-decoration: none;
  }

  @media (max-width: 600px) {
    &:hover {
      transform: none;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing.sm}px;
  margin-bottom: ${(p) => p.theme.spacing.sm}px;
  color: rgba(255, 255, 255, 0.9);
  font-size: ${(p) => p.theme.typography.body2}px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${(p) => p.theme.spacing.md}px;
  margin-top: ${(p) => p.theme.spacing.md}px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.surface};
  transition: ${(p) => p.theme.transitions.fast};

  &:hover {
    background: ${(p) => p.theme.colors.surface};
    color: ${(p) => p.theme.colors.accent};
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${(p) => p.theme.spacing.lg}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: ${(p) => p.theme.spacing.md}px;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: ${(p) => p.theme.typography.subscript}px;
  margin: 0;
`;

const MissionText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: ${(p) => p.theme.typography.subscript}px;
  font-style: italic;
  margin: 0;
`;

const ReminderSection = styled.section`
  width: 100%;
  background: ${(p) => p.theme.colors.surfaceAlt};
  padding: ${(p) => p.theme.spacing.xl}px ${(p) => p.theme.spacing.lg}px;
`;

const ReminderInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(p) => p.theme.spacing.md}px;
  text-align: center;
`;

const ReminderHeadline = styled.h3`
  font-family: ${(p) => p.theme.typography.headingFont};
  color: ${(p) => p.theme.colors.accent};
  font-size: ${(p) => p.theme.typography.h4Size}px;
  margin: 0;
`;

const ReminderButton = styled.button`
  border: none;
  cursor: pointer;
  background: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.surface};
  padding: ${(p) => p.theme.spacing.sm}px ${(p) => p.theme.spacing.lg}px;
  border-radius: ${(p) => p.theme.radii.medium}px;
  font-weight: ${(p) => p.theme.typography.bodyFontWeightMedium};
  transition: ${(p) => p.theme.transitions.fast};

  &:hover {
    background: ${(p) => p.theme.colors.accentHover};
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalCard = styled.div`
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.text};
  border-radius: ${(p) => p.theme.radii.large}px;
  box-shadow: ${(p) => p.theme.shadows.lg};
  padding: ${(p) => p.theme.spacing.lg}px;
  width: min(560px, 92vw);
`;

const ModalTitle = styled.h4`
  margin: 0 0 ${(p) => p.theme.spacing.md}px 0;
  font-family: ${(p) => p.theme.typography.headingFont};
  color: ${(p) => p.theme.colors.accent};
`;

const ModalBody = styled.p`
  margin: 0 0 ${(p) => p.theme.spacing.md}px 0;
`;

const CopyRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => p.theme.spacing.sm}px;
  background: ${(p) => p.theme.colors.surfaceAlt};
  padding: ${(p) => p.theme.spacing.sm}px ${(p) => p.theme.spacing.md}px;
  border-radius: ${(p) => p.theme.radii.medium}px;
  justify-content: space-between;
`;

const CopyEmail = styled.span`
  font-weight: ${(p) => p.theme.typography.bodyFontWeightMedium};
  word-break: break-all;
`;

const CopyButton = styled.button`
  border: none;
  background: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.surface};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  position: relative;
  overflow: visible;
`;

const CopiedToast = styled.span`
  position: absolute;
  right: calc(100% + ${(p) => p.theme.spacing.xs}px);
  top: 50%;
  transform: translateY(-50%);
  padding: 4px 8px;
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.accent};
  border-radius: ${(p) => p.theme.radii.small}px;
  border: 1px solid ${(p) => p.theme.colors.border};
  font-size: ${(p) => p.theme.typography.subscript}px;
  white-space: nowrap;
  pointer-events: none;
`;

const ModalActions = styled.div`
  margin-top: ${(p) => p.theme.spacing.md}px;
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  border: none;
  background: ${(p) => p.theme.colors.surfaceAlt};
  color: ${(p) => p.theme.colors.text};
  padding: ${(p) => p.theme.spacing.xs}px ${(p) => p.theme.spacing.md}px;
  border-radius: ${(p) => p.theme.radii.medium}px;
  cursor: pointer;
`;

export function Footer() {
  const { getFooterText, getFooterContact, getCtaSection } = useCms();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [cta, setCta] = useState<{
    headline: string;
    buttonLabel: string;
    modalTitle?: string;
    modalBody: string;
    contactEmail: string;
  } | null>(null);
  const [footerText, setFooterText] = useState<{
    aboutTitle: string;
    aboutBody: string;
    missionText?: string;
    copyrightText?: string;
  } | null>(null);
  const [footerContact, setFooterContact] = useState<{
    email?: string;
    phone?: string;
  } | null>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    let active = true;

    getFooterText().then((text) => {
      if (!active) return;
      if (text) {
        setFooterText({
          aboutTitle: text.aboutTitle,
          aboutBody: text.aboutBody,
          missionText: text.missionText,
          copyrightText: text.copyrightText,
        });
      }
    });

    getFooterContact().then((contact) => {
      if (!active) return;
      if (contact) {
        setFooterContact({
          email: contact.email,
          phone: contact.phone,
        });
      }
    });

    getCtaSection("suggestion-box").then((section) => {
      if (!active) return;
      if (section) {
        setCta({
          headline: section.headline,
          buttonLabel: section.buttonLabel,
          modalTitle: section.modalTitle,
          modalBody: section.modalBody,
          contactEmail: section.contactEmail,
        });
      }
    });

    return () => {
      active = false;
    };
  }, [getFooterContact, getFooterText, getCtaSection]);

  if (!footerText && !footerContact && !cta) {
    return null;
  }

  const copyright =
    footerText?.copyrightText?.replace("{year}", String(currentYear)) ??
    `© ${currentYear} Corbin United Inc. All rights reserved.`;

  const suggestionEmail = cta?.contactEmail ?? "corbinunited2025@gmail.com";

  return (
    <>
      {cta && (
        <ReminderSection>
          <ReminderInner>
            <ReminderHeadline>{cta.headline}</ReminderHeadline>
            <ReminderButton type="button" onClick={() => setIsModalOpen(true)}>
              {cta.buttonLabel}
            </ReminderButton>
          </ReminderInner>
        </ReminderSection>
      )}
      <FooterContainer>
        <FooterInner>
          <FooterGrid>
          {footerText && (
            <FooterCol>
              <FooterTitle>{footerText.aboutTitle}</FooterTitle>
              <FooterText>{footerText.aboutBody}</FooterText>
            </FooterCol>
          )}

          <FooterCol>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink href="/health">Health Information</FooterLink>
            <FooterLink href="/finances">Financial Assistance</FooterLink>
            <FooterLink href="/education">Scholarships</FooterLink>
            <FooterLink href="/events">Events</FooterLink>
            <FooterLink href="/about">Our Leadership</FooterLink>
            <FooterLink href="/family-album">Family Album</FooterLink>
          </FooterCol>

          {footerContact && (
            <FooterCol>
              <FooterTitle>Contact Us</FooterTitle>
              {!!footerContact.email && (
                <ContactItem>
                  <MailIcon />
                  <span>{footerContact.email}</span>
                </ContactItem>
              )}
              {!!footerContact.phone && (
                <ContactItem>
                  <PhoneIcon />
                  <span>{footerContact.phone}</span>
                </ContactItem>
              )}
              {/* <SocialLinks>
                <SocialLink href="#" aria-label="Facebook">
                  f
                </SocialLink>
                <SocialLink href="#" aria-label="Instagram">
                  <CameraIcon />
                </SocialLink>
                <SocialLink href="#" aria-label="Twitter">
                  <XIcon />
                </SocialLink>
              </SocialLinks> */}
            </FooterCol>
          )}
        </FooterGrid>

          <FooterBottom>
            <Copyright>{copyright}</Copyright>
            {footerText?.missionText && (
              <MissionText>{footerText.missionText}</MissionText>
            )}
          </FooterBottom>
        </FooterInner>
      </FooterContainer>
      {isModalOpen && cta && (
        <ModalOverlay
          role="dialog"
          aria-modal="true"
          aria-label={cta.modalTitle ?? "Suggestion Box"}
          onClick={() => setIsModalOpen(false)}
        >
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalTitle>{cta.modalTitle ?? "Suggestion Box"}</ModalTitle>
            <ModalBody>{cta.modalBody}</ModalBody>
            <CopyRow>
              <CopyEmail>{suggestionEmail}</CopyEmail>
              <CopyButton
                type="button"
                aria-label="Copy email"
                onClick={() => {
                  navigator.clipboard.writeText(suggestionEmail);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
              >
                <CopyIcon />
                {copied && <CopiedToast>Copied!</CopiedToast>}
              </CopyButton>
            </CopyRow>
            <ModalActions>
              <CloseButton type="button" onClick={() => setIsModalOpen(false)}>
                Close
              </CloseButton>
            </ModalActions>
          </ModalCard>
        </ModalOverlay>
      )}
    </>
  );
}
