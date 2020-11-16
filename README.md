# movie application

## movie application 구현
+ 기간 : 2020.11.15. ~ 2020.11.16.
+ 참조 사이트 : https://nomadcoders.co/
+ ReactJS 사용한 movie application

---
## 1. 개요
> ReactJS에 익숙해지기 위해서, 강의를 들으며, ReactJS에 대한 기본 개념을 학습하고, API 호출 처리를 학습하였음. 

### 개발 내역

1. 간단한 환경설정 세팅 (2020.11.15)

2. 프로젝트 구현 (2020.11.16)

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