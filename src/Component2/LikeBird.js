import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { likebird } from "../Redux/BirdReducer";
import { deletebird } from "../Redux/BirdReducer";
function Showbird() {
  const birds = useSelector((state) => state.bird.bird);
  console.log(birds.bird);
  console.log(birds.length);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>birds</h1>
      {birds.length > 0 &&
        birds.map((bird) => (
          <div className="bird" key={bird.id}>
            <li>{bird.name}</li>
            <p>Likes: {bird.like}</p>
            <button onClick={() => dispatch(likebird(bird.id))}>Like</button>
            <button onClick={() => dispatch(deletebird(bird.id))}>
              delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default Showbird;
