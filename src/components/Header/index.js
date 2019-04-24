import React from "react";

function Header(props) {
  return <h1 style={{ color: props.color }}>{props.title}</h1>;
}

export default Header;
