import React from "react";

interface IconProps {
  onClick: () => void;
}
function IconInner(props: IconProps) {
  console.log("Icon");
  return <div onClick={props.onClick}>+</div>;
}

export const Icon = React.memo(IconInner);
