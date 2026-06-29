import { Layout } from "../components/Layout";
import { TripForm } from "../components/TripForm";
export function HomePage() {
  return (
    <Layout>
      <h1>Where should you go next?</h1>
      <TripForm />
    </Layout>
  );
}
