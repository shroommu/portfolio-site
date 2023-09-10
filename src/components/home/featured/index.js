import Section from "../../basic/Section";
import Card from "../../basic/Card";

export default function Featured() {
  return (
    <Section testId="featured-section" margin="0 0 24px 0">
      <Card zIndex={5}></Card>
    </Section>
  );
}
