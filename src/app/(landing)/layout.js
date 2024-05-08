import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider/ThemeProvider";
import RootHeader from "@/components/RootHeader";
import RootFooter from "@/components/RootFooter";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata = {
  title: "WritingChex Dashboard",
  description: "Empower your sense of writing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RootHeader/>
          {children}
          {/* <RootFooter/> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
