import { useState, useEffect, useMemo, useCallback } from "react";
import Navbar from "./components/Navbar";
import DonorList from "./components/DonorList";

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
const DONORS_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchCity, setSearchCity] = useState("");
  const [bloodGroup, setBloodGroup] = useState("all");
  const [requested, setRequested] = useState(() => new Set());

  useEffect(() => {
    const controller = new AbortController();

    async function fetchDonors() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(DONORS_URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error("Failed to fetch donors");
        }

        const data = await response.json();

        const mappedDonors = data.map((user, i) => ({
          id: user.id,
          name: user.name,
          city: user.address?.city || "Unknown",
          // Use stable derived values so the UI doesn't randomly change on refresh.
          bloodGroup: BLOOD_GROUPS[(user.id - 1 + i) % BLOOD_GROUPS.length],
          available: (((user.id * 9301 + 49297) % 233280) / 233280) > 0.3,
        }));

        setDonors(mappedDonors);
      } catch (error) {
        if (error?.name === "AbortError") return;
        console.error("API Error:", error);
        setError("Could not load donors. Please try again later.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchDonors();
    return () => controller.abort();
  }, []);

  const handleRequest = useCallback((id) => {
    setRequested((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  const filteredDonors = useMemo(() => {
    const q = searchCity.trim().toLowerCase();
    return donors
      .filter((d) => (q ? d.city.toLowerCase().includes(q) : true))
      .filter((d) => (bloodGroup === "all" ? true : d.bloodGroup === bloodGroup))
      .sort((a, b) => b.available - a.available);
  }, [donors, searchCity, bloodGroup]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0a0000 0%, #1a0000 50%, #0a0000 100%)",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <Navbar
        searchCity={searchCity}
        setSearchCity={setSearchCity}
        bloodGroup={bloodGroup}
        setBloodGroup={setBloodGroup}
      />

      <DonorList
        donors={filteredDonors}
        loading={loading}
        error={error}
        requested={requested}
        onRequest={handleRequest}
      />
    </div>
  );
}

export default App;
