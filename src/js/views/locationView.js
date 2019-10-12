import {domElements} from './base.js';

// Kelvin to Celcius 
export const kelvinToCelcius = k=> Math.round(k - 273.15);

export const renderWeather = (locations) =>{
    const imgUrl = `http://openweathermap.org/img/w/`;
    const markup = `
        <div class="row">
            <div class="col-1-of-3">

                 <div class="card">
                     
                    <div class="card__top">
                        <div class="card__picture card__picture--1">
                            &nbsp;
                        </div>
                        <div class="card__temp">
                            <p class="temp-value"> ${kelvinToCelcius(locations[0].main.temp)} &#8451;</p>
                        </div>
                        <div class="card__icon">
                            <div  id="icon"><img id="${locations[0].weather[0].icon}" src="${imgUrl}${locations[0].weather[0].icon}.png" alt="Weather icon"></div>
                        </div>
                        <div class="card__city">
                            <p> <i class="fas fa-map-marker-alt"></i> ${locations[0].name}, ${locations[0].sys.country}</p>
                        </div>
                    </div>

                    <div class="card__bottom">
                        <ul class="card__bottom--weather">
                            <li class="description">
                                <p class="title">Description</p>
                                <p class="Description-status right">${locations[0].weather[0].description}</p>
                            </li>
                            <li class="temp-max">
                                <p class="title">Maximum Temperature</p>
                                <p class="temp-max-status right"> <i class="fas fa-temperature-high"></i>${kelvinToCelcius(locations[0].main.temp_max)} &#8451;</p>
                            </li>
                            <li class="temp-min">
                                <p class="title">Minimum Temperature</p>
                                <p class="temp-min-status right"> <i class="fas fa-temperature-low"></i>  ${kelvinToCelcius(locations[0].main.temp_min)} &#8451;</p>
                            </li>
                            <li class="wind-speed">
                                <p class="title">wind-speed</p>
                                <p class="wind-speed-status right"><i class="fas fa-wind"></i> ${locations[0].wind.speed} m/s</p>
                            </li>
                            <li class="wind-direction">
                                <p class="title">wind-direction</p>
                                <p class="wind-direction-status right"> <i class="fas fa-compass"></i> ${locations[0].wind.deg == undefined ? '&nbsp;--': locations[0].wind.deg} &#176;</p>
                                
                            </li>
                            <li class="pressure">
                                <p class="title">pressure</p>
                                <p class="pressure-status right"> ${locations[0].main.pressure} hPa</p>
                            </li>
                            <li class="humidity">
                                <p class="title">humidity</p>
                                <p class="humidity-status right"><i class="far fa-dewpoint"></i> ${locations[0].main.humidity} &#37;</p>
                            </li>
                        </ul>
                    </div>
                    <div class="card__forcast">
                        <div class="btn btn-forecast" data-forecast = "london">
                            <p>4 days weather forecast <i class="fas fa-link"></i></p>
                      </div>
                    </div>

                </div>  
            </div>
            <div class="col-1-of-3">
                 <div class="card">
                    
                    <div class="card__top">
                        <div class="card__picture card__picture--2">
                            &nbsp;
                        </div>
                        <div class="card__temp">
                            <p class="temp-value"> ${kelvinToCelcius(locations[1].main.temp)} &#8451;</p>
                        </div>
                        <div class="card__icon"> 
                            <div  id="icon"><img id="${locations[1].weather[0].icon}" src="${imgUrl}${locations[1].weather[0].icon}.png" alt="Weather icon"></div>
                        </div>
                        <div class="card__city">
                            <p> <i class="fas fa-map-marker-alt"></i> ${locations[1].name}, ${locations[1].sys.country}</p>
                        </div>
                    </div>

                    <div class="card__bottom">
                        <ul class="card__bottom--weather">
                            <li class="description">
                                <p class="title">Description</p>
                                <p class="Description-status right">${locations[1].weather[0].description}</p>
                            </li>
                            <li class="temp-max">
                                <p class="title">Maximum Temperature</p>
                                <p class="temp-max-status right"> <i class="fas fa-temperature-high"></i>${kelvinToCelcius(locations[1].main.temp_max)} &#8451;</p>
                            </li>
                            <li class="temp-min">
                                <p class="title">Minimum Temperature</p>
                                <p class="temp-min-status right"> <i class="fas fa-temperature-low"></i>  ${kelvinToCelcius(locations[1].main.temp_min)} &#8451;</p>
                            </li>
                            <li class="wind-speed">
                                <p class="title">wind-speed</p>
                                <p class="wind-speed-status right"><i class="fas fa-wind"></i> ${locations[1].wind.speed} m/s</p>
                            </li>
                            <li class="wind-direction">
                                <p class="title">wind-direction</p>
                                <p class="wind-direction-status right"> <i class="fas fa-compass"></i>${locations[1].wind.deg == undefined ? '&nbsp;--': locations[1].wind.deg} &#176;</p>
                            </li>
                            <li class="pressure">
                                <p class="title">pressure</p>
                                <p class="pressure-status right">  ${locations[1].main.pressure} hPa</p>
                            </li>
                            <li class="humidity">
                                <p class="title">humidity</p>
                                <p class="humidity-status right"><i class="far fa-dewpoint"></i>  ${locations[1].main.humidity} &#37;</p>
                            </li>
                        </ul>
                    </div>
                    <div class="card__forcast">
                        <div class="btn btn-forecast" data-forecast = "new york">
                            <p>4 days weather forecast <i class="fas fa-link"></i></p>
                      </div>
                    </div>

                </div>  
             </div>
            <div class="col-1-of-3">

                 <div class="card">
                    
                    <div class="card__top">
                        <div class="card__picture card__picture--3">
                            &nbsp;
                        </div>
                        <div class="card__temp">
                            <p class="temp-value"> ${kelvinToCelcius(locations[2].main.temp)} &#8451;</p>
                        </div>
                        <div class="card__icon">
                            <div  id="icon"><img id="${locations[2].weather[0].icon}" src="${imgUrl}${locations[2].weather[0].icon}.png" alt="Weather icon"></div>
                        </div>
                        <div class="card__city">
                            <p> <i class="fas fa-map-marker-alt"></i>${locations[2].name}, ${locations[2].sys.country}</p>
                        </div>
                    </div>

                    <div class="card__bottom">
                        <ul class="card__bottom--weather">
                            <li class="description">
                                <p class="title">Description</p>
                                <p class="Description-status right">${locations[2].weather[0].description}</p>
                            </li>
                            <li class="temp-max">
                                <p class="title">Maximum Temperature</p>
                                <p class="temp-max-status right"> <i class="fas fa-temperature-high"></i>${kelvinToCelcius(locations[2].main.temp_max)} &#8451;</p>
                            </li>
                            <li class="temp-min">
                                <p class="title">Minimum Temperature</p>
                                <p class="temp-min-status right"> <i class="fas fa-temperature-low"></i>  ${kelvinToCelcius(locations[2].main.temp_min)} &#8451;</p>
                            </li>
                            <li class="wind-speed">
                                <p class="title">wind-speed</p>
                                <p class="wind-speed-status right"><i class="fas fa-wind"></i>${locations[2].wind.speed} m/s</p>
                            </li>
                            <li class="wind-direction">
                                <p class="title">wind-direction</p>
                                <p class="wind-direction-status right"> <i class="fas fa-compass"></i>${locations[2].wind.deg == undefined ? '&nbsp;--': locations[2].wind.deg} &#176;</p>
                            </li>
                            <li class="pressure">
                                <p class="title">pressure</p>
                                <p class="pressure-status right"> ${locations[2].main.pressure} hPa</p>
                            </li>
                            <li class="humidity">
                                <p class="title">humidity</p>
                                <p class="humidity-status right"><i class="far fa-dewpoint"></i> ${locations[2].main.humidity} &#37;</p>
                            </li>
                        </ul>
                    </div>
                    <div class="card__forcast">
                        <div class="btn btn-forecast" data-forecast = "lagos">
                            <p>4 days weather forecast <i class="fas fa-link"></i></p>
                      </div>
                    </div>

                </div>  
            </div>

        </div>

        <div class="row">
            <div class="col-1-of-3">


                 <div class="card">
                    
                    <div class="card__top">
                        <div class="card__picture card__picture--4">
                            &nbsp;
                        </div>
                        <div class="card__temp">
                            <p class="temp-value"> ${kelvinToCelcius(locations[3].main.temp)} &#8451;</p>
                        </div>
                        <div class="card__icon">
                            <div  id="icon"><img id="${locations[3].weather[0].icon}" src="${imgUrl}${locations[3].weather[0].icon}.png" alt="Weather icon"></div>
                        </div>
                        <div class="card__city">
                            <p> <i class="fas fa-map-marker-alt"></i> ${locations[3].name}, ${locations[3].sys.country}</p>
                        </div>
                    </div>

                    <div class="card__bottom">
                        <ul class="card__bottom--weather">
                            <li class="description">
                                <p class="title">Description</p>
                                <p class="Description-status right">${locations[3].weather[0].description}</p>
                            </li>
                            <li class="temp-max">
                                <p class="title">Maximum Temperature</p>
                                <p class="temp-max-status right"> <i class="fas fa-temperature-high"></i>${kelvinToCelcius(locations[3].main.temp_max)} &#8451;</p>
                            </li>
                            <li class="temp-min">
                                <p class="title">Minimum Temperature</p>
                                <p class="temp-min-status right"> <i class="fas fa-temperature-low"></i>  ${kelvinToCelcius(locations[3].main.temp_min)} &#8451;</p>
                            </li>
                            <li class="wind-speed">
                                <p class="title">wind-speed</p>
                                <p class="wind-speed-status right"><i class="fas fa-wind"></i> ${locations[3].wind.speed} m/s</p>
                            </li>
                            <li class="wind-direction">
                                <p class="title">wind-direction</p>
                                <p class="wind-direction-status right"> <i class="fas fa-compass"></i>${locations[3].wind.deg} &#176;</p>
                            </li>
                            <li class="pressure">
                                <p class="title">pressure</p>
                                <p class="pressure-status right"> ${locations[3].main.pressure} hPa</p>
                            </li>
                            <li class="humidity">
                                <p class="title">humidity</p>
                                <p class="humidity-status right"><i class="far fa-dewpoint"></i> ${locations[3].main.humidity} &#37;</p>
                            </li>
                        </ul>
                    </div>
                    <div class="card__forcast">
                        <div class="btn btn-forecast" data-forecast = "paris">
                            <p>4 days weather forecast <i class="fas fa-link"></i></p>
                      </div>
                    </div>

                </div>  
            </div>
            <div class="col-1-of-3">
                 <div class="card">
                    
                    <div class="card__top">
                        <div class="card__picture card__picture--5">
                            &nbsp;
                        </div>
                        <div class="card__temp">
                            <p class="temp-value"> ${kelvinToCelcius(locations[4].main.temp)} &#8451;</p>
                        </div>
                        <div class="card__icon">
                            <div  id="icon"><img id="${locations[4].weather[0].icon}" src="${imgUrl}${locations[4].weather[0].icon}.png" alt="Weather icon"></div>
                        </div>
                        <div class="card__city">
                            <p> <i class="fas fa-map-marker-alt"></i> ${locations[4].name}, ${locations[4].sys.country}</p>
                        </div>
                    </div>

                    <div class="card__bottom">
                        <ul class="card__bottom--weather">
                            <li class="description">
                                <p class="title">Description</p>
                                <p class="Description-status right">${locations[4].weather[0].description}</p>
                            </li>
                            <li class="temp-max">
                                <p class="title">Maximum Temperature</p>
                                <p class="temp-max-status right"> <i class="fas fa-temperature-high"></i>${kelvinToCelcius(locations[4].main.temp_max)} &#8451;</p>
                            </li>
                            <li class="temp-min">
                                <p class="title">Minimum Temperature</p>
                                <p class="temp-min-status right"> <i class="fas fa-temperature-low"></i>  ${kelvinToCelcius(locations[4].main.temp_min)} &#8451;</p>
                            </li>
                            <li class="wind-speed">
                                <p class="title">wind-speed</p>
                                <p class="wind-speed-status right"><i class="fas fa-wind"></i> ${locations[4].wind.speed} m/s</p>
                            </li>
                            <li class="wind-direction">
                                <p class="title">wind-direction</p>
                                <p class="wind-direction-status right"> <i class="fas fa-compass"></i>${locations[4].wind.deg == undefined ? '&nbsp;--': locations[4].wind.deg} &#176;</p>
                            </li>
                            <li class="pressure">
                                <p class="title">pressure</p>
                                <p class="pressure-status right"> ${locations[4].main.pressure} hPa</p>
                            </li>
                            <li class="humidity">
                                <p class="title">humidity</p>
                                <p class="humidity-status right"><i class="far fa-dewpoint"></i> ${locations[4].main.humidity} &#37;</p>
                            </li>
                        </ul>
                    </div>
                    <div class="card__forcast">
                        <div class="btn btn-forecast" data-forecast = "ibadan">
                            <p>4 days weather forecast <i class="fas fa-link"></i></p>
                      </div>
                    </div>

                </div> 
             </div>
            <div class="col-1-of-3">
                 <div class="card">
                    <!-- <div class="loader">
                        <i class="fas fa-spinner loader__spinner"></i>
                    </div>   --> 
                     <div class="card__top">
                        <div class="card__picture card__picture--6">
                            &nbsp;
                        </div>
                        <div class="card__temp">
                            <p class="temp-value"> ${kelvinToCelcius(locations[5].main.temp)} &#8451;</p>
                        </div>
                        <div class="card__icon">
                            <div  id="icon"><img id="${locations[5].weather[0].icon}" src="${imgUrl}${locations[5].weather[0].icon}.png" alt="Weather icon"></div>
                        </div>
                        <div class="card__city">
                            <p> <i class="fas fa-map-marker-alt"></i> ${locations[5].name}, ${locations[5].sys.country}</p>
                        </div>
                    </div>

                    <div class="card__bottom">
                        <ul class="card__bottom--weather">
                            <li class="description">
                                <p class="title">Description</p>
                                <p class="Description-status right">${locations[5].weather[0].description}</p>
                            </li>
                            <li class="temp-max">
                                <p class="title">Maximum Temperature</p>
                                <p class="temp-max-status right"> <i class="fas fa-temperature-high"></i>${kelvinToCelcius(locations[5].main.temp_max)} &#8451;</p>
                            </li>
                            <li class="temp-min">
                                <p class="title">Minimum Temperature</p>
                                <p class="temp-min-status right"> <i class="fas fa-temperature-low"></i>  ${kelvinToCelcius(locations[5].main.temp_min)} &#8451;</p>
                            </li>
                            <li class="wind-speed">
                                <p class="title">wind-speed</p>
                                <p class="wind-speed-status right"><i class="fas fa-wind"></i> ${locations[5].wind.deg == undefined ? '&nbsp;--': locations[5].wind.deg} m/s</p>
                            </li>
                            <li class="wind-direction">
                                <p class="title">wind-direction</p>
                                <p class="wind-direction-status right"> <i class="fas fa-compass"></i>${locations[5].wind.speed} &#176;</p>
                            </li>
                            <li class="pressure">
                                <p class="title">pressure</p>
                                <p class="pressure-status right"> ${locations[5].main.pressure} hPa</p>
                            </li>
                            <li class="humidity">
                                <p class="title">humidity</p>
                                <p class="humidity-status right"><i class="far fa-dewpoint"></i> ${locations[5].main.humidity} &#37;</p>
                            </li>
                        </ul>
                    </div>
                    <div class="card__forcast">
                        <div class="btn btn-forecast" data-forecast = "dubai">
                            <p>4 days weather forecast <i class="fas fa-link"></i></p>
                      </div>
                    </div>
                     
                </div> 
            </div>

        </div>
    `;
    domElements.cards.insertAdjacentHTML('beforeend', markup);
};



                    
                    
                    
