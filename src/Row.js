import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  //in the props, isLargeRow is false by default unless it is passed to something.
  const [movies, setMovies] = useState([]);

  //   the base url for the backdrop image just like in Banner.js
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* to map through the movies */}
        {movies.map(
          (movie) =>
        //   the condition below is to prevent a dead link in the image
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`} // we adding a style for if it is a large row.
                key={movie.id}
                // //this means that if it is a large row it should render "movie.poster_path" else render "movie.backdrop_path"
                // cause movie.poster_path and movie.backdrop_path are not the same.
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
