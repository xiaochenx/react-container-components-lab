import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

//    latest reviews api     https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=A8SkYoQ8D4bEAH5cRKakj29KuCXNNAU8

// Code LatestMovieReviewsContainer Here


class LatestMovieReviewsContainer extends Component {

    state = {
          reviews: []
        }
  

    componentDidMount(){
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=A8SkYoQ8D4bEAH5cRKakj29KuCXNNAU8')
        .then(r => r.json())
        .then(data => this.setState({reviews: data.results}))
       
    }
    

    
    render() {
        return (
            <div className='latest-movie-reviews'>
                <h2>The Latest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>

        )
    }
}

export default LatestMovieReviewsContainer


