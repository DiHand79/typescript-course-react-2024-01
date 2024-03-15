// import styles from "./Button.module.css";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { StyledButton } from "./Button.styles";
import { Icon } from "../Icon";

interface ButtonProps {
  text: string;
}

type BUTTON_TYPE = 1 | 2 | 3;

export function Button(props: ButtonProps) {
  const counterRef = useRef(0);
  // const inputRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<BUTTON_TYPE>(1);

  const handleClick = () =>
    setType(type === 3 ? 1 : ((type + 1) as BUTTON_TYPE));

  const handlePointerOut = () => console.log("Pointer Out");

  const time = Math.round(+new Date() / 10000);

  counterRef.current += 1;
  console.log("render", counterRef.current);

  const value = useMemo(
    () =>
      Array(10000000)
        .fill(0)
        .map(() => Math.random() * time)
        .reduce((acc, curr) => acc + curr, 0),
    [time]
  );

  const handleIconClick = React.useCallback(
    () => console.log("Icon Clicked"),
    []
  );

  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //     // select the text
  //     inputRef.current.select();
  //   }
  // }, []);

  return (
    <StyledButton
      id={props.text}
      data-id="test"
      onClick={handleClick}
      onPointerOut={handlePointerOut}
      type={type}
    >
      Click me <Icon onClick={handleIconClick} />
      <h1>Value: {value}</h1>
      <input type="text" defaultValue="Hello" />
    </StyledButton>
  );
  // return React.createElement("button", { onClick: () => alert("Hello World!") }, prop.text);
}
