export function PackagesList({ packages }: { packages: any[] }) {
  return (
    <section>
      <h2>Packages</h2>
      {packages.map((pkg, i) => (
        <div key={i} style={{ background: "var(--card)", padding: 16, borderRadius: 12 }}>
          <strong>{pkg.destination}</strong>
          <p>Total: {pkg.estimated_total_cost.total} {pkg.estimated_total_cost.currency}</p>
        </div>
      ))}
    </section>
  );
}
