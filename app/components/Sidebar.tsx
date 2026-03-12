"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/books", label: "books" },
  { href: "/projects", label: "projects" },
  { href: "/photos", label: "photos" },
  { href: "/links", label: "links", coming: true },
  { href: "/press", label: "press" },
  { href: "/about", label: "about" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "var(--sidebar-width)",
          height: "100vh",
          padding: "48px 32px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          borderRight: "1px solid #ebebeb",
          backgroundColor: "#fff",
          zIndex: 10,
        }}
        className="desktop-sidebar"
      >
        <div>
          <Link href="/" style={{ display: "block" }}>
            <span
              style={{
                fontSize: "15px",
                fontFamily: "inherit",
                letterSpacing: "0.01em",
                lineHeight: 1.5,
                color: "#1a1a1a",
              }}
            >
              Jorge
              <br />
              Suarez-Rivaya
            </span>
          </Link>
        </div>

        <nav>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {navLinks.map(({ href, label, coming }) => {
              const isActive =
                pathname === href || pathname.startsWith(href + "/");
              return (
                <li key={href} style={{ marginBottom: "8px", display: "flex", alignItems: "baseline", gap: "6px" }}>
                  <Link
                    href={href}
                    style={{
                      fontSize: "15px",
                      color: isActive ? "#1a1a1a" : "#aaa",
                      fontFamily: "inherit",
                      transition: "color 0.15s",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#1a1a1a")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = isActive
                        ? "#1a1a1a"
                        : "#aaa")
                    }
                  >
                    {label}
                  </Link>
                  {coming && (
                    <span style={{ fontSize: "10px", color: "#ccc", letterSpacing: "0.04em" }}>
                      soon
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile top bar */}
      <div className="mobile-header">
        <Link href="/" style={{ fontSize: "15px", color: "#1a1a1a" }}>
          Jorge Suarez-Rivaya
        </Link>
        <nav style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {navLinks.map(({ href, label, coming }) => {
            const isActive =
              pathname === href || pathname.startsWith(href + "/");
            return (
              <span key={href} style={{ display: "inline-flex", alignItems: "baseline", gap: "4px" }}>
                <Link
                  href={href}
                  style={{
                    fontSize: "14px",
                    color: isActive ? "#1a1a1a" : "#aaa",
                  }}
                >
                  {label}
                </Link>
                {coming && (
                  <span style={{ fontSize: "10px", color: "#ccc", letterSpacing: "0.04em" }}>
                    soon
                  </span>
                )}
              </span>
            );
          })}
        </nav>
      </div>

      <style>{`
        .mobile-header {
          display: none;
        }

        @media (max-width: 640px) {
          .desktop-sidebar {
            display: none !important;
          }
          .mobile-header {
            display: flex;
            flex-direction: column;
            gap: 12px;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: #fff;
            border-bottom: 1px solid #ebebeb;
            padding: 16px 24px;
            z-index: 10;
          }
        }
      `}</style>
    </>
  );
}
