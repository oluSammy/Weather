import {domElements} from './base';

export const getInput = ()=> domElements.searchQuery.value;
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
export const minHieght = ()=>{domElements.cards.style.minHeight ='0px'; }
