import React, {useState, useEffect} from 'react'; 
import './App.css';
import { FormControl, MenuItem, Select, Card, CardContent} from '@mui/material';
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import './Table.css';
import {prettyPrintStat, sortData} from "./util";
import LineGraph from './LineGraph';
import "leaflet/dist/leaflet.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData]= useState([]);
  const [mapCenter, setMapCenter]= useState({lat: 34.80746, lng: -40.4796});
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(()=> {
    fetch ("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then((data)=> {
      setCountryInfo(data);
    });
  }, []);

  //once APP loads the useEffect gets triggered once.
  useEffect(()=> {
    //async -> send request & wait for it
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data)=> {
        //restructure json tree-> map essentially loops through the array and returns a modified array
        const countries = data.map((country)=> ({
          name: country.country, //United States, Nigeria
          value: country.countryInfo.iso2, //UK, NG, FR
        }));

        const sortedData = sortData(data);
        setTableData(sortedData);
        setMapCountries(data);
        setCountries(countries);
      });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value; 
    const url = 
    countryCode === "worldwide" 
    ? "https://disease.sh/v3/covid-19/all"
    : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
    .then((response) => response.json())
    .then((data)=> {
      setCountry(countryCode); //update input field
      setCountryInfo(data); //get all data
      setMapCenter([data.countryInfo.lat, data.countryInfo.lng]);
      setMapZoom(4);
    });
  };
 
  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            {/* {loop through all the countries and a show a drop down list of the options} */}
            <Select variant="outlined" value={country} onChange={onCountryChange}>
                <MenuItem value="worldwide">Worldwide</MenuItem>
              {
                //map essentially loops through the array
                countries.map((country)=> (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))
              }            
            </Select>
          </FormControl>
        </div>
        <div className="app__stats">
            <InfoBox 
            isRed
            active={casesType === "cases"}
            onClick={(e)=> setCasesType('cases')}
              title="Coronavirus Cases" 
              total={prettyPrintStat(countryInfo.todayCases)} 
              cases={prettyPrintStat(countryInfo.cases)}/>

            <InfoBox 
            active={casesType === "recovered"}
            onClick={(e) => setCasesType('recovered')}
              title="Recovered" 
              total={prettyPrintStat(countryInfo.todayRecovered)} 
              cases={prettyPrintStat(countryInfo.recovered)}/>

            <InfoBox 
            isRed
            active={casesType === "deaths"}
            onClick={(e)=> setCasesType('deaths')}
              title="Deaths" 
              total={prettyPrintStat(countryInfo.todayDeaths)} 
              cases={prettyPrintStat(countryInfo.deaths)}/>
          </div>
        <Map 
        casesType={casesType}
        zoom= {mapZoom}
        center={mapCenter}
        countries={mapCountries}
        />
    </div>
    <Card className="app__right">
      <CardContent>
        <h3>Live Cases by Country</h3>
        <Table countries={tableData}/>
        <h3 className="app__graphTitle ">Worldwide new {casesType}</h3>
        <LineGraph className="app__graph" casesType={casesType}/>
        <div className="text-center m-3 py-2 border rounded-pill">
          <h3 className="text-dark" style={{fontFamily:'Ephesis'}}>Created By Temisan. <a
          class='social-icon-link-github'
          href="https://www.facebook.com/temy.momodu"
          target='_blank'
          rel="noopener"
          aria-label='Facebook'  
        >
          <i class='fab fa-facebook'/>
        </a></h3>
        </div>
      </CardContent>
    </Card> 
    </div>
  );
} 

export default App;
