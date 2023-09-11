import styled from "styled-components";

const BaseInput = styled.input`
  padding: 2px;
  font-family: Bitter;
`;

export default function Input({ value, onChange }) {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return <BaseInput value={value} onChange={handleChange} />;
}
