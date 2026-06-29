export async function planTrip(payload: any) {
  const resp = await fetch(`${import.meta.env.VITE_WAYFINDER_API}/plan-trip`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!resp.ok) throw new Error("Failed to plan trip");
  return resp.json();
}
