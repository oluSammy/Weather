import {domElements} from './base';
import {kelvinToCelcius} from './locationView';


export const getInput = ()=> {
    if(domElements.searchQuery.value)
        return domElements.searchQuery.value;
    return domElements.searchQuery2.value;
}
export const clearInput = ()=> {
    domElements.searchQuery.value = '';
};
export const clearPage = ()=>{
    if(domElements.cards){
        domElements.cards.innerHTML = '';
    }
    if(domElements.forecast){
        domElements.forecast.innerHTML = '';
    }
    
};
export const minHieght = ()=>{domElements.cards.style.minHeight ='0px'; };

export const renderLocation = (id, current, day)=>{
    const imgUrl = `http://openweathermap.org/img/w/`;
    
    let description = [];
    let maxTemp = [];
    let minTemp = [];
    let humidity = [];
    let pressure = [];
    let windSpeed = [];
    let windDir = [];
    let temp = [];
    let icon = [];

    day.forEach( el => {
         
        
        temp.push(el.main.temp);
        maxTemp.push(el.main.temp_max);
        minTemp.push(el.main.temp_min);
        humidity.push(el.main.humidity);
        pressure.push(el.main.pressure);
        windSpeed.push(el.wind.speed);
        windDir.push(el.wind.deg);
        description.push(el.weather[0].description);
        icon.push(el.weather[0].icon);

        // const icons = sortForecast(icon, 'occurence');

    }); 
    const markUp = `
    <div class="row">
    <div class="col-1-of-3">
         <div class="card">
            <h3 class="current">Current Weather</h3>
            <div class="card__top">
                <div class="card__picture card__picture--sky">
                    &nbsp;
                </div>
                <div class="card__temp">
                    <p class="temp-value"> ${kelvinToCelcius(current.weather.main.temp)} &#8451;</p>
                </div>
                <div class="card__icon">
                    <div  id="icon"><img id="${current.weather.weather[0].icon}" src="${imgUrl}${current.weather.weather[0].icon}.png" alt="Weather icon"></div>
                </div>
                <div class="card__city">
                    <p> <i class="fas fa-map-marker-alt"></i> ${current.weather.name}, ${current.weather.sys.country}</p>
                </div>
            </div>

            <div class="card__bottom">
                <ul class="card__bottom--weather">
                    <li class="description">
                        <p class="title">Description</p>
                        <p class="Description-status right">${current.weather.weather[0].description}</p>
                    </li>
                    <li class="temp-max">
                        <p class="title">Maximum Temperature</p>
                        <p class="temp-max-status right"> <i class="fas fa-temperature-high"></i>${kelvinToCelcius(current.weather.main.temp_max)} &#8451;</p>
                    </li>
                    <li class="temp-min">
                        <p class="title">Minimum Temperature</p>
                        <p class="temp-min-status right"> <i class="fas fa-temperature-low"></i>  ${kelvinToCelcius(current.weather.main.temp_min)} &#8451;</p>
                    </li>
                    <li class="wind-speed">
                        <p class="title">wind-speed</p>
                        <p class="wind-speed-status right"><i class="fas fa-wind"></i> ${current.weather.wind.speed} m/s</p>
                    </li>
                    <li class="wind-direction">
                        <p class="title">wind-direction</p>
                        <p class="wind-direction-status right"> <i class="fas fa-compass"></i>${current.weather.wind.deg == undefined ? '&nbsp;--': current.weather.wind.deg } ${current.weather.wind.deg == undefined ? ' ': '&#176;' }</p>
                    </li>
                    <li class="pressure">
                        <p class="title">pressure</p>
                        <p class="pressure-status right"> ${current.weather.main.pressure} hPa</p>
                    </li>
                    <li class="humidity">
                        <p class="title">humidity</p>
                        <p class="humidity-status right"><i class="far fa-dewpoint"></i> ${current.weather.main.humidity} &#37;</p>
                    </li>
                </ul>
            </div>


        </div> 
    </div>
    <div class="new-col-2-of-3 new-forecast">
        <div class="forecast">
                 <div class="forecast__header current">Weather Forecast</div>
                <div class="forecast__cur">
                    <div class="forecast__cur-prev left btn">
                        <p class="prec"> <span><i class="fas fa-backward"></i></span> Prev</p>
                    </div>
                    <div class="forecast__cur-next left btn">
                        <p class="prec"> Next <span><i class="fas fa-forward"></i></span></p>
                    </div>
                </div>
                <div class="forecast__content">
                            <div class="forecast__top" data-id = ${id}>
                                <div class="forecast__day-time left">
                                            <p class="forecast__date">${renderDay(day[0].dt_txt)}</p>
                                        </div
                            </div>
                            <div class="forecast__weather">
                                <div class="forecast__step">
                                    <div class="forecast__cloud left">
                                        <p class="forecast__cloud--content">${kelvinToCelcius(sortForecast(temp, 'average'))}&#8451; <span><img id="${sortForecast(icon, 'occurence')}" src="${imgUrl}${sortForecast(icon, 'occurence')}.png" alt="Weather icon"></span></p>
                                    </div>
                                    <div class="forecast__description left">
                                        <p class="forecast__description--content">${sortForecast(description, 'occurence')}</p>
                                    </div>
                                </div>
                                <div class="forecast__step">
                                    <div class="forecast__max-temp left">
                                        <p>Max Temperature ${kelvinToCelcius(sortForecast(maxTemp, 'max'))} &#8451;</p>
                                        <p>Min Temperature ${kelvinToCelcius(sortForecast(minTemp, 'min'))}&#8451;</p>
                                    </div>
                                    <div class="forecast__humidity left">
                                        <p>Humidity ${sortForecast(humidity, 'average')}&#37;</p>
                                    </div>
                                </div>
                                <div class="forecast__step">
                                    <div class="forecast__presure left">
                                        <p>Pressure ${sortForecast(pressure, 'average')} hPa</p>
                                    </div>
                                    <div class="forecast__winde">
                                        <p>Wind ${sortForecast(windSpeed, 'average')}m/s, ${sortForecast(windDir, 'average')}&#176;</p>
                                    </div>
                                </div>
                            </div>
                </div> 

        </div>


    </div>
</div>
    `;
    domElements.forecast.insertAdjacentHTML('afterbegin', markUp);
};

