import axios from 'axios';

export default class Location{
    constructor(query){
        this.query = query;
    }

    async getResults(){
        const key = '67d2ed2bdf46af7df4a0695665f86c8f';
        try{
            const result = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=${key}`)
            // console.log(result);  
            this.weather = result.data; 
            // console.log(this.weather.weather[0].description);  
        } catch(error){
            alert(error);
        }
        
    }
}