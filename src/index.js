import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={10} onSetRating={setMovieRating} />
      <p>This movie has {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      size={24}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
      onSetRating={null}
    />
    <StarRating maxRating={10} defaultRating={3} onSetRating={null} />
    <Test />
  </React.StrictMode>
);
