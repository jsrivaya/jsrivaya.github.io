"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/books", label: "books" },
  { href: "/projects", label: "projects" },
  { href: "/photos", label: "photos" },
  { href: "/links", label: "links" },
  { href: "/press", label: "press" },
  { href: "/about", label: "about" },
  { href: "/resume", label: "resume", coming: true },
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

        <nav style={{ flex: 1 }}>
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

        <div style={{ display: "flex", gap: "14px" }}>
          <a
            href="https://github.com/jsrivaya"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#bbb", transition: "color 0.15s", display: "flex" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#bbb")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jsrivaya/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#bbb", transition: "color 0.15s", display: "flex" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#bbb")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="mobile-header">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ fontSize: "15px", color: "#1a1a1a" }}>
            Jorge Suarez-Rivaya
          </Link>
          <span style={{ display: "inline-flex", gap: "12px", alignItems: "center" }}>
            <a
              href="https://github.com/jsrivaya"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#bbb", display: "flex" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jsrivaya/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#bbb", display: "flex" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </span>
        </div>
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
