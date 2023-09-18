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
            <div className="">
              <span>
                <strong>#comics: </strong>
                {character.comics.items.length}{" "}
              </span>
              <span>
                <strong>#series: </strong>
                {character.series.items.length}{" "}
              </span>
              <span>
                <strong>#stories: </strong>
                {character.stories.items.length}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
