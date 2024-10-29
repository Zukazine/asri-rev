import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server"
import { Toaster } from "@/components/ui/sonner";
import { JotaiProvider } from "@/components/jotai-provider";
import { SideBar } from "./_components/sidebar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "ASRI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
        <head>
          <script src="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.js"></script>
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css"
            rel="stylesheet"
          />
        </head>
        <body className={`${inter.className} antialiased overflow-hidden`}>
          <ConvexClientProvider>
            <JotaiProvider>
              <Toaster />
              <div className="flex h-[calc(100vh-1.5%)] mt-2">
                <SideBar />
                <div className="w-full mr-2">
                  {children}
                </div>
              </div>
            </JotaiProvider>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}