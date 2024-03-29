const countries = [
  { name: 'Afghanistan', population: 27657145 },
  { name: 'Åland Islands', population: 28875 },
  { name: 'Albania', population: 2886026 },
  { name: 'Algeria', population: 40400000 },
  { name: 'American Samoa', population: 57100 },
  { name: 'Andorra', population: 78014 },
  { name: 'Angola', population: 25868000 },
  { name: 'Anguilla', population: 13452 },
  { name: 'Antarctica', population: 1000 },
  { name: 'Antigua and Barbuda', population: 86295 },
  { name: 'Argentina', population: 43590400 },
  { name: 'Armenia', population: 2994400 },
  { name: 'Aruba', population: 107394 },
  { name: 'Australia', population: 24117360 },
  { name: 'Austria', population: 8725931 },
  { name: 'Azerbaijan', population: 9730500 },
  { name: 'Bahamas', population: 378040 },
  { name: 'Bahrain', population: 1404900 },
  { name: 'Bangladesh', population: 161006790 },
  { name: 'Barbados', population: 285000 },
  { name: 'Belarus', population: 9498700 },
  { name: 'Belgium', population: 11319511 },
  { name: 'Belize', population: 370300 },
  { name: 'Benin', population: 10653654 },
  { name: 'Bermuda', population: 61954 },
  { name: 'Bhutan', population: 775620 },
  { name: 'Bolivia (Plurinational State of)', population: 10985059 },
  { name: 'Bonaire, Sint Eustatius and Saba', population: 17408 },
  { name: 'Bosnia and Herzegovina', population: 3531159 },
  { name: 'Botswana', population: 2141206 },
  { name: 'Bouvet Island', population: 0 },
  { name: 'Brazil', population: 206135893 },
  { name: 'British Indian Ocean Territory', population: 3000 },
  { name: 'United States Minor Outlying Islands', population: 300 },
  { name: 'Virgin Islands (British)', population: 28514 },
  { name: 'Virgin Islands (U.S.)', population: 114743 },
  { name: 'Brunei Darussalam', population: 411900 },
  { name: 'Bulgaria', population: 7153784 },
  { name: 'Burkina Faso', population: 19034397 },
  { name: 'Burundi', population: 10114505 },
  { name: 'Cambodia', population: 15626444 },
  { name: 'Cameroon', population: 22709892 },
  { name: 'Canada', population: 36155487 },
  { name: 'Cabo Verde', population: 531239 },
  { name: 'Cayman Islands', population: 58238 },
  { name: 'Central African Republic', population: 4998000 },
  { name: 'Chad', population: 14497000 },
  { name: 'Chile', population: 18191900 },
  { name: 'China', population: 1377422166 },
  { name: 'Christmas Island', population: 2072 }
]


//CREATE FUNCTIONS TO RETURN MOST POPULATED COUNTRIES
// MAKE FUNCTION, TWO ARG: COUNTRIES ARRAY, NUMBER OF COUNTRIES TO BE RETURNED


const sortTheCountries = (countries,numberOfCountries) => {
  const sortedByPopulation = countries.sort((x, y) => { return (y.population) - (x.population) });

  const resultCountries = sortedByPopulation.reduce( (result, country) => {
    if(result.length<numberOfCountries)
      result.push(country)
    return result;
  }, [] );

  return resultCountries;
}

///console.log(countries);
console.log(sortTheCountries(countries, 2))
// const result = sortTheCountries(countries, 2);

// console.log(result);

// Output: 
// {country: 'China', population: 1377422166},
// {country: 'India', population: 1295210000},
