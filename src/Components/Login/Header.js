import styled from "styled-components"
import HeaderBar from "../CommonComponents/HeaderBar"
import HeaderButton from "../CommonComponents/HeaderButton";
const Title = styled.div`
  font-size: 40px;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;


export default function Header() {

  return (
    <HeaderBar>
    <Title>Crochet Pattern Pro</Title>
      <Container>
        <HeaderButton text="Learn" />
        <HeaderButton text="Editor" />
      </Container>
    </HeaderBar>
  )
}
