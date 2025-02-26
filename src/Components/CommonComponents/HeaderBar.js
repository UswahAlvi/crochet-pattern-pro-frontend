import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: var(--primary-color);
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

export default function HeaderBar({ children }) {
  return <Header>{children}</Header>;
}
