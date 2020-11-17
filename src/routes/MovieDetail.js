import React from 'react';

class MovieDetail extends React.Component {
//{id,year, title, summary, poster, genres}

    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        console.log("rendered");

        const { location } = this.props;
        if(location.state) {
            return <span>{location.state.title}</span>
        } else {
            return null;
        }

    }
}
export default MovieDetail;
