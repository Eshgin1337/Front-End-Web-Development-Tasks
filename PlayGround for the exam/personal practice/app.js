let countries = [
    {
        name: "Azerbaijan",
        population: 9100000000,
        cities: ['Baku', 'Sumgait', 'Sheki', 'Ganja', 'Shusha']
    },
    {
        name: "Turkey",
        population: 81000000000,
        cities: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Trabzon']
    },
    {
        name: "Uzbekistan",
        population: 2200000000,
        cities: ['Bukhara', 'Samarkant', 'Tashkent', 'Khiva', 'Andijan']
    },
    {
        name: "Pakistan",
        population: 5000000000,
        cities: ['Pishavar', 'Islamabad', 'Lahor', 'Karachi', 'Pheysalabad']
    }
  ];

// countries.forEach(function (country) {
//     console.warn(country.name);
//     console.log(country.cities.length, ' cities');
//     country.cities.forEach(function (city) {
//         console.log(city);
//     })
// })

const filteredCountries = countries
    .map(function (country) {
        return country.cities;
    })
    .flat()
    .filter(function (city) {
        return city.length == 5;
    });


// const filteredCountries = countries
//     .filter(function (country) {
//         return country.cities.length == 5;
//     })
//     .flat()
//     .map(function (filtered) {
//         return filtered.cities;
//     });

    console.log(filteredCountries);
