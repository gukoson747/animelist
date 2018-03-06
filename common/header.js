import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { 
    Icon, Button, Container, Content, Header, Left, Body, Title
} from 'native-base';

class Screenheader extends Component{
    render(){ 
        return(
        <Header style={{ paddingTop: 20, paddingBottom: 10 }}>
            <Button transparent onPress>
                <Icon name='menu' />
            </Button>
            <Body>
                <Text style={{ color: '#ffffff' }}>{ this.props.title }</Text>
            </Body>
        </Header>
        );
    };
}

export default Screenheader;