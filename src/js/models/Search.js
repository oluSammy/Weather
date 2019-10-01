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
            
        } catch(error){
            alert(error);
        }
        
    }
    sortDays(){
        this.day1 = [];
        this.day2 = [];
        this.day3 = [];
        this.day4 = [];
        
        const today = new Date();
        let days = ["day01", "day02", "day03", "day04"];

        days.forEach((cur, index) => {
            cur = new Date(today);
            cur.setDate(today.getDate() + (index +1));
            let date = cur.toString().split(' ');

            // console.log(parseInt(date[2], 10) );
            days[index] = parseInt(date[2], 10)

        });
         
        console.log(this.weather.list);
        this.weather.list.forEach(cur =>{

            console.log(getDate(cur.dt_txt));
            
             if(getDate(cur.dt_txt) == days[0]){
                 this.day1.push(cur);
                  console.log(cur.dt_txt);
             }
             else if(getDate(cur.dt_txt) == days[1]){
                 this.day2.push(cur);
             }
             else if(getDate(cur.dt_txt) == days[2]){
                 this.day3.push(cur);
             }
             else if(getDate(cur.dt_txt) == days[3]){
                 this.day4.push(cur);
             }
        });
        console.log(this.day1);
    }
    
}
const getDate = (dateTxt) =>{
    const dateTime = dateTxt.split(' ');
    const date = dateTime[0].split('-');
    return parseInt(date[2]);
};