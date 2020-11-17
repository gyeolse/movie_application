import React from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

class RedirectPage extends React.Component {

    componentDidMount(){
//        window.location.replace('https://search.naver.com/search.naver?ie=UTF-8&&query=' + this.props.match.params.title);
        window.open('https://search.naver.com/search.naver?ie=UTF-8&&query=' + this.props.match.params.title);

    }

    render() {
        const {params} = this.props.match;
        alert(params.title+" 에 대한 네이버 검색 결과로 이동합니다.");

        return (
            <div>
                <h1>{params.title}</h1>
                <br></br>
            <Link to="/">
                <Button variant="contained" color="primary" size="large">홈으로 이동</Button>
            </Link>
            </div>
        
        )
    }

}

export default RedirectPage;
