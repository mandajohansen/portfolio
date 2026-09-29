const PATHS = {
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5',
  tools: 'M14.5 4a4.5 4.5 0 0 0-4.2 6.1L4 16.4 7.6 20l6.3-6.3A4.5 4.5 0 0 0 20 9.5l-2.8 2.8-3.5-3.5L16.5 6A4.5 4.5 0 0 0 14.5 4Z',
  chart: 'M5 20v-7M10 20V9M15 20v-9M20 20V5',
  pin: 'M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  chat: 'M4 20l1.3-3.9A8 8 0 1 1 8 18.8L4 20Z',
  doc: 'M7 3h7l4 4v14H7V3Zm7 0v4h4M10 12h5M10 16h5',
  people:
    'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-6 9c0-3 2.7-5 6-5s6 2 6 5M16 4.5a3.5 3.5 0 0 1 0 6.5M18 15c1.9.6 3 2.3 3 5',
  bulb: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z',
  leaf: 'M5 19C5 10 11 5 20 4c-1 9-6 15-15 15Zm0 0 8-8',
  pen: 'M4 20l1-4L16 5l3 3L8 19l-4 1ZM14 7l3 3',
  code: 'M9 8l-4 4 4 4M15 8l4 4-4 4',
  mail: 'M3 6h18v12H3V6Zm0 0 9 7 9-7',
  linkedin: 'M4 4h16v16H4V4ZM8 10v6M8 7.5v.01M12 16v-6M12 12.5c0-1.5 1-2.5 2.3-2.5S16 11 16 12.5V16',
};

export default function Icon({ name, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
