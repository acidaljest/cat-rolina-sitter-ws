import { Geist, Geist_Mono, Montserrat_Alternates} from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const titleFont = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['500','700'],
  display: 'swap',
});

