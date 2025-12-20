"use client";

import { tokens } from "@/lib/theme";
import styled from "styled-components";
import { BaseIcon } from "./BaseIcon";

export { BaseIcon };

export const CalendarIcon = () => (
  <BaseIcon>
    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
  </BaseIcon>
);

export const ClockIcon = () => (
  <BaseIcon>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </BaseIcon>
);

export const LocationIcon = () => (
  <BaseIcon>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </BaseIcon>
);

export const HeartIcon = () => (
  <BaseIcon>
    <path
      d="M12 21s-6.7-4.5-10-9C.5 7.5 3.5 3 7.5 3 9.7 3 11.2 4.2 12 5.6 12.8 4.2 14.3 3 16.5 3 20.5 3 23.5 7.5 22 12c-3.3 4.5-10 9-10 9z"
      fill="currentColor"
    />
  </BaseIcon>
);

export const FinanceIcon = () => (
  <BaseIcon>
    <line
      x1="12"
      y1="2"
      x2="12"
      y2="22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 5H10.24C8.4506 5 7 6.567 7 8.5C7 10.433 8.4506 12 10.24 12H13.5385C15.4502 12 17 13.567 17 15.5C17 17.433 15.4502 19 13.5385 19H7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </BaseIcon>
);

export const EducationIcon = () => (
  <BaseIcon>
    <path
      d="M12 4 3 9l9 5 9-5-9-5z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M6 11v4c0 2 3 3 6 3s6-1 6-3v-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </BaseIcon>
);

export const EventsIcon = () => (
  <BaseIcon>
    <rect
      x="4"
      y="5"
      width="16"
      height="15"
      rx="2"
      ry="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M9 3v4M15 3v4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M8 12h8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M8 15h8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </BaseIcon>
);

export const PeopleIcon = () => (
  <BaseIcon>
    <circle
      cx="12"
      cy="9"
      r="3.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M7 18.5c0-2.7 2.2-4.9 5-4.9s5 2.2 5 4.9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </BaseIcon>
);

export const AlbumIcon = () => (
  <BaseIcon>
    <rect
      x="3.5"
      y="7"
      width="17"
      height="12"
      rx="2"
      ry="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M9 7l1.2-2h3.6L15 7"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle
      cx="12"
      cy="13"
      r="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M6.5 11.5 9 14l1.2-1.2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);

export const FileIcon = () => (
  <BaseIcon>
    <path
      d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 3v5h5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 14h1.2c.9 0 1.8-.6 1.8-1.7 0-1.1-.9-1.7-1.8-1.7H9V17"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M13 17v-6h1.4c1.1 0 2 .8 2 2s-.9 2-2 2H13"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M17.8 11H19v6h-1.2"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </BaseIcon>
);

export const PhoneIcon = () => (
  <BaseIcon>
    <path
      d="M6.5 4h2l1 4-1.5 1.5a10.5 10.5 0 0 0 4.5 4.5L14 12l4 1v2a2 2 0 0 1-2.2 2C9.7 16.1 4.9 11.3 4 5.2A2 2 0 0 1 6.5 4z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);

export const MailIcon = () => (
  <BaseIcon>
    <rect
      x="3.5"
      y="6"
      width="17"
      height="12"
      rx="2"
      ry="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M4.5 8 12 12.5 19.5 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </BaseIcon>
);

export const ZelleIcon = styled((props: any) => (
  <svg {...props}>
    <path d="M13.559 24h-2.841a0.483 0.483 0 0 1 -0.483 -0.483v-2.765H5.638a0.667 0.667 0 0 1 -0.666 -0.666v-2.234a0.67 0.67 0 0 1 0.142 -0.412l8.139 -10.382h-7.25a0.667 0.667 0 0 1 -0.667 -0.667V3.914c0 -0.367 0.299 -0.666 0.666 -0.666h4.23V0.483c0 -0.266 0.217 -0.483 0.483 -0.483h2.841c0.266 0 0.483 0.217 0.483 0.483v2.765h4.323c0.367 0 0.666 0.299 0.666 0.666v2.137a0.67 0.67 0 0 1 -0.141 0.41l-8.19 10.481h7.665c0.367 0 0.666 0.299 0.666 0.666v2.477a0.667 0.667 0 0 1 -0.666 0.667h-4.32v2.765a0.483 0.483 0 0 1 -0.483 0.483Z" />
  </svg>
)).attrs({ viewBox: "0 0 24 24" })`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  path {
    fill: ${(p) => p.theme.colors.brandPurple};
  }
`;

export const CashAppIcon = styled((props: any) => (
  <svg {...props}>
    <path d="M23.59 3.475a5.1 5.1 0 0 0 -3.05 -3.05c-1.31 -0.42 -2.5 -0.42 -4.92 -0.42H8.36c-2.4 0 -3.61 0 -4.9 0.4a5.1 5.1 0 0 0 -3.05 3.06C0 4.765 0 5.965 0 8.365v7.27c0 2.41 0 3.6 0.4 4.9a5.1 5.1 0 0 0 3.05 3.05c1.3 0.41 2.5 0.41 4.9 0.41h7.28c2.41 0 3.61 0 4.9 -0.4a5.1 5.1 0 0 0 3.06 -3.06c0.41 -1.3 0.41 -2.5 0.41 -4.9v-7.25c0 -2.41 0 -3.61 -0.41 -4.91zm-6.17 4.63 -0.93 0.93a0.5 0.5 0 0 1 -0.67 0.01 5 5 0 0 0 -3.22 -1.18c-0.97 0 -1.94 0.32 -1.94 1.21 0 0.9 1.04 1.2 2.24 1.65 2.1 0.7 3.84 1.58 3.84 3.64 0 2.24 -1.74 3.78 -4.58 3.95l-0.26 1.2a0.49 0.49 0 0 1 -0.48 0.39H9.63l-0.09 -0.01a0.5 0.5 0 0 1 -0.38 -0.59l0.28 -1.27a6.54 6.54 0 0 1 -2.88 -1.57v-0.01a0.48 0.48 0 0 1 0 -0.68l1 -0.97a0.49 0.49 0 0 1 0.67 0c0.91 0.86 2.13 1.34 3.39 1.32 1.3 0 2.17 -0.55 2.17 -1.42 0 -0.87 -0.88 -1.1 -2.54 -1.72 -1.76 -0.63 -3.43 -1.52 -3.43 -3.6 0 -2.42 2.01 -3.6 4.39 -3.71l0.25 -1.23a0.48 0.48 0 0 1 0.48 -0.38h1.78l0.1 0.01c0.26 0.06 0.43 0.31 0.37 0.57l-0.27 1.37c0.9 0.3 1.75 0.77 2.48 1.39l0.02 0.02c0.19 0.2 0.19 0.5 0 0.68z" />
  </svg>
)).attrs({ viewBox: "0 0 24 24" })`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  path {
    fill: ${(p) => p.theme.colors.brandGreen};
  }
`;

export const AvatarIcon = ({
  size = 96,
  color = tokens.colors.button,
  stroke = 2,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
    />
    <circle
      cx="50"
      cy="38"
      r="18"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
    />
    <path
      d="M20 82c6-18 24-22 30-22s24 4 30 22"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
