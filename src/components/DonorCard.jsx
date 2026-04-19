import React from "react";

function DonorCard({ donor, requested, onRequest }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.09)",
        backdropFilter: "blur(20px)",
        borderRadius: "20px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        fontFamily: "'Outfit', sans-serif",
        minHeight: "200px",
      }}
    >
      {/* Top — Avatar + Blood Badge */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Avatar circle */}
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #c0392b, #7b0000)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
          {donor.name.charAt(0)}
        </div>

        {/* Blood group badge */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(220,30,30,0.4), rgba(120,0,0,0.5))",
            border: "1px solid rgba(255,80,80,0.3)",
            borderRadius: "999px",
            padding: "4px 12px",
            color: "white",
            fontSize: "12px",
            fontWeight: "700",
          }}
        >
          {donor.bloodGroup}
        </div>
      </div>

      {/* Middle — Name + City */}
      <div>
        <h2
          style={{
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            margin: "0 0 4px 0",
          }}
        >
          {donor.name}
        </h2>
        <p
          style={{
            color: "rgba(255,150,150,0.7)",
            fontSize: "12px",
            margin: 0,
          }}
        >
          📍 {donor.city}
        </p>
      </div>

      {/* Availability dot */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: donor.available ? "#22c55e" : "#ef4444",
            boxShadow: donor.available
              ? "0 0 6px rgba(34,197,94,0.8)"
              : "0 0 6px rgba(239,68,68,0.8)",
          }}
        />
        <p
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "12px",
            margin: 0,
          }}
        >
          {donor.available ? "Available to donate" : "Not available"}
        </p>
      </div>

      {/* Button */}
      <button
        onClick={onRequest}
        disabled={requested}
        aria-disabled={requested}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "12px",
          border: requested
            ? "1px solid rgba(34,197,94,0.4)"
            : "1px solid rgba(255,80,80,0.3)",
          background: requested
            ? "rgba(34,197,94,0.15)"
            : "linear-gradient(135deg, #c0392b, #7b0000)",
          color: requested ? "#22c55e" : "white",
          fontSize: "13px",
          fontWeight: "600",
          cursor: requested ? "not-allowed" : "pointer",
          marginTop: "auto",
        }}
      >
        {requested ? "Requested ✅" : "Request Help 🩸"}
      </button>
    </div>
  );
}

export default DonorCard;
