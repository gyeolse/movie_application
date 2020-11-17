import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading : true,
    movies : []
  }

  //async와 await. async : 기다려줘. await : 뭘기다릴건지에 대해서 앞에다가 달아주기. 이걸 해야 자바스크립트가 기다려줌
  getMovies = async () => {
    //ES6. movies.data.data.movies와 같다.
    const {data : {data : { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"); //기다림이 필요하므로, componentDidMount가 끝날때까지 대기 필요. 때문에 async

    //this.setState({movies : movies});와 같다. 
    this.setState({movies, isLoading : false });

    console.log(movies);
  }
  //componentDidMount에서 data를 fetch하는 역할을 함. 
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; // ES6
    return (
      <section className="container">
        {isLoading 
        ? (<div className="loader">
          <span className="loader__text">Loading...</span>
          </div>
      ) : (
        <div className="movies">
          { movies.map( movie => (
            <Movie
              key={movie.id} 
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
            /> 
         ))} 
      </div>
    )}
    </section>
    );
    }
}
export default Home;



//ES6
