import React from "react";
import styled from "styled-components";
import { Eco } from "@material-ui/icons";

const Spinner = (props) => {
  return (
    <Outter>
      <p>
        <Word>로딩중...</Word> <br />
        <Eco style={{ fontSize: "150px", color: "#673ab7" }} />
      </p>
    </Outter>
  );
};

const Word = styled.span`
  position: fixed;
  top: -100px;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

const Outter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Spinner;
