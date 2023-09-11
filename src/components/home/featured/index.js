import Section from "../../basic/Section";
import Card from "../../basic/Card";
import { ComingSoon } from "../../shared";

export default function Featured() {
  return (
    <Section testId="featured-section" margin="0 0 24px 0">
      <Card zIndex={5}>
        <ComingSoon />
      </Card>
    </Section>
  );
}
