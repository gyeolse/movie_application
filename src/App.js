import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from "./routes/About"; //이름ㄹ이 같을 필요는 없음 About as Potato라고 해도 됨.
import Home from './routes/Home';

function App () {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;

/**
 * 리액트 라우터 : url을 가져와서, 비교하고, match가 되면, 보여줌 
 * /가 라우트로 여겨짐. /도 그리고 /about도 그린거임 => 두개를 동시에 렌더링함 
 * 해결책 exact = {true} 세팅. url이 /일때만 home을 렌더링해줌. /something 이면 무시 
 * exact는 이거 아니면 렌더링 안한다임 
 * 
 */