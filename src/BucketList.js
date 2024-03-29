// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

// redux hook을 불러옵니다.
import { useDispatch, useSelector } from "react-redux";

const BucketList = (props) => {
  // 버킷리스트를 리덕스 훅으로 가져오기
  const bucket_list = useSelector((state) => state.bucket.list);

  return (
    <div>
      <ListStyle>
        {bucket_list.map((list, index) => {
          return (
            <ItemStyle
              className="list_item"
              completed={list.completed}
              key={index}
              onClick={() => {
                // 배열의 몇번째 항목을 눌렀는 지, url 파라미터로 넘겨줍니다.
                props.history.push("/detail/" + index);
              }}
            >
              {list.text}
            </ItemStyle>
          );
        })}
      </ListStyle>
    </div>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  font-weight: 550;
  color: ${(props) => (props.completed ? "#3d0075" : "black")};
  background-color: ${(props) => (props.completed ? "#B5B2FF" : "aliceblue")};
`;

export default BucketList;
