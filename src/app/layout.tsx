import type { Metadata, Viewport } from "next";
import DeviceSizeIndicator from "@/components/layout/DeviceSizeIndicator";
import { getSiteUrl, siteDescription, siteName } from "@/lib/hexamob/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: siteName,
  description: siteDescription,
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR">
      <body className="overflow-hidden bg-page font-type2 text-[1vw] leading-[1.2] text-white select-text opacity-0 max-lg:text-[3.5vw]">
        <DeviceSizeIndicator />
        {children}
      </body>
    </html>
  );
}
