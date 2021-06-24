import { getElementById } from 'domutils';
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/login';
import InfoPage from './components/infoPage';
import './styles/styles.scss';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Homepage from './components/homepage';
import Customer from './components/customer';
import { delete_cookie } from 'sfcookies';
import customerBranchInfo from './components/customerBranchInfo';

class App extends React.Component {

    componentDidMount() {
        delete_cookie('tokens');
    }


    render(){
      return (
        <Router>
            <Switch>
                <Route path="/Login" component={Login}/>
                <Route path="/info" component={InfoPage} />
                <Route path="/customerBranchInfo" component={customerBranchInfo} />
                <Route path="/customer" component={Customer} />
                <Route path="/" component={Homepage} />
            </Switch>
        </Router>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));