import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { PageContainer } from "../shared";
import LandingSection from "./LandingSection";
import Section from "../basic/Section";

export default function Home() {
  return (
    <>
      <LandingSection />
      <Section testId="section-1" />
    </>
  );
}
