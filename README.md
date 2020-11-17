# movie application

## movie application 구현
+ 기간 : 2020.11.15. ~ 2020.11.16.
+ 참조 사이트 : https://nomadcoders.co/
+ ReactJS 사용한 movie application

---
## 1. 개요
> ReactJS에 익숙해지기 위해서, 강의를 들으며, ReactJS에 대한 기본 개념을 학습하고, API 호출 처리를 학습하였음. 그 외, React에 보다 익숙해지기 위해 강의 내용과 별도로 학습을 진행하였음. 해당 내용은 `route`와 관련된 내용임.

### 개발 내역

1. 간단한 환경설정 세팅 (2020.11.15)

2. 프로젝트 구현 (2020.11.16)

3. 프로젝트 구현 - 라우팅 설정 및 추가 구현 (2020.11.17)

----

## 2. 상세 내용

#### #1. 간단한 환경설정 세팅
- `create-react- app movieapplication`
- `yarn start` || `npm start`
- github repository 연동 


#### #2. JSX & PROPS
- component는 쉽게 말해서, HTML을 반환하는 함수이다. 
- 인접한 JSX 요소를 가질 수 없다. React Application은 하나의 Component만을 rendering 해야 한다.
    ```
    ReactDOM.render(<App/><Potato/>, document.getElementById('root'); //불가능! 
    ```
- component에 원하는 만큼 많은 props를 보낼수 있다. 정보를 받는 함수의 argument로 props를 넣어준다. `object`에 component로 전달된 모든 props가 들어있다.
- ES6의 문법으로, 인자로 바로 `props`내에 변수명을 넣는 것이 가능하다. 
    ```
    function Food ({fav}) {
    return (
       <h1> I like {fav} </h1>
        )
    } 
    ```
- 컴포넌트는 대문자로 시작해야 한다. 
- props는 그냥, component에 넣게 되는 것들이라고 생각하면 쉽다. 
- **maps** : Array로부터 Array를 반환한다. 배열의 각 item에서 function을 실행하는 array를 가지는 javascript function이며, 그 function의 result를 갖는 array를 반환한다. 
    ```
    const friends = ["al","mark","lynn","japan guy"];

    friends.map(current => {
        console.log(current);
        return 0; //[0,0,0,0]
    })

    // function({원하는대로이름붙이기가능}) { }
    friends.map(function(friend){
        return friends + " heart"; //return을 해주어야함.
    })
    ```
    이때, `current`는 `object`이다!!
- Prop-types : 전달 받은 props가 내가 원하는 props인지 확인해준다. 
    ```
    PropTypes.{원하는자료형}.isRequired
    ```
    반드시 isRequired를 설정할 필요는 없다. 


#### #3. state
+ state는 보통 동적 작업을 할 때, 만들어진다.
+ function 컴포넌트를 => class component로 변경해야한다. 
+ react는 class 컴포넌트의 render method를 자동으로 생성한다. 
+ class 컴포넌트의 장점은 state 관리가 가능하다는 점이다. `state`는 `object`이고,  컴포넌트의 데이터를 넣을 공간이 있으며, 데이터는 변한다. 
+ return 내에서 클래스 내부 변수를 접근할 때는, 여태 배운 객체지향프로그래밍 처럼 접근하면 된다. `this.state.count`, `this.add`, `this.minus`...
+ state를 직접 변경하는 것은 절대 안된다! => setState를 사용한다. 
직접 변경하면, render function을 업데이트 하지 않기 때문이다. 
```
add = () => { 
    console.log("add"); 
    this.setState({ count : this.state.count+1 }) }

//또 다른 방법
add = () => { 
    console.log("add"); 
    this.setState(current => 
        ({count : this.state.count + 1}));
    }

```
+ Lifecycle
+ **componentDidMount에서 API에 관련된 설정을 해주는 것이 좋다.**

1. componentDidMoount : 컴포넌트가 렌더됐다.
2. componentDidUpdate : 컴포넌트가 업뎃됐다.
3. componentWillUnmount : 컴포넌트가 죽었다.

    (ex) setState 호출 => component 호출 => render 호출 => 업데이트가 완료되면, componentDidUpdate 호출
4. constructor : 여태 배워왔던 그 생성자 맞다. 
+ 미래에 쓰고자 하는 state를 선언하는 것이 필수는 아니다. state안에 default 값들을 선언할 필요가 없다는 것이다. 


#### #4. 프로젝트 구현
- axios
- JSON API 링크 : https://yts.mx/api/v2/list_movies.json
- async와 await : 비동기함수. JS ES6문법

    async : 기다림이 필요한 함수 앞에 선언

    await : 무엇을 기다려야하는지, 그 기다려야하는 대상 앞에 선언
- css 스타일 적용할 떄 : `style={{ }}`
- 가 아니면, css파일을 별도로 만들어준다.
- Javascript의 map은 `object`와 함께 `index`값도 던져준다.


