import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
  // to fetch the movies from the api and store them in the state.
  const [movie, setMovie] = useState([]); 

  //A function to truncate the description i.e when the text is too long it will remove the remaining text and a '...' at the end. 
  // The function takes a string and a n, where n is the number of string before the remain text is removed.
  function truncate(string, n){
    return string?.length > n ? string.substr(0, n-1) + '...' : string
  }
  // the return means that if the length of the string is greater that the defined number (n),
  // it will cut the string and add '...' but if the condition is not satisfied it will return the string.

  // We use the useeffect hook to fetch the data from the api
  useEffect(() => {
   async function fetchData(){
    // always import the axios form the local file we created './axios' not from axios itself
     const request = await axios.get(requests.fetchNetflixOriginals); //import the requests from the './Requests' we create
    //  we set the results to the movie state
     setMovie(
      request.data.results[
        // this line below means that we want to generate a random number from 0 to the length of the result requested e.g if 100 movies were requested, 0 to 100 movies
        // will be put in the array and the request.data.results[] will set the setMovie with the array.
         Math.floor(Math.random() * request.data.results.length -1)
      ]
     );
     return request; //always return it, it is a good practice.
   }
   fetchData();
  }, [])

  console.log(movie);
  
//we used inline style instead of css cause we are going to fetch the background image from the api
  return (
    <header
      className="banner"
      style={{
        // we basically add the base url with the backdrop url, the backdrop url needs the base url to display
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,//the backdrop__path is url string from the api so we use string interpolation to access it. 
        backgroundPosition:'center center',
        backgroundSize:'cover'
      }}
    >
      <div className="banner__contents">
        {/* In the api the movie title can come in different field
        so we are saying that if movie?.title exists, it should use it, or if
        movie?.name exists its should use it or if movie?.original_name exist,
        it should use it
        */}
        <h1 className="banner__title">
         {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}

          </h1>
      </div>
      
      {/* For a fade at the bottom */}
      <div className="banner--fadeBottom"/> 
    </header>
  );
}

export default Banner;
