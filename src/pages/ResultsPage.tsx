import { useLocation } from "react-router-dom";
import { Layout } from "../components/Layout";
import { TripIdeasList } from "../components/TripIdeasList";
import { PackagesList } from "../components/PackagesList";
export function ResultsPage() {
  const { state } = useLocation() as any;
  const data = state?.data;
  return (
    <Layout>
      <h1>Your Results</h1>
      <TripIdeasList ideas={data.trip_ideas} />
      <PackagesList packages={data.packages} />
    </Layout>
  );
}
