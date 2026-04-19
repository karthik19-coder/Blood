import React from "react";
import DonorCard from "./DonorCard";

function DonorList({ donors, loading, error, requested, onRequest }) {
  return (
    <div style={{ padding: "40px", fontFamily: "'Outfit', sans-serif" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h2
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "16px",
            margin: 0,
          }}
        >
          Available Donors
        </h2>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span
            style={{
              background: "rgba(34,197,94,0.15)",
              border: "1px solid rgba(34,197,94,0.3)",
              color: "#22c55e",
              padding: "4px 12px",
              borderRadius: "999px",
              fontSize: "12px",
            }}
          >
            ✅ {donors.filter((d) => d.available).length} available
          </span>

          <span
            style={{
              background: "rgba(220,30,30,0.15)",
              border: "1px solid rgba(255,80,80,0.2)",
              color: "rgba(255,150,150,0.8)",
              padding: "4px 12px",
              borderRadius: "999px",
              fontSize: "12px",
            }}
          >
            🩸 {donors.length} donors found
          </span>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div style={{ textAlign: "center", paddingTop: "80px" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px" }}>
            Finding donors...
          </p>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div style={{ textAlign: "center", paddingTop: "80px", maxWidth: 520, margin: "0 auto" }}>
          <p style={{ color: "rgba(255,150,150,0.8)", fontSize: "14px", lineHeight: 1.5 }}>
            {error}
          </p>
        </div>
      )}

      {/* Empty */}
      {!loading && !error && donors.length === 0 && (
        <div style={{ textAlign: "center", paddingTop: "80px" }}>
          <p style={{ fontSize: "48px" }}>🩸</p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px" }}>
            No donors found. Try a different filter.
          </p>
        </div>
      )}

      {/* Cards Grid */}
      {!loading && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {donors.map((donor) => (
            <DonorCard
              key={donor.id}
              donor={donor}
              requested={requested.has(donor.id)}
              onRequest={() => onRequest(donor.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DonorList;
