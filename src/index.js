import { getElementById } from 'domutils';
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login';
import './styles/styles.scss';

const App = () => {
    return (
        <div>
            <Login />
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));