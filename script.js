const globalLink = "https://coronavirus-19-api.herokuapp.com/all";
const allCountriesLink = "https://coronavirus-19-api.herokuapp.com/countries";
// const singleCountryLink = `https://coronavirus-19-api.herokuapp.com/countries/${countryName}`;

const totalConfirmed = document.querySelector('.total-confirmed p');
const totalDeaths = document.querySelector('.total-deaths p');
const totalRecovered = document.querySelector('.total-recovered p');

fetch(globalLink)
    .then(response => response.json())
    .then(data => {
        totalConfirmed.innerText = `${data.cases}`;
        totalDeaths.innerText = `${data.deaths}`;
        totalRecovered.innerText = `${data.recovered}`;
    });


const listConfirmed = document.querySelector('.country');
const listDeaths = document.querySelector('.list-deaths');
const listRecovered = document.querySelector('.list-recovered');
let listConfirmedHTML = "";
let listDeathsHTML = "";
let listRecoveredHTML = "";
fetch(allCountriesLink)
    .then(response => response.json())
    .then(data => {

        data.forEach(country => {
            listConfirmedHTML += `
            <div class="country">
                        <span class="name">${country.country}</span>
                        <span class="number">${country.cases}</span>
                    </div>
            `;
            listDeathsHTML += `
            <div class="country">
                        <span class="name">${country.country}</span>
                        <span class="number">${country.deaths}</span>
                    </div>
            `;
            listRecoveredHTML += `
            <div class="country">
                        <span class="name">${country.country}</span>
                        <span class="number">${country.recovered}</span>
                    </div>
            `;
        });

        listConfirmed.innerHTML = listConfirmedHTML;
        listDeaths.innerHTML = listDeathsHTML;
        listRecovered.innerHTML = listRecoveredHTML;


    });