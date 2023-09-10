import LandingSection from "./LandingSection";
import Section from "../basic/Section";
import Gallery from "../basic/Gallery";
import Featured from "./featured";

export default function Home() {
  return (
    <>
      <LandingSection />
      <Featured />
      <Section testId="section-1">
        <Gallery />
      </Section>
    </>
  );
}
