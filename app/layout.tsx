import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: {
    default: "Adrian Dahl | Software Developer",
    template: "%s | Adrian Dahl",
  },

  metadataBase: new URL("https://adriandahl.com"),

  description:
    "Portfolio of Adrian Dahl, a software developer focused on building clean, reliable, and practical web experiences. Explore full-stack projects, technologies, and solutions.",

  keywords: [
    "Adrian Dahl",
    "Software Developer",
    "Full Stack Developer",
    "Portfolio",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Java",
    "PostgreSQL",
  ],

  authors: [
    {
      name: "Adrian Dahl",
      url: "https://adriandahl.com",
    },
  ],

  creator: "Adrian Dahl",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adriandahl.com",
    title: "Adrian Dahl | Software Developer",
    description:
      "Software developer focused on building clean, reliable, and practical web experiences. Explore projects, technologies, and full-stack solutions.",
    siteName: "Adrian Dahl",
  },

  icons: {
    icon: "/Icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
