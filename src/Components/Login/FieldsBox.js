import styled from "styled-components";
import FieldsContainer from "../CommonComponents/FieldsContainer";
import { useState } from "react";
import { Link } from "react-router-dom"; 

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 34px;
  width: 100%;
  text-align: center;
  padding-block: 10px 60px;
`;

const InputsContainer = styled.div`
  margin-bottom: 60px;
`;

const Input = styled.input`
  background-color: var(--secondary-color);
  color: var(--fourth-color);
  border: none;
  border-radius: 10px;
  padding: 15px;
  font-size: 15px;
  width: 90%;
  margin: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin-bottom: 30px;
`;

const Button = styled.button`  
  background-color: ${(props) =>
    props.variant === "cancel" ? "var(--secondary-color)" : "var(--fifth-color)"};
  font-size: 18px;
  padding: 12px 24px;
  display: flex;
  border: none;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Div = styled.div`
  display: flex;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #281562;
  font-weight: bold;
  margin-left: 5px;
`;

export default function FieldsBox() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <FieldsContainer>
        <Title>Login to your account</Title>
        <InputsContainer>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </InputsContainer>
        <ButtonsContainer>
          <Button variant="cancel">Cancel</Button>
          <Button variant="login">Login</Button>
        </ButtonsContainer>
        <Div>
          Don't have an account?
          <StyledLink to="/Signup">Signup</StyledLink>
        </Div>
      </FieldsContainer>
    </Container>
  );
}
