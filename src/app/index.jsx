import React from 'react';
import {render} from 'react-dom';

import { Greeting }  from './components/Greeting';

class App extends React.Component{
    render(){
        return <Greeting name = "Abhishek"/>;
    }
}

const app = document.getElementById('root');
render(<App />, app);