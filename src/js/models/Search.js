import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getForecast(){
        const key = '67d2ed2bdf46af7df4a0695665f86c8f';
        try{
            const result = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${this.query}&appid=${key}`)
            console.log(result);  
            this.weather = result.data; 
            // console.log(this.weather);  
        } catch(error){
            alert(error);
        }
        
    }
    
}