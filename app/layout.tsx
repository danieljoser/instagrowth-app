import type { Metadata } from "next";
import {Alexandria} from 'next/font/google'
import '@/styles/globals.css'
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import { AOSInit } from "@/components/aos";

export const metadata: Metadata = {
  title: "Instagrowth App",
  description: "Haz de tu instagram el centro de atención del fit",
};

const alexandria = Alexandria({subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], display: 'swap', variable: '--font-alexandria' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alexandria.className}>
      
      <body>
        <AOSInit />
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
