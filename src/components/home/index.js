import LandingSection from "./LandingSection";
import Section from "../basic/Section";
import Gallery from "../basic/Gallery";
import Card from "../basic/Card";
import Featured from "./featured";

export default function Home() {
  return (
    <>
      <LandingSection />
      <Featured />
      <Section testId="gallery-section">
        <Card>
          <Gallery />
        </Card>
      </Section>
    </>
  );
}
