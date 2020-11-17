import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from "./routes/About"; //이름ㄹ이 같을 필요는 없음 About as Potato라고 해도 됨.
import Home from './routes/Home';
import Navigation from './components/Navigation';
import MovieDetail from './routes/MovieDetail';
import RedirectPage from './components/RedirectPage';

function App () {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/search/:title" component={RedirectPage} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={MovieDetail} />
    </HashRouter>
  );
}
export default App;

/**
 * //추가 movie-detail에 id값을 받고자 할 때 `/:id` 이런 식으로, 그 후 라우터 세팅
 * 리액트 라우터 : url을 가져와서, 비교하고, match가 되면, 보여줌 
 * /가 라우트로 여겨짐. /도 그리고 /about도 그린거임 => 두개를 동시에 렌더링함 
 * 해결책 exact = {true} 세팅. url이 /일때만 home을 렌더링해줌. /something 이면 무시 
 * exact는 이거 아니면 렌더링 안한다임 
 * 
 * Navigation은 Router의 안에 존재해야한다. Navigation 내의 Link 컴포넌트가 라우터 안에 존재해야 하기 때문이다. 
 * HashRouter 대신, Browserrouter는 `#`같은 것이 없다. BrowerRouter 사용해도 된다. but, github Pages에서 설정하는 것이 어렵다.

 */