#### #5. route 설정 
- `npm i gh-pages`
- packages.json에 "homepage" : "유저명.github.io/프로젝트명/" 추가
**맨 뒤에 '/' 필수**
- `npm run build`
- packages.json의 "scripts"에서 "deploy" : "gh-pages -d build" 추가. "predeploy" : "npm run build"도 추가.
npm run build를 입력하면 자동으로, predeploy도 실행될 것

#### #6. route 설정 
<1> 라우팅 세팅을 하기 위한 사전 설정 
1. react-route-dom : 네비게이션을 만들어주는 패키지 

2. routes, components 디렉토리를 추가해줌. 

3. components에 만들었던 Movie.css, Movie.js 파일 넣기 

4. routes 폴더에 About.js Home.js 추가하고, App.js의 코드들을 Home.js에 복사. App.js 의 초기화면을 Home.js에 세팅할 것이기 때문

<2> App.js에 라우트 생성해주기 

1. 한 개의 prop : 렌더링할 스크린, 한 개의 prop 뭘할지 정해줌.
    ```
    <HashRouter> 
        <Route path="/" exact={true} component={Home} /> 
        <Route path="/about" component={About} /> 
    </HashRouter>
    ```
    path를 통해서 경로 세팅, component를 통해서 렌더링할 컴포넌트를 전달. 

2. 리액트 라우터는 url을 가져와서 비교하고, match가 되면 보여준다. exact={true}를 설정해주지 않으면, `/`가 라우트로 여겨지고, `/`도 그리고 `about`도 그리게 되며, 동시에 두개를 렌더링하는 결과를 보여주게 된다. 이것에 대한 해결책은 `exact=true`를 전달해주는 것이다. url이 `/`때만 정확하게 home을 렌더링 해주고, `/something~~`인 url이라면 무시하게 된다. exact는 정확하게 이 URL이 아니면 렌더링을 해주지 않는다를 의미한다.

<3> 네비게이션 만들기 

1. 단순하게 navigation을 'a' 태그로 설정하면, 작동을하지 않는다. => html은 전체 페이지를 새로고침 시켜버리기 때문이다. => (sol) link를 import하자

2. Navigation.js 파일에서 Navigation을 link component를 이용해서 만든다.

```
import React from 'react'; 
import {Link} from 'react-router-dom'; 
function Navigation() { 
    return ( 
        <div> 
            <Link to="/">Home</Link> 
            <Link to="/about">About</Link> 
        </div> 
    ); 
} 
export default Navigation;
```
3. 알아두어야할 점

- Navigation은 Router의 안에 존재해야 한다. Navigation 내의 Link 컴포넌트가 라우터 안에 존재해야 하기 때문이다.
- HashRouter 대신, Browserrouter는 '#'같은 것이 없다. 즉, BrowserRouter를 사용해도 무방하다. 하지만, github Pages에서 설정하는 것이 어렵기 때문에 현 프로젝트에서는 HashRouter를 사용한다. 

<4> About 페이지, Movie 추가 페이지 만들기 - route props에 대해서

- route를 거치면, props에 history, location과 같은 기본적인 props가 세팅되어서 컴포넌트 간 이동된다.

- MovieDetail.js 파일을 만든다. 

- 라우터 설정에서, Home 컴포넌트에서 -> MovieDetail 컴포넌트로 이동할 때, url로 movie id값도 같이 보낼 수 있도록 설정한다. 

- Link 컴포넌트를 이용해서, 값을 던질 때, state : { 던질 변수들 } 을 세팅해서 보내준다. 

```
//Movie.js 파일 
            <Link to={{
                pathname:`/movie/${id}`,
                state:{
                    year:year, //ES6에서는 year만 쳐줘도 됨
                    title,
                    summary,
                    poster,
                    genres
                }

//App.js 파일
      <Route path="/movie/:id" component={MovieDetail} />

```

#### #7. **강의 외 추가 구현 사항** 
- Detail Page를 Material UI를 이용해서 표로 생성하였다. 

- 추가적으로 Button을 구성하고, 뒤로 가기와 상세검색하기 버튼을 만들었다.

- 상세검색하기는 다음과 같이 구성하였다. 

(1) MovieDetail.js에서 RedirectPage.js로 이동할 때, url에 파라미터로 title을 달고, 페이지 이동하도록 하였다.

```
    <Link to={{
        pathname:`/search/${title}`
    }}>
```


(2) RedirectPage.js의 componentDidMount에서 window.open을 호출한 후에, 상세검색 결과로 이동할 수 있도록 하였다. 이 때, 상세검색은 새 탭으로 이동할 수 있도록 하였다.

```
componentDidMount(){
window.open('https://search.naver.com/search.naver?ie=UTF-8&&query=' + this.props.match.params.title);
}
```

설정을 해주기 위해서, Router 설정 js 파일에서, Route의 path를 새로 추가해주었다.

```
<Route path="/search/:title" component={RedirectPage} />
```

참조 링크 : stackoverflow.com/questions/42914666/react-router-external-link
