import Location from './models/Locations';
import * as locationView from './views/locationView';

/**
 * Today -date
 * default location object
 * Search field
 * Search result object
 */
const state = {};

//default locations on homepage
const defaultLocations = ['london', 'new york', 'lagos', 'paris', 'ibadan', 'dubai'];
let defaultLocationsObjects = [];

//create new instance for each location
  async function newInstance (locate){
      for(const item of locate){
          const newItem = new Location(item);
          await newItem.getResults(); 
        //   console.log(newItem.weather);
        defaultLocationsObjects.push(newItem.weather);
      }
      locationView.renderWeather(defaultLocationsObjects); 
    //  console.log(defaultLocationsObjects[1]);  
  };
  newInstance(defaultLocations);

