// Code MovieReviews Here
import React from 'react'


const Review = ({display_title,multimedia,publication_date,link,byline,summary_short}) => {
  


    return(<div className='review'>  
         <h3>Movie:{display_title}</h3>
         <img src={multimedia["src"]} alt="abc"  />
         <h4>Auther:{byline}</h4>
         <p>Summary:{summary_short}</p>
         <a href={link.url}>Full Review</a>
         <p>Published: {publication_date}</p>

    </div> 
    )
}


 const MovieReviews = props => <div className='review-list'>{props.reviews.map(Review)}</div>

export default MovieReviews




// /img/error-image.png




