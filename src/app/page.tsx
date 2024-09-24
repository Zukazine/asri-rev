import FeaturesComponent from "./_components/features";
import MapComponent from "./_components/mapcomponent";

export default function Home() {
  return (
    <div style={{ display: "flex", margin: 0, padding: 0 }}>
      <MapComponent />
      <FeaturesComponent />
    </div>
  );
}
