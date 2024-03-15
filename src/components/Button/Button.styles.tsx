import styled from "styled-components";

const TEXT_COLOR = "white";

const BUTTON_TYPE_MAP = {
  1: "red",
  2: "blue",
  3: "green",
};

interface IStyledButtonProps {
  type?: 1 | 2 | 3;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  background-color: ${(props) => BUTTON_TYPE_MAP[props.type || 1]};
  color: ${TEXT_COLOR};

  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #d1d1d1;
  }
  &:active {
    transform: scale(0.95);
  }
`;
