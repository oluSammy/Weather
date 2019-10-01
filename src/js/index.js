import Location from './models/Locations';
import Search from './models/Search';
import * as locationView from './views/locationView';
import * as searchView from './views/searchView';
import * as dateView from './views/dateView';
import {domElements, renderSpinner, clearSpinner, renderSpinnerforecast, clearForecast} from './views/base';

/**
 * Today -date
 * default location object
 * Search field
 * Search result object
 */
const state = {
defaultLocationsObjects: [],
day1: {},
day2: {},
day3: {},
day4: {},
};

//default locations on homepage
const defaultLocations = ['london', 'new york', 'lagos', 'paris', 'ibadan', 'dubai'];

//Default Location Controller
  async function controlDefaultLocation (cities){
    renderSpinner(domElements.cards);
      for(const item of cities){
          const newItem = new Location(item);
          await newItem.getResults(); 
        
        state.defaultLocationsObjects.push(newItem.weather);
      }
      clearSpinner(domElements.cards); 
      locationView.renderWeather(state.defaultLocationsObjects); 
      
  };
  controlDefaultLocation(defaultLocations);

//Search Controller
const controlSearch = ()=>{
  const query = searchView.getInput();
  // alert(query);

  fuselage(query); 
};

const fuselage = async (query) =>{
  if(query){
    state.searchWeather = new Location(query);
    state.searchForecast = new Search(query);

    //Clear input
    searchView.clearInput();

    //Clear page
    searchView.clearPage();

    //render spinner
    searchView.minHieght();
    renderSpinnerforecast(domElements.forecast);

      try{
        await state.searchWeather.getResults();

        await state.searchForecast.getForecast();
        state.searchForecast.sortDays();

        state.day1.id = 1;
        state.day1.day = state.searchForecast.day1;

        state.day2.id = 2;
        state.day2.day = state.searchForecast.day2;

        state.day3.id = 3;
        state.day3.day = state.searchForecast.day3;

        state.day4.id = 4;
        state.day4.day = state.searchForecast.day4;

        window.state = state;

        clearSpinner(domElements.forecast); 
        searchView.renderLocation(state.day1.id, state.searchWeather, state.day1.day);
        document.querySelector('.forecast__cur-prev').style.visibility = 'hidden';
      }catch(error){
        alert(error);
        console.log(error);
      }

  }
};

dateView.renderDate(new Date());

(function() {
  for(const search of domElements.search ){

    search.addEventListener('submit', (e)=>{
      e.preventDefault();
      controlSearch();
    });
  }
}) ();
  

domElements.forecast.addEventListener('click', e=>{
  let id;
  let content = document.querySelector('.forecast__top');
  id = parseInt(content.dataset.id, 10);
  
  if (e.target.closest('.forecast__cur-next')){
    clearForecast();
    if(id == 1){
      searchView.renderNextDay(state.day2.id, state.day2.day);
      document.querySelector('.forecast__cur-prev').style.visibility = 'visible';
      
    }
    else if(id == 2){
      searchView.renderNextDay(state.day3.id, state.day3.day);
    }
    else if(id == 3){
      searchView.renderNextDay(state.day4.id, state.day4.day);
      document.querySelector('.forecast__cur-next').style.visibility = 'hidden';
    }
    
  }
  else if(e.target.closest('.forecast__cur-prev')){
    clearForecast();
    if(id == 2){
      searchView.renderNextDay(state.day1.id, state.day1.day);
      document.querySelector('.forecast__cur-prev').style.visibility = 'hidden';
    }
    else if(id == 3){
      searchView.renderNextDay(state.day2.id, state.day2.day);
      document.querySelector('.forecast__cur-next').style.visibility = 'visible';
    }
    else if(id == 4){
      searchView.renderNextDay(state.day3.id, state.day3.day);
      document.querySelector('.forecast__cur-next').style.visibility = 'visible';
    }
  }
  
});

domElements.cards.addEventListener('click', e =>{
  // const query;
  console.log(e.target);
  if(e.target.closest('.btn-forecast')){
    let query = e.target.closest('.btn-forecast').dataset.forecast;

    fuselage(query);

  }
});




