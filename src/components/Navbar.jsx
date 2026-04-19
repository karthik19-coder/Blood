import React from "react";

function Navbar({ searchCity, setSearchCity, bloodGroup, setBloodGroup }) {
  return (
    <>
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');

        .navbar-input::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }

        .search-box:focus-within {
          border: 1px solid rgba(255, 100, 100, 0.6);
          box-shadow: 0 0 20px rgba(220, 50, 50, 0.25);
        }

        .blood-select option {
          background: #1a0505;
          color: white;
        }

        .nav-pill:hover {
          background: rgba(255, 255, 255, 0.12);
        }
      `}</style>

      <nav
        style={{
          fontFamily: "'Outfit', sans-serif",
          background:
            "linear-gradient(120deg, rgba(10,0,0,0.97) 0%, rgba(40,0,0,0.97) 100%)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          borderBottom: "1px solid rgba(255,60,60,0.15)",
          boxShadow:
            "0 4px 40px rgba(180,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
          padding: "14px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        {/* ── Logo ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {/* Icon bubble */}
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg, rgba(220,30,30,0.3), rgba(120,0,0,0.4))",
              border: "1px solid rgba(255,80,80,0.3)",
              boxShadow: "0 0 20px rgba(220,30,30,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
            }}
          >
            🩸
          </div>

          {/* Text */}
          <div>
            <h1
              style={{
                color: "white",
                fontSize: "18px",
                fontWeight: "700",
                margin: 0,
                letterSpacing: "0.3px",
              }}
            >
              Blood Donor Finder
            </h1>
            <p
              style={{
                color: "rgba(255,120,120,0.7)",
                fontSize: "10px",
                margin: 0,
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: "300",
              }}
            >
              Every drop counts
            </p>
          </div>
        </div>

        {/* ── Search + Filter ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Search box */}
          <div
            className="search-box"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "14px",
              padding: "10px 18px",
              width: "260px",
              transition: "all 0.3s ease",
            }}
          >
            <svg
              width="15"
              height="15"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search city..."
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
              className="navbar-input"
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "white",
                fontSize: "14px",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: "400",
                width: "100%",
              }}
            />
          </div>

          {/* Divider */}
          <div
            style={{
              width: "1px",
              height: "32px",
              background: "rgba(255,255,255,0.1)",
            }}
          />

          {/* Blood group select */}
          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="blood-select nav-pill"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "14px",
              padding: "10px 16px",
              color: "white",
              fontSize: "14px",
              fontFamily: "'Outfit', sans-serif",
              outline: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              appearance: "none",
              paddingRight: "32px",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
            }}
          >
            <option value="all">🩸 All Groups</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
