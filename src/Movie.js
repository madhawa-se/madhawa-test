import React, { Component } from 'react';

class Movie extends Component {

constructor(props) {
    super(props);
    this.state = {
      movies:[
      {
        id:1,year:1999,genre:"Sci-Fi",title:"Matrix",
        description:"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war aagainstits controllers"
      },
      {
        id:2,year:1994,genre:"Drama",title:"The Shawshank Redemption",
        description:"Two imprisoned men bond over a number of years"
      }
      ]
    };
  }

  render() {
    return (
      <div>

       {this.state.movies.map(
          (movie,index)=>{
            return  <div><h2>{movie.year} - {movie.genre} - {movie.title}</h2><p>{movie.description}</p></div>
           } 
        )}
         
      </div>
    );
  }
}

export default Movie;
