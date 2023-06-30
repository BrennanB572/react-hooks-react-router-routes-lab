import React from "react";
import { directors } from "../data";

const directorsList = directors.map((director) => {
const directorNames = director.movies.map((movie) => (
    <li key={movie}>{movie}</li>
  ));
  return (
    <div key={director.name}> 
    <h2>Name: {director.name}</h2>
    <p>Movies: </p>
    <ul>{directorNames}</ul>
    </div>
  )
})

function Directors() {
  return <div>
   <h1>Directors Page</h1>
   <div>{directorsList}</div>
  </div>
}

export default Directors;