import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: dodgerblue;
  border: none;
  box-shadow: none;
  color: white;
  font-size: 1rem;
  height: 2rem;
  min-width: 5rem;
  padding: 0 1rem;

  &.cancel {
    background: white;
    border: 1px solid gray;
    color: gray;
  }
`;

interface Props {
  cancel?: boolean;
  children: React.ReactNode; // 修正: string から React.ReactNode へ
  onClick: () => void;
}

export const Button: React.FC<Props> = (props) => (
  <StyledButton
    onClick={props.onClick}
    className={props.cancel ? "cancel" : ""}
  >
    {/* // 修正: children を表示 */}
    {props.children}
  </StyledButton>
);
