import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

class Dog extends React.Component{

    constructor(){
        super();
        this.state = {
            value:"random",
            img:""
        }
    }


    //function for fetching data
    fetchData = async (value)=>{
        try{
            console.log(value);
            const response = await axios.get(`https://dog.ceo/api/breeds/image/${value}`);
            console.log(response);
            this.setState(()=>({
                img:response.data.message,
            }));
        }catch(error){
            console.log(error);
            alert('Failed to fetch user data. Please try again later.');
        }
    }
    //ComponentDidMount---- call fetch data inside it
    componentDidMount(){
        this.fetchData(this.state.value);
    }
    //component did update with proper condition will not cause loop, async await used in compodidwill functions
    //function for next
    nextHandler = ()=>{
        this.fetchData(this.state.value);
    }
    //function for onChange for select
    selectHandler = (event)=>{
        this.setState(()=>({value:event.target.value}));
        console.log(42);
        console.log(this.state.value);
        this.fetchData(this.state.value);
    }
    

    render(){
        return(
            <React.Fragment>
                <div>
                    <label htmlFor="selectdog">Select a Breed:</label>
                    <select value={this.state.value} id="selectdog" onChange={this.selectHandler}>
                        <option value="random">Random</option>
                        <option value="beagle">Beagle</option>
                        <option value="boxer">Boxer</option>
                        <option value="dalmatian">Dalmatian</option>
                        <option value="husky">Husky</option>
                    </select>
                </div>             
                <img src={this.state.img} alt="" />
                <div>
                    <button onClick={this.nextHandler}>Next</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Dog;