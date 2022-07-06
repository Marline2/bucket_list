import React from 'react';
import styled from 'styled-components';

const NotFound = (props) => {
    return(
        <Wrap>
            <h1>잘못된 접근입니다.</h1>
            <Button onClick={()=>{props.history.goBack();}}>뒤로 가기</Button>
        </Wrap>
    );
}

const Wrap = styled.div`
    text-align:center;
    margin-top:30px;
`;

const Button = styled.button`
  background-color:aliceblue;
  color:black;
  border-radius:10px;
  border:1px solid #eee;
  padding:3px 7px;

  &:hover{
    border:1px solid black;
  }
`;

export default NotFound;