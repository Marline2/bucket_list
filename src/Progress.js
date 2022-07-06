import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

const Progress = (props) => {
    const bucket_list = useSelector(state => state.bucket.list);
    let count = 0;

    bucket_list.map((l, idx) => {
        if (l.completed) {
            count++;
        }
    })
    return (
        <Bar>
            <Light width={(count / bucket_list.length) * 100 + "%"} />
            <Dot />
        </Bar>
    );
}

const Bar = styled.div`
    width: 350px;
    height: 20px;
    background: #eee;
    display:flex;
    align-items: center;
    border-radius:20px;
`;

const Light = styled.div`
    height: 20px;
    background: #B5B2FF;
    width : ${props => props.width};
    transition:width 1s;
    border-radius:20px;
`;

const Dot = styled.div`
    background-color:white;
    border: 5px solid #B5B2FF;
    box-sizing : border-box;
    width:30px;
    height:30px;
    border-radius: 40px;
    margin-left: -10px;
`;
export default Progress;