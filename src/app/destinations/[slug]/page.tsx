import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DestinationPage from "@/components/destinations/DestinationPage";
import { destinations, getDestinationBySlug, getDestinationCityImages } from "@/lib/hexamob/destinations";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return { title: "Destination — HEXAMOB" };
  }

  return {
    title: `VTC ${destination.label} — Circuits et Transport privé HEXAMOB`,
    description: destination.intro,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const { heroImage, bannerImage } = getDestinationCityImages(
    slug,
    destination.heroImage,
    destination.cardImage,
  );

  return (
    <DestinationPage
      destination={destination}
      heroImage={heroImage}
      bannerImage={bannerImage}
    />
  );
}
