import React, { useState, useEffect } from "react";

import "./index.scss";

function Results({ data, search }) {

  return (
    <div>
      {data.map((character) => (
         <div key={character.id} className="item-box">
        <div>
          <img src={`${character.thumbnail.path}/standard_medium.jpg`} />
        </div>
        <div>
          <h2>{character.name}</h2>
          <p>{character.description}</p>
          <span>#comics: {character.comics.items.length}</span>
          <span>#series: {character.series.items.length}</span>
          <span>#stories: {character.stories.items.length}</span>
        </div>
      </div>
     
      ))}
    </div>
  );
}

export default Results;
