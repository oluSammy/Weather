import {domElements} from './base';

const year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const renderDate = (today)=>{
    const markup = `
    <p class="date">${today.getDate()} ${year[today.getMonth()]} ${today.getFullYear()}</p>
    `;

    domElements.date.insertAdjacentHTML('afterbegin', markup);
}