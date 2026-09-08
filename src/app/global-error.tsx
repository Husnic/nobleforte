"use client";

export default function GlobalError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b2644",
          color: "#fff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.2em", color: "#c9a24a", textTransform: "uppercase" }}>
          NobleForte Academy
        </p>
        <h1 style={{ marginTop: "1rem", fontSize: "2rem", fontWeight: 600 }}>
          Something went wrong.
        </h1>
        <p style={{ marginTop: "0.75rem", color: "rgba(255,255,255,0.7)", maxWidth: "28rem" }}>
          A critical error occurred. Please try again.
        </p>
        <button
          onClick={() => retry()}
          style={{
            marginTop: "2rem",
            borderRadius: "999px",
            background: "#c9a24a",
            color: "#071a30",
            fontWeight: 600,
            padding: "0.75rem 1.75rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
