import React from "react";

import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import BucketList from "./BucketList";
import styled from "styled-components";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Progress from "./Progress.js";
import Spinner from "./Spinner";

import { firestore } from "./firebase";

import { connect } from "react-redux";

import {
  loadBucket,
  createBucket,
  loadBucketFB,
  addBucketFB,
} from "./redux/modules/bucket";

//스토어가 가진 상태값을 props로 받아오기 위한 함수
const mapStateTopProps = (state) => ({
  bucket_list: state.bucket.list,
  is_loaded: state.bucket.is_loaded,
});

//값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수
const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadBucketFB());
  },
  create: (new_item) => {
    dispatch(addBucketFB(new_item));
  },
});

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props) {
    super(props);
    // App 컴포넌트의 state를 정의해줍니다.
    this.state = {};
    // ref는 이렇게 선언합니다!
    this.text = React.createRef();
  }

  componentDidMount() {
    this.props.load();
  }

  addBucketList = () => {
    const new_item = this.text.current.value;
    this.props.create(new_item);
  };

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        <Container>
          <Title>내 버킷리스트</Title>
          <Progress />
          <Line />
          {!this.props.is_loaded ? (
            <Spinner />
          ) : (
            <React.Fragment>
              <Switch>
                <Route path="/" exact component={BucketList} />
                <Route path="/detail/:index" component={Detail} />
                <Route component={NotFound} />
              </Switch>
            </React.Fragment>
          )}
        </Container>
        <Input>
          <InputText type="text" ref={this.text} />
          <ButtonAdd onClick={this.addBucketList}>추가하기</ButtonAdd>
        </Input>
      </div>
    );
  }
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  position: relative;
`;

const InputText = styled.input`
  margin-right: 10px;
  margin-top: 20px;
  margin-left: 30px;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid black;
  &:focus {
    border: 2px solid #b2ccff;
  }
`;

const ButtonAdd = styled.button`
  padding: 5px 20px;
  background-color: #b2ccff;
  border: 1px solid black;
  border-radius: 2px;
  font-weight: bold;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

// withRouter 적용
// connect로 묶어줬습니다!
export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
