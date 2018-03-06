import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { 
    Icon, 
    Button, 
    Container, 
    Content, 
    Header, 
    Left, 
    Body, 
    Title,
    Form,
    Input,
    Item,
    List
} from 'native-base';


class Addscreen extends Component{
    render(){
        return(
            <Container>
                <Header style={{ paddingTop: 25, paddingBottom: 10 }}>
                    <Button transparent onPress={
                        () => this.props.navigation.navigate('DrawerOpen')
                    }>
                        <Icon name='menu' />
                    </Button>
                    <Body>
                        <Text style={{ color: '#ffffff' }}>Add Anime</Text>
                    </Body>
                </Header>
                <Content>
                    <Form> 
                        <List style={{ backgroundColor: '#ffffff' }}>
                            <Item style={{ width: '100%', margin: 0, padding: 0 }}>
                                <Input placeholder="Anime Name" />
                            </Item>
                            <Item style={{ width: '100%', margin: 0, padding: 0 }}>
                                <Input placeholder="Description" />
                            </Item>
                            
                            <Button full style={{ width: '100%', marginTop: 10 }}><Text style={{ color: '#ffffff', textAlign: 'center' }}>Save Anime</Text></Button>
                        </List> 
                    </Form>
                </Content>
            </Container>
        );
    };
}

export default Addscreen;