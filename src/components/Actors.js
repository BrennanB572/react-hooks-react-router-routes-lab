import React from "react";
import { actors } from "../data";

const actorsList = actors.map((actor) => {
  const actorNames = actor.movies.map((movie) => (
    <li key={movie}>{movie}</li>
  ));
  return (
    <div key={actor.name}>
    <h2>Name: {actor.name}</h2>
    <ul>Movies: {actorNames}</ul>
    </div>
  )
})


function Actors() {
  return <div>
    <h1>Actors Page</h1>
    <div>{actorsList}</div>
  </div>;
}

export default Actors;
