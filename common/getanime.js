import React,{ Component } from 'react';
import axios from 'axios';


class GetAnime extends Component{
     
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


    render(){  
        return(
            this.state.animelist
        );
    }
} 

export default GetAnime;
