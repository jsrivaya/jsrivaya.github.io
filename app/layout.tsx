import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jorge Suarez-Rivaya",
  description: "Personal website of Jorge Suarez-Rivaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var i=Math.floor(Math.random()*3)+1;var l=document.createElement('link');l.rel='icon';l.href='/cut-0'+i+'.svg';document.head.appendChild(l);})();`,
          }}
        />
      </head>
      <body className={inter.className}>
        <Sidebar />
        <main
          style={{
            marginLeft: "var(--sidebar-width)",
            minHeight: "100vh",
            padding: "48px 60px",
            maxWidth: "760px",
          }}
          className="main-content"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
