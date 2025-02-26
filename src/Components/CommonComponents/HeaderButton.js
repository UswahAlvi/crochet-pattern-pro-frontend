import styled from "styled-components"
const Button = styled.div`
  background-color: var(--secondary-color);
  font-size: 20px;
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
`;
export default function HeaderButton({text}) {
  return (
    <Button>
        {text}
    </Button>
  )
}
