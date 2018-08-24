import React from "react";

const Genres = ({ collection = [] }) => (
  <ul>{collection.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>
);

export default Genres;
