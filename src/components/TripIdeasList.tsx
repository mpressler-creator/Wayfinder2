export function TripIdeasList({ ideas }: { ideas: any[] }) {
  return (
    <section>
      <h2>Trip Ideas</h2>
      {ideas.map((idea, i) => (
        <div key={i} style={{ background: "var(--card)", padding: 16, borderRadius: 12 }}>
          <strong>{idea.destination}</strong>
          <p>{idea.summary}</p>
        </div>
      ))}
    </section>
  );
}
