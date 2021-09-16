import React from "react";
import "./styledVerify.css";
import styled from "styled-components";
const vec1 = styled.div`
  position: absolute;
  left: 6%;
  bottom: 4%;
  right: 66.26%;

  width: 80%;
  height: 14%;
  background-image: url(${(props) => props.inputImg});
`;

function Vector() {
  return <vec1 class="vectorContainer"></vec1>;
}
export default Vector;
