import { ReactNode } from "react";
export function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{ padding: "16px 32px", borderBottom: "1px solid #1f2937" }}>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Wayfinder</span>
      </header>
      <main style={{ flex: 1, padding: "32px", maxWidth: 960, margin: "0 auto" }}>
        {children}
      </main>
      <footer style={{ padding: "16px 32px", fontSize: 12, color: "#6b7280" }}>
        Built for Matthew
      </footer>
    </div>
  );
}
