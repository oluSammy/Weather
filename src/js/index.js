import Location from './models/Locations';
import Search from './models/Search';
import * as locationView from './views/locationView';
import * as searchView from './views/searchView';
import * as dateView from './views/dateView';
import {domElements, renderSpinner, clearSpinner, renderSpinnerforecast} from './views/base';

/**
 * Today -date
 * default location object
 * Search field
 * Search result object
 */
const state = {
defaultLocationsObjects: []
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
const controlSearch = async ()=>{
  const query = searchView.getInput();
  // alert(query);

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
      }catch(error){
        alert(error);
      }

  }
};

dateView.renderDate(new Date());

domElements.search.addEventListener('submit', (e)=>{
  e.preventDefault();
  controlSearch();
})




