import React, {Component} from 'react';
import axios from 'axios';

class GetData extends Component {
    componentDidMount(){
        this.getData();
        this.getBetter();
    }
    async getData(){
        const response= await axios.get('/api/get-stuff');
        console.log('response from axios call:', response);
    }
    async getBetter(){
        const response= await axios.get('/api/better-stuff');
        console.log('response from axios call:', response);
    }
    render(){
        return(
            <div>
                <h1>This is Get Data</h1>
            </div>
        )
    }
}
export default GetData;