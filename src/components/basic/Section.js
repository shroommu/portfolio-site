import styled from "styled-components";
import { device } from "../../constants";

const Container = styled.div`
  display: flex;
  min-height: 500px;
  flex: 1;
  padding: ${(p) => p.padding};
  margin: ${(p) => p.margin};

  @media ${device.tablet} {
    padding: 5% 10%;
  }
`;

export default function Section({ testId, children, margin, padding }) {
  return (
    <Container test-id={testId} margin={margin} padding={padding}>
      {children}
    </Container>
  );
}

Section.defaultProps = { padding: "64px 200px 0", margin: "0 0 24px 0" };
