import type { ReactNode } from "react";

type Amenity = {
  label: string;
  icon: ReactNode;
};

const iconClass = "h-[2.2vw] w-[2.2vw] max-lg:h-[7vw] max-lg:w-[7vw]";

const amenities: Amenity[] = [
  {
    label: "Wifi",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 0 1 7.778 0M5.283 13.576a9.5 9.5 0 0 1 13.434 0M2.454 10.748a13.5 13.5 0 0 1 19.092 0M12 20h.01" />
      </svg>
    ),
  },
  {
    label: "Tablette à bord",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass} aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <circle cx="12" cy="18" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Sièges chauffants",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 14v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3M7 14V9a2 2 0 0 1 2-2h1.5M17 14V9a2 2 0 0 0-2-2h-1.5M9 11h6" />
        <path strokeLinecap="round" d="M12 4v2M9.5 5l1 1.7M14.5 5l-1 1.7" />
      </svg>
    ),
  },
  {
    label: "Toit panoramique",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 14h18M5 14V11a7 7 0 0 1 14 0v3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 11h8M12 8V5M9.5 6.5 12 8l2.5-1.5" />
      </svg>
    ),
  },
  {
    label: "BOISSONS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 3h8l-1 13a3 3 0 0 1-6 0L8 3z" />
        <path strokeLinecap="round" d="M7 7h10M6 21h12" />
      </svg>
    ),
  },
  {
    label: "sièges enfant",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={iconClass} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM8 21v-2a4 4 0 0 1 8 0v2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 14h12l-1 4H7l-1-4z" />
        <path strokeLinecap="round" d="M9 14V11h6v3" />
      </svg>
    ),
  },
];

export default function QualityAmenities() {
  return (
    <div
      id="cert-badges"
      className="ml-[3vw] mt-[2vw] flex flex-wrap gap-[0vw] max-lg:mt-[6vw] max-lg:gap-[4vw]"
    >
      {amenities.map(({ label, icon }) => (
        <div
          key={label}
          className="cert-badge flex w-[8vw] flex-col items-center text-center text-gold-500 max-lg:w-[26vw]"
        >
          {icon}
          <span className="mt-[0.6vw] text-[0.65vw] uppercase leading-tight max-lg:mt-[2vw] max-lg:text-[2.4vw] text-white">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
