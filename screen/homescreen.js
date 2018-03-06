import React,{ Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import axios from 'axios';

import Nav from '../common/nav'

import { 
    Container, 
    Header, 
    Content, 
    Button, 
    Left, 
    Icon, 
    Body,
    List,
    ListItem 
} from 'native-base';
//import Allanime from '../common/allanime';
import Addscreen from './addscreen';
import Editscreen from './editscreen';


class Homescreen extends Component{
     
    constructor(props) {
        super(props);

        this.state = { 
            animelist: []
        };
    }

    componentDidMount = () => {
        axios.get('http://gukosonstaging.esy.es/crud/get_anime.php')
            .then((response) => {
               this.setState({ 
                   animelist: response.data 
                });
            })
            .catch(function (error) {
                return error;  
            });
    }
    
    onPress(){

    }


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
                        <Text style={{ color: '#ffffff' }}>Home</Text>
                    </Body>
                </Header>  
                <Content> 
                    <List>
                        {
                            this.state.animelist.map( 
                                anime => <ListItem onPress={
                                    () => { Alert.alert(
                                        anime.anime_name, 
                                        anime.description,
                                        [
                                            {text: 'Edite', onPress: () => this.props.navigation.navigate('Editscreen', { animeId: anime.id })}, 
                                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
                                        ]
                                    ) } 
                                } key={anime.id} style={{ padding: 0, width: '100%' }}><Text>{ anime.anime_name }</Text></ListItem>
                                //anime => <Allanime key={anime.id} animename={anime.anime_name} />
                            ) 
                        } 
                    </List> 
                </Content>
            </Container>
        );
    }
} 

export default Homescreen;
