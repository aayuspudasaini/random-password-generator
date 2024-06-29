import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { ThemeSwitcher } from "@/lib/theme-switcher";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const urbanist = Urbanist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "h-full relative flex flex-col items-center md:justify-center gap-4 py-8 md:py-4 sm:px-0",
          urbanist.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute top-4 right-4">
            <Toaster richColors closeButton position="top-right" />
            {/* <ThemeSwitcher /> */}
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
