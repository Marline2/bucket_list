// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
//import {Button} from '@material-ui/core'; 위와 같은 방법
import ButtonGroup from "@material-ui/core/ButtonGroup";


// redux hook을 불러옵니다.
import { useDispatch, useSelector } from "react-redux";
// 내가 만든 액션 생성 함수를 불러옵니다.
import { deleteBucket, updateBucketFB, deleteBucketFB } from "./redux/modules/bucket";

const Detail = (props) => {
  const dispatch = useDispatch();


  // 스토어에서 상태값 가져오기
  const bucket_list = useSelector((state) => state.bucket.list);
  // url 파라미터에서 인덱스 가져오기
  let bucket_index = parseInt(props.match.params.index);

  console.log(props);
  return (
    <Wrap>
      <h1>{bucket_list[bucket_index].text}</h1>
      <ButtonGroup>
        <Button onClick={() => {
          //   dispatch(); <- 괄호안에는 액션 생성 함수가 들어가야겠죠?
          // 예를 들면 이렇게요.
          dispatch(deleteBucketFB(bucket_index));
          props.history.goBack();
        }}>삭제하기</Button>
        <Button 
        style={{backgroundColor:"aliceblue"}}
        onClick={() => {
          dispatch(updateBucketFB(bucket_index));
          props.history.goBack();
        }}>완료하기</Button>
      </ButtonGroup>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top:40px;
  text-align:center;
  
`;

const ButtonDelete = styled.button`
  margin:20px 6px;
  margin-left:10px;
  background-color:aliceblue;
  color:black;
  border-radius:10px;
  border:1px solid #eee;
  padding:3px 7px;

  &:hover{
    border:1px solid black;
  }
`;

const ButtonComplete = styled.button`
  background-color:aliceblue;
  color:black;
  border-radius:10px;
  border:1px solid #eee;
  padding:3px 7px;

  &:hover{
    border:1px solid black;
  }
`;

export default Detail;