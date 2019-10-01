export const domElements = {
    cards: document.querySelector('.section-cards'),
    search: document.querySelectorAll('.search'),
    loaders: document.querySelectorAll('.loaders'),
    searchBtn: document.querySelector('.btn-search'),
    searchQuery: document.querySelector('.search-field'),
    forecast: document.querySelector('.section-forecast'),
    date: document.querySelector('.header__date'),
    searchQuery2: document.querySelector('.search-field2')
}

export const renderSpinner = parent=>{
    const markup = `
    <div class="row">
    <div class="col-1-of-3">
         <div class="card">
            <div class="loader">
                <i class="fas fa-spinner loader__spinner"></i>
            </div> 
         </div>  
    </div>
    <div class="col-1-of-3">
         <div class="card">
         <div class="loader">
            <i class="fas fa-spinner loader__spinner"></i>
         </div> 
            
        </div> 
     </div>
    <div class="col-1-of-3">
         <div class="card">
            <div class="loader">
                <i class="fas fa-spinner loader__spinner"></i>
            </div>   
             
             
        </div> 
    </div>

</div>

<div class="row">
    <div class="col-1-of-3">
         <div class="card">
            <div class="loader">
                <i class="fas fa-spinner loader__spinner"></i>
            </div> 
         </div>  
    </div>
    <div class="col-1-of-3">
         <div class="card">
         <div class="loader">
            <i class="fas fa-spinner loader__spinner"></i>
         </div> 
            
        </div> 
     </div>
    <div class="col-1-of-3">
         <div class="card">
            <div class="loader">
                <i class="fas fa-spinner loader__spinner"></i>
            </div>   
             
             
        </div> 
    </div>

</div>
    `;
    parent.insertAdjacentHTML('beforeend', markup);
};

export const renderSpinnerforecast = (parent)=>{
    const markup =
    `<div class="row">
            <div class="col-1-of-3">
                 <div class="card">
                    <h3 class="current">Current Weather</h3>
                    
                    <div class="loader">
                        <i class="fas fa-spinner loader__spinner"></i>
                    </div>

                </div> 
            </div>
            <div class="new-col-2-of-3 new-forecast">
                <div class="forecast">
                    <div class="forecast__header current">Weather Forecast</div>
                    <div class="loader">
                        <i class="fas fa-spinner loader__spinner"></i>
                    </div>  
                </div>


            </div>
        </div>`
        parent.insertAdjacentHTML('beforeend', markup);
};

export const clearSpinner = parent =>{
    // const parent = domElements.cards;

    if(domElements.loaders)
        parent.innerHTML = '';
};

export const clearForecast = () =>{
    document.querySelector('.forecast__content').innerHTML = '';
};