import styled from "styled-components"
const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: var(--primary-color);
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;
const Title = styled.div`
  font-size: 40px;
`;
const Container = styled.div`
  display: flex;
  gap: 20px;
`;
const ContainerItem = styled.div`
  background-color: var(--secondary-color);
  font-size: 20px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;
export default function Header() {
  return (
    <HeaderBar>
        <Title>
            Crochet Pattern Pro
        </Title>
        <Container>
            <ContainerItem>
                Learn
            </ContainerItem>
            <ContainerItem>
                Community
            </ContainerItem>
            <ContainerItem>
                Signup/Login
            </ContainerItem>
        </Container>
    </HeaderBar>
  )
}
