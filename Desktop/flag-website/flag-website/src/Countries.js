import Card from './Card.js';
import { useEffect, useState } from 'react';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch(' https://xcountries-backend.azurewebsites.net/all');
                const data = await response.json();
                console.log(data);
                setCountries(data);
            }catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    },[]);
    //fetch data from endpoint
    //map through data and return card component for each,pass params to card
    // const arr = [1,2,3,4,5];
    return (
        <div style={{
            padding: '15px',
            display: 'flex',
            gap:'15px',
            flexWrap: 'wrap',
            marginLeft: '20px',
        }}>
            {countries.map(({name,flag})=>{
                return <Card key={name} name={name} flag={flag}/>
            })}
        </div>
    );

};

export default Countries;

