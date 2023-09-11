import Section from "../basic/Section";
import Card from "../basic/Card";
import { ComingSoon } from "../shared";

export default function Blog() {
  return (
    <Section testId="blog-section">
      <Card zIndex={5}>
        <ComingSoon />
      </Card>
    </Section>
  );
}
