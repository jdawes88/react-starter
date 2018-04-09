import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

const helloWorld = <p>Hello world</p>;
const yinyang = ( //can only send one element at a time. Can be one parent with lots of children
    <div>
        <p>yin</p>
        <p>yang</p>
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
