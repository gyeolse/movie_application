import React from "react";

function About() {
    return <span>Hello i'm About.js </span>
}

export default About;


/**
 * route를 거치면, props에 history. location. 과 같은ㅇ 기본적인 props가 세팅되어서 컴포넌트 간 이동된다.  
 * 
 * 1. navigation.js에서 pathname과 state를 재정의
 */
