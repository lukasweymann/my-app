import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const content = 
<div>
<h1>Hello World!</h1>
<div>
<img src="img/icecream1.jpg" alt="Ice Cream"></img>
</div>
<div><img src="img/icecream2.jpg" alt="Ice Cream"></img></div>
</div>

const rootEl = document.getElementById('fkso');


ReactDOM.render(content, rootEl);


