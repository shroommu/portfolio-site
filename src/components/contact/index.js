import Section from "../basic/Section";
import Card from "../basic/Card";
import { ComingSoon } from "../shared";

export default function Contact({}) {
  return (
    <Section testId="contact-section">
      <Card zIndex={5}>
        <ComingSoon />
      </Card>
    </Section>
  );
}
