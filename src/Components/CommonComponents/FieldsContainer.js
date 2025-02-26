import styled from "styled-components";
const Container = styled.div`
  background-color: var(--primary-color);
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 50px;
  box-sizing: border-box;
`;
export default function FieldsContainer({children}) {
  return (
    <Container>
        {children}
    </Container>
  )
}
