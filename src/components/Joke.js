import React from "react";
function Joke(props) {
  return (
    <div>
      <h3>question:{props.question}</h3>
      <h4>answer:{props.answer}</h4>
      <img src={props.imgurl} />
      <hr/>
    </div>
  );
}
export default Joke;
