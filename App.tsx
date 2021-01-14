// import React from 'react';
// import { render } from 'react-dom';
const React = require('react')
const { render } = require('react-dom')
// require('@babel/register')({ extensions: ['.js', '.ts'] });

// const mainElement = document.createElement('div');
// document.body.appendChild(mainElement);

const App = () => {
  return (
    <div>
    {/* <h1>
      Hi from a react app
    </h1> */}
    </div>
  )
  
}

render(<App />, document.getElementById('root'));

// export default App
module.exports = App;