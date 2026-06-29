import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { planTrip } from "../api/wayfinder";
export function TripForm() {
  const [vibe, setVibe] = useState("music + food + walkable");
  const [start, setStart] = useState(""); const [end, setEnd] = useState("");
  const navigate = useNavigate();
  async function submit(e: any) {
    e.preventDefault();
    const data = await planTrip({
      trip_intent: {
        purpose: "vacation", vibe,
        activities: ["music", "food", "walking"],
        budget: { min: 1000, max: 2500, currency: "USD" },
        flexibility: "moderate"
      },
      dates: { preferred_start: start, preferred_end: end }
    });
    navigate("/results", { state: { data } });
  }
  return (
    <form onSubmit={submit} style={{ background: "var(--card)", padding: 24, borderRadius: 16 }}>
      <h2>Plan a trip</h2>
      <label>Trip vibe</label>
      <input value={vibe} onChange={e => setVibe(e.target.value)} />
      <label>Start</label>
      <input type="datetime-local" value={start} onChange={e => setStart(e.target.value)} />
      <label>End</label>
      <input type="datetime-local" value={end} onChange={e => setEnd(e.target.value)} />
      <button type="submit" style={{ marginTop: 16 }}>Find my trip</button>
    </form>
  );
}
