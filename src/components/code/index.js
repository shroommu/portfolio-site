import Section from "../basic/Section";
import Card from "../basic/Card";
import { ComingSoon } from "../shared";

export default function Code({}) {
  return (
    <Section testId="code-section">
      <Card zIndex={5}>
        <ComingSoon />
      </Card>
    </Section>
  );
}
