import React from "react";
import "./styles.css";

const Warning = React.memo(function Warning() {
  return <span className={"warning"}>Take it easy!</span>;
});

export default Warning;
