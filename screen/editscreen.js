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

class Editscreen extends Component {
    constructor(props) {
        super(props);

        var { params } = this.props.navigation.state;

        this.state = {
            animeId: params.animeId,
            animeName: null,
            animeDescription: null
        };

        this.handleChange_animeName = this.handleChange_animeName.bind(this);
        this.handleChange_animeDescription = this.handleChange_animeDescription.bind(this);
    }

    componentDidMount = () => { 
        axios.get('http://gukosonstaging.esy.es/crud/get_anime_by_id.php?id=' + this.state.animeId)
            .then((response) => {
               this.setState({ 
                    animeName: response.data[0].anime_name,
                    animeDescription: response.data[0].description
                });
            })
            .catch(function (error) {
                return error;  
            });
    }

    handleChange_animeName(event){
        this.setState({ 
            animeName: event.target.animeName
        });
    }
    handleChange_animeDescription(event){
        this.setState({ 
            animeDescription: event.target.animeDescription
        });
    }

    render() { 
        return (
            <Container> 
                <Header style={{ paddingTop: 25, paddingBottom: 10 }}>
                    <Button transparent onPress={
                        () => this.props.navigation.navigate('DrawerOpen')
                    }>
                        <Icon name='menu' />
                    </Button> 
                    <Body>
                        <Text style={{ color: '#ffffff' }}>Edit</Text>
                    </Body>
                </Header>  
                <Content> 
                    <Form> 
                        <List style={{ backgroundColor: '#ffffff' }}>
                            <Item style={{ width: '100%', margin: 0, padding: 0 }}>
                                <Input value={this.state.animeName} onChange={this.handleChange_animeName}/>
                            </Item>
                            <Item style={{ width: '100%', margin: 0, padding: 0 }}>
                                <Textarea onChange={this.handleChange_animeDescription} value={this.state.animeDescription} style={{ height: 500 }} />
                            </Item>
                            
                            <Button full style={{ width: '100%', marginTop: 10 }}><Text style={{ color: '#ffffff', textAlign: 'center' }}>Save Anime</Text></Button>
                        </List> 
                    </Form>
                </Content>
            </Container>
        ); 
    } 
}

export default Editscreen;