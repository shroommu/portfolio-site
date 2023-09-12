import styled from "styled-components";

const BaseInput = styled.textarea`
  padding: 2px;
  font-family: Bitter;
`;

export default function TextArea({ value, onChange, className }) {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <BaseInput value={value} onChange={handleChange} className={className} />
  );
}
