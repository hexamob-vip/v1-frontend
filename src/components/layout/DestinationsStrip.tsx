import Link from "next/link";
import { getDestinationByLabel, stripDestinations } from "@/lib/hexamob/destinations";
import { cn } from "@/lib/hexamob/cn";

type DestinationsStripProps = {
  className?: string;
};

export default function DestinationsStrip({ className }: DestinationsStripProps) {
  return (
    <section
      className={cn(
        "relative flex w-screen flex-col justify-center overflow-hidden py-[3vw] max-lg:py-[6vw]",
        className,
      )}
    >
      <div className="mx-[3vw] flex justify-between uppercase text-white/40 max-lg:flex-wrap max-lg:gap-[2vw] max-lg:text-[2.8vw]">
        {stripDestinations.map((city) => {
          const destination = getDestinationByLabel(city);
          if (!destination) {
            return <div key={city}>{city}</div>;
          }
          return (
            <Link
              key={city}
              href={`/destinations/${destination.slug}`}
              className="transition hover:text-white"
            >
              {city}
            </Link>
          );
        })}
      </div>
      <div className="mx-[3vw] mt-[2vw] h-px w-[94vw] origin-left bg-white/50/20" />
    </section>
  );
}
