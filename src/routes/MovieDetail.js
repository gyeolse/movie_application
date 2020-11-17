import React from 'react';
import {Table, TableBody, TableHead, TableRow, TableCell, Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles'
import {Link, Route} from 'react-router-dom';

class MovieDetail extends React.Component {
//{id,year, title, summary, poster, genres}

    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { classes } = this.props;
        const { location } = this.props;
        const {year, title, summary, poster, genres } = this.props.location.state;
        const {searchurl} = "https://google.com/" + title;

        if(!!location.state){
            return (
                <div style={{height:400, width : '100%' }}>
                <Table>
                <TableRow align='right'>
                <TableCell align='right'  > {<img src={poster}></img>} </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align='center'> 년도 </TableCell>
                    <TableCell > {year}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell align='center'> 제목 </TableCell>
                    <TableCell > {title}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell align='center'> 요약 </TableCell>
                <TableCell > {summary}</TableCell>
                </TableRow>
                <TableRow>
                <TableCell align='center'> 장르 </TableCell>
                <TableCell> {genres.map((genre,index) => <li key={index}>{genre}</li>)}</TableCell>
                </TableRow>
                </Table>
                <br>
                </br>
                <Link to={{
                    pathname:`/search/${title}`
                }}>
                    <Button variant="contained" color="secondary" >상세 페이지 검색</Button>
                </Link>
                <br>
                </br>
                <br>
                </br>
                <Link to="/">
                    <Button variant="contained" color="primary">뒤로 이동</Button>
                </Link>

                </div> 
            )        
        } else {
            return null;
        }
    }
}
export default MovieDetail;
