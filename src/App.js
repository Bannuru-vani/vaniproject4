import React from 'react';
import Joke from './components/Joke';
import './style.css';
function App(){
  return(
    <div className="photo">
        <Joke
          imgurl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
           question="hii welcome to reactprops"
           answer="yes iam started"
           
        />
        <Joke
           question="hii welcome to my home"
           answer="yes iam coming"
           imgurl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
        <Joke
            question="hii where are u going"
           answer="yes iam going to hometown"
           imgurl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
        <Joke
           question="hii  what about you"
           answer="yes iam also same"
           imgurl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
        <Joke
           question="hii when you are coming to my home"
           answer="yes iam coming next month"
           imgurl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
    </div>
  )
}
export default App;