export const renderNextDay = (id, day)=>{
    const imgUrl = `http://openweathermap.org/img/w/`;
    
    let description = [];
    let maxTemp = [];
    let minTemp = [];
    let humidity = [];
    let pressure = [];
    let windSpeed = [];
    let windDir = [];
    let temp = [];
    let icon = [];

    day.forEach( el => {
         
        
        temp.push(el.main.temp);
        maxTemp.push(el.main.temp_max);
        minTemp.push(el.main.temp_min);
        humidity.push(el.main.humidity);
        pressure.push(el.main.pressure);
        windSpeed.push(el.wind.speed);
        windDir.push(el.wind.deg);
        description.push(el.weather[0].description);
        icon.push(el.weather[0].icon);

        // const icons = sortForecast(icon, 'occurence');

    });
    const markUp = `
                        <div class="forecast__top" data-id = ${id}>
                        <div class="forecast__day-time left">
                                    <p class="forecast__date">${renderDay(day[0].dt_txt)}</p>
                                </div>
                        <div class="forecast__menu left">
                            <ul class="forecast__menu-ul">
                                <li class="forecast__menu-li active">Day</li>                                    
                                <li class="forecast__menu-li">Night</li>
                            </ul>
                        </div>
                    </div>
                    <div class="forecast__weather">
                        <div class="forecast__step">
                            <div class="forecast__cloud left">
                                <p class="forecast__cloud--content">${kelvinToCelcius(sortForecast(temp, 'average'))}&#8451; <span><img id="${sortForecast(icon, 'occurence')}" src="${imgUrl}${sortForecast(icon, 'occurence')}.png" alt="Weather icon"></span></p>
                            </div>
                            <div class="forecast__description left">
                                <p class="forecast__description--content">${sortForecast(description, 'occurence')}</p>
                            </div>
                        </div>
                        <div class="forecast__step">
                            <div class="forecast__max-temp left">
                                <p>Max Temperature ${kelvinToCelcius(sortForecast(maxTemp, 'max'))} &#8451;</p>
                                <p>Min Temperature ${kelvinToCelcius(sortForecast(minTemp, 'min'))}&#8451;</p>
                            </div>
                            <div class="forecast__humidity left">
                                <p>Humidity ${sortForecast(humidity, 'average')}&#37;</p>
                            </div>
                        </div>
                        <div class="forecast__step">
                            <div class="forecast__presure left">
                                <p>Pressure ${sortForecast(pressure, 'average')} hPa</p>
                            </div>
                            <div class="forecast__winde">
                                <p>Wind ${sortForecast(windSpeed, 'average')}m/s, ${sortForecast(windDir, 'average')}&#176;</p>
                            </div>
                        </div>
                    </div>
    `;
    document.querySelector('.forecast__content').insertAdjacentHTML('afterbegin', markUp);
};

const sortForecast = (arr, type) =>{
    if(type == 'max'){
        return Math.round(Math.max(...arr));
    }else if(type == 'min'){
        return Math.round(Math.min(...arr));
    }else if (type == 'average'){
        let sum = arr.reduce((prev, curr) => curr += prev)
        return Math.round(sum/arr.length) ;
    }else if(type == 'occurence'){
        let obj = {};
        let highest = 0;
        let current;

        arr.forEach(el => {
            if(obj.hasOwnProperty(el)){
                obj[el]++;
                if(obj[el] > highest){
                    highest = obj[el];
                    current = el;
                }
            }else{
                obj[el] =1;
            }
        });
        return current;
    }

};

export const renderDay = day =>{
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const today = day.split(' ');
    const now = today[0].split('-');
    
    return `${now[2]}, ${months[parseInt(now[1]) - 1]}`;

};


