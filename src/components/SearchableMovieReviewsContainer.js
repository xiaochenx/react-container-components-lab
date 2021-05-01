import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// search api     https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&api-key=A8SkYoQ8D4bEAH5cRKakj29KuCXNNAU8
  

// Code SearchableMovieReviewsContainer Here


export default class SearchableMovieReviewsContainer extends Component {
state = {
    searchTerm: '',
    reviews: []
}

handleChange = e => {
    console.log(e)
    this.setState({
        searchTerm: e.target.value
    })
}

handleSubmit = e => {
    e.preventDefault()

    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=A8SkYoQ8D4bEAH5cRKakj29KuCXNNAU8`)
    .then(r => r.json())
    .then(data => {this.setState({reviews: data.results})})
}



    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                    <input type="submit" value='Search' />
                </form>

                
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
