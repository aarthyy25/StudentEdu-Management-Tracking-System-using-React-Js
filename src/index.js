import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function StudentEdu(){
  return(
    <div>
      <App />
    </div>
  )
}
ReactDOM.render(<StudentEdu />,document.getElementById('root'));