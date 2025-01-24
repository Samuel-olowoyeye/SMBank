/* eslint-disable @typescript-eslint/no-unused-vars */
"use client "
import { Metadata } from "next";
import "@/styles/main.css";
import { ThemeProvider } from "next-themes";
import {Toaster} from "react-hot-toast";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}){
  return (
    <html suppressHydrationWarning>
      <body>
      <ThemeProvider attribute="class" defaultTheme="dark">
      <Toaster position="top-center" reverseOrder={false} />
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}


