import React,{ Component } from 'react';
import {StackNavigator} from 'react-navigation';

import Editscreen from '../screen/editscreen';

class Nav extends Component{
    render(){ 
        return(
        <Navigator />
        );
    };
}

const Navigator = StackNavigator({
    Edit: { screen: Editscreen },
})

export default Nav;