// frontend/src/pages/Labs.jsx
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AuthTabs from "../components/AuthTabs";

/**
 * Fallback data if API fails
 */
const SAMPLE_DATA = {
  lab: [
    {
      id: 101,
      name: "Quest Diagnostics",
      address: "50 University Dr, Amherst, MA 01002",
      time: "8:45 AM",
      eta: "12 mins away",
      distance: "0.8 mi",
      accent: "green",
    },
    {
      id: 102,
      name: "UMass Health Lab",
      address: "150 Infirmary Way, Amherst, MA 01003",
      time: "10:00 AM",
      eta: "18 mins away",
      distance: "1.2 mi",
      accent: "beige",
    },
    {
      id: 103,
      name: "Baystate Reference Lab",
      address: "123 N Pleasant St, Amherst, MA 01003",
      time: "12:15 PM",
      eta: "35 mins away",
      distance: "15 mi",
      accent: "green",
    },
    {
      id: 104,
      name: "Cooley Dickinson Lab",
      address: "E Pleasant St, Amherst, MA 01002",
      time: "4:00 PM",
      eta: "50 mins away",
      distance: "28 mi",
      accent: "beige",
    },
  ],
};

async function fetchAppointments(apiBase, type, signal) {
  const res = await fetch(`${apiBase}/appointments?type=${type}`, { signal });
  if (!res.ok) throw new Error("Fetch failed");
  const json = await res.json();
  return Array.isArray(json) ? json : json.items ?? [];
}

export default function Labs({ apiBase = "/api" }) {
  const [q, setQ] = useState("");
  const [data, setData] = useState({ lab: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const lab = await fetchAppointments(apiBase, "lab", controller.signal);
        setData({ lab });
        setError("");
      } catch {
        setData(SAMPLE_DATA);
        setError("Could not load appointments from the server. Showing sample data.");
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, [apiBase]);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return data.lab;
    return data.lab.filter((a) =>
      [a.name, a.address].some((s) => (s ?? "").toLowerCase().includes(term))
    );
  }, [q, data]);

  // Shared layout: fills width, no weird left/right empty space
  const contentMax = "100%";
  const pagePadding = "clamp(24px, 4vw, 80px)";

  return (
    <div style={{ minHeight: "100vh", background: "#F7F7F7" }}>
      {/* Header */}
      <header
        style={{
          background: "#F7F7F7",
          padding: `20px ${pagePadding}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logo.png"
            alt="Medway Logo"
            draggable="false"
            style={{ height: "90px", width: "auto" }}
          />
        </Link>

        {/* Avatar with beige halo */}
        <Link to="/profile" style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              background: "#EBDBC4",
              padding: "4px",
              borderRadius: "999px",
              display: "grid",
              placeItems: "center",
            }}
          >
            <img
              src="/avatar.png"
              alt="Profile"
              draggable="false"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "999px",
                objectFit: "cover",
                background: "#fff",
              }}
            />
          </div>
        </Link>
      </header>

      {/* Main content wrapper */}
      <div
        style={{
          width: contentMax,
          margin: "0 auto",
          padding: `0 ${pagePadding} 56px`,
        }}
      >
        {/* Tabs */}
        <div style={{ width: "100%", marginTop: "10px", marginBottom: "24px" }}>
          <AuthTabs
            className="w-full"
            leftLabel="Doctor’s Appointments"
            rightLabel="Lab Appointments"
            leftTo="/doctors"
            rightTo="/labs"
            showPill
          />
        </div>

        {/* Search */}
        <div style={{ marginTop: "6px" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "999px",
              background: "#FFFFFF",
              boxShadow: "0 10px 28px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "22px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke="#6b7280"
                fill="none"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-3.6-3.6" />
              </svg>
            </div>

            <input
              type="text"
              placeholder="Search for appointment..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              style={{
                height: "64px",
                width: "100%",
                paddingLeft: "56px",
                paddingRight: "22px",
                borderRadius: "999px",
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: "16px",
                color: "#1a1a1a",
              }}
            />
          </div>

          {error && (
            <p
              style={{
                marginTop: "10px",
                fontSize: "14px",
                color: "#6b7280",
                textAlign: "center",
              }}
            >
              {error}
            </p>
          )}
        </div>

        {/* List */}
        <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 0" }}>
          {loading ? (
            <li style={{ textAlign: "center", color: "#6b7280", padding: "18px 0" }}>
              Loading…
            </li>
          ) : list.length === 0 ? (
            <li style={{ textAlign: "center", color: "#6b7280", padding: "18px 0" }}>
              No results found.
            </li>
          ) : (
            list.map((a) => {
              const isGreen = a.accent === "green";
              const cardBg = isGreen ? "#0B5D2A" : "#EEDFC7";
              const cardText = isGreen ? "#FFFFFF" : "#1a1a1a";
              const etaColor = isGreen ? "rgba(255,255,255,0.9)" : "#6b7280";

              return (
                <li
                  key={a.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "center",
                    gap: "18px",
                    marginBottom: "22px",
                  }}
                >
                  <div
                    style={{
                      background: cardBg,
                      color: cardText,
                      borderRadius: "22px",
                      padding: "18px 22px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "18px",
                        alignItems: "flex-start",
                      }}
                    >
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: "22px", fontWeight: 700 }}>
                          {a.name}
                        </div>
                        <div style={{ marginTop: "6px", fontSize: "15px" }}>
                          {a.address}
                        </div>
                      </div>

                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "28px", fontWeight: 800 }}>
                          {a.time}
                        </div>
                        <div style={{ marginTop: "6px", fontSize: "16px", color: etaColor }}>
                          {a.eta}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "999px",
                        background: "#000",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#EBDBC4">
                        <path d="M12 22s7-6.3 7-12.1A7 7 0 1 0 5 9.9C5 15.7 12 22 12 22Z" />
                        <circle cx="12" cy="10" r="2.5" fill="#065F2B" />
                      </svg>
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: 600 }}>{a.distance}</div>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}
