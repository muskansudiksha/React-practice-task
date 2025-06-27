import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button.js';
import axios from 'axios';

class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            name:"",
            url:"",
            email:"",
        }
    }
    fetchData = async (id)=>{
        try{
            const response = await axios.get(`https://reqres.in/api/users/${id}`);
            console.log(response);
            this.setState(()=>({name : response.data.data.first_name + response.data.data.last_name,
                email : response.data.data.email,
                url : response.data.data.avatar
            }));
        }catch(error){
            console.log(error);
            this.setState(()=>({name :"",
                email : "",
                url : ""
            }));
            alert('Failed to fetch user data. Please try again later.');
        }
    }
    render(){
        return(
            <div>
                <div>
                    <Button btnClick ={()=>{this.fetchData(1)}} btnTxt={1} />
                    <Button btnClick ={()=>{this.fetchData(2)}} btnTxt={2} />
                    <Button btnClick ={()=>{this.fetchData(3)}} btnTxt={3} />
                    <Button btnClick ={()=>{this.fetchData(100)}} btnTxt={100} />
                </div>
                <ul>
                    <li>{this.state.name}</li>
                    <li>{this.state.email}</li>
                </ul>
                <img src={this.state.url} alt="Profile Picture" />
            </div>
        );
    }
}

export default Dashboard;