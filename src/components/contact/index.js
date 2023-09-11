import Section from "../basic/Section";
import Card from "../basic/Card";
import Input from "../basic/Input";
import styled from "styled-components";
import { useState } from "react";
import LabeledElement from "../basic/LabeledElement";
import Button, { themes } from "../basic/Button";
import { Heading as UnstyledHeading } from "../shared";

const Heading = styled(UnstyledHeading)`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Contact({}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    const data = { name, email, message };

    var xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://bvgqo6ynu7.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer",
      true
    );
    xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    xhr.send(JSON.stringify(data));

    return false;
  };

  return (
    <Section testId="contact-section">
      <Card zIndex={5}>
        <Container>
          <Heading>Contact Me!</Heading>
          <LabeledElement label="Name">
            <Input value={name} onChange={(value) => setName(value)} />
          </LabeledElement>
          <LabeledElement label="Email">
            <Input value={email} onChange={setEmail} />
          </LabeledElement>
          <LabeledElement label="Message">
            <Input value={message} onChange={setMessage} />
          </LabeledElement>
          <Button theme={themes.tertiary} type="submit" onClick={submitForm}>
            Submit
          </Button>
        </Container>
      </Card>
    </Section>
  );
}
