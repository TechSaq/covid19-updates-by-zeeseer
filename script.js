const globalLink = "https://coronavirus-19-api.herokuapp.com/all";
const allCountriesLink = "https://coronavirus-19-api.herokuapp.com/countries";


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


const listConfirmed = document.querySelector('.list-confirmed');
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


const search = document.querySelector('.search');
const values = document.querySelector('.data .values');
const countryName = document.querySelector('.country-wrapper .name');
let countryHTML = "";
search.addEventListener('search', () => {
    searchCountry = search.value;
    fetch(`https://coronavirus-19-api.herokuapp.com/countries/${searchCountry}`)
        .then(response => response.json())
        .then(data => {
            countryName.innerText = `${data.country}`;
            countryHTML = `<div>${data.cases}</div>
                    <div>${data.deaths}</div>
                    <div>${data.recovered}</div>
                    <div>${data.active}</div>
                    <div>${data.firstCase}</div>
            `;
            values.innerHTML = countryHTML;
        });
    search.value = "";
    dataContainer.classList.add('hide');

});

const header = document.querySelector('.brand a');
const dataContainer = document.querySelector('.data-container');
const globalData = document.querySelector('.homepage a');

header.addEventListener('click', () => {
    dataContainer.classList.remove('hide');
});

globalData.addEventListener('click', () => {
    dataContainer.classList.remove('hide');
});