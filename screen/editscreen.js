import React,{ Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import { 
    Container, 
    Header, 
    Content, 
    Button, 
    Left, 
    Icon, 
    Body,
    Input, 
    Form,
    List,
    Item,
    Textarea
} from 'native-base';
import axios from 'axios';

import homescreen from '../screen/homescreen';

class Editscreen extends Component {
    constructor(props) {
        super(props);

        var { params } = this.props.navigation.state;

        this.state = {
            animeId: params.animeId,
            animeName: params.animeTitle,
            animeDescription: params.animeDescription
        };
    }

    save = () => {
        
        axios.post('http://gukosonstaging.esy.es/crud/update_anime.php', {
            animeID: this.state.animeId,
            animeName: this.state.animeName,
            animeDescription: this.state.animeDescription 
        })
          .then(function (response) {
            console.log(response);
        })
          .catch(function (error) {
            console.log(error);
        });

        return this.props.navigation.navigate('Homescreen');
    }
    
 
    render() { 
        return ( 
            <Container>   
                <Header style={{ paddingTop: 25, paddingBottom: 10 }}>
                    <Body>
                        <Text style={{ color: '#ffffff' }}>Edit</Text>
                    </Body>
                </Header>  
                <Content> 
                    <Form> 
                        <List style={{ backgroundColor: '#ffffff' }}>
                            <Item style={{ width: '100%', margin: 0, padding: 0 }}>
                                <Input value={this.state.animeName} onChangeText={(animeName) => this.setState({animeName})} />
                            </Item>
                            <Item style={{ width: '100%', margin: 0, padding: 0 }}>
                                <Textarea onChangeText={(animeDescription) => this.setState({animeDescription})} value={this.state.animeDescription} style={{ height: 500 }} />
                            </Item>
                            
                            <Button full style={{ width: '100%', marginTop: 10 }} onPress={this.save}><Text style={{ color: '#ffffff', textAlign: 'center' }}>Save Anime</Text></Button>
                        </List> 
                    </Form>
                </Content>
            </Container>
        ); 
    } 
}

export default Editscreen;