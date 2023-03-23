import { Button, City, CurrentTemperature, DetailLabel, DetailValue, ErrorMessage, MainBlock, SearchForm, SearchInput, Time, TitleBlock, Weather, WeatherBlock, WeatherContainer, WeatherDescription, WeatherDetail, WeatherDetails, WeatherIcon, WeatherType, } from './Style';
import React, { useState } from 'react';
import axios from 'axios';

interface WeatherData {
  city: string;
  country: string;
  weather: {
    type: string;
    description: string;
    icon: string;
  };
  temperature: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
  pressure: number;
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  sunrise: string;
  sunset: string;
}


function App() {

  // declaring state variables using react hooks
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const APP_ID:string = 'f45e296882f195aef418ec372e905f58'; //openweather API key

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APP_ID}&units=metric`
      );
      console.log(response); // API data in console for developers
      setWeatherData({
        city: response.data.name,
        country: response.data.sys.country,
        weather: {
          type: response.data.weather[0].main,        //one word description of weather
          description: response.data.weather[0].description, // multiword description of weather
          icon: response.data.weather[0].icon,
        },
        temperature: response.data.main.temp,
        temp_max: response.data.main.temp_max,
        temp_min: response.data.main.temp_min,
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure,
        visibility: response.data.visibility / 1000,
        wind: {
          speed: response.data.wind.speed,
          deg: response.data.wind.deg,
        },
        sunrise: new Date(response.data.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }),
        sunset: new Date(response.data.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }),
      });
      setLoading(false);
      if(error) setError('');
    } catch (error) {
      setWeatherData(null);
      setError('Unable to fetch weather data');
      setLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {    
    event.preventDefault();
    fetchWeatherData();   //calling openweatherapi on submit event in the app, by default no data is populated till submit is triggered
  };

  return (
    <MainBlock>
      <TitleBlock>Weather App</TitleBlock>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            placeholder="Enter city"
            size={20}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <SearchInput
            type="text"
            placeholder="Enter country"
            size={20}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Get Weather'}
          </Button>
        </SearchForm>
      {weatherData && (<div>
        <WeatherBlock>
          <City>
            {weatherData.city} , {weatherData.country}. Weather
          </City>
          <Time>
            As of {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}
          </Time>
          <Weather>
            <CurrentTemperature>{weatherData.temperature.toFixed()}°C</CurrentTemperature>
            <WeatherContainer>
              <WeatherIcon src={`http://openweathermap.org/img/w/${weatherData.weather.icon}.png`} />
              <WeatherType>{weatherData.weather.type}</WeatherType>
            </WeatherContainer>
          </Weather>
          <WeatherDescription>{weatherData.weather.description}</WeatherDescription>
        </WeatherBlock>
          <WeatherDetails>
            <WeatherDetail>
              <DetailLabel>Max/Min Temp:</DetailLabel>{' '}
              <DetailValue>{weatherData.temp_max.toFixed()}°C / {weatherData.temp_min.toFixed()}°C</DetailValue>
            </WeatherDetail>
            <WeatherDetail>
              <DetailLabel>Humidity:</DetailLabel>{' '}
              <DetailValue>{weatherData.humidity}%</DetailValue>
            </WeatherDetail>
            <WeatherDetail>
              <DetailLabel>Pressure:</DetailLabel>{' '}
              <DetailValue>{weatherData.pressure} hPa</DetailValue>
            </WeatherDetail>
            <WeatherDetail>
              <DetailLabel>Visibility:</DetailLabel>{' '}
              <DetailValue>{weatherData.visibility} km</DetailValue>
            </WeatherDetail>
            <WeatherDetail>
              <DetailLabel>Wind Speed:</DetailLabel>{' '}
              <DetailValue>{weatherData.wind.speed} km/hr</DetailValue>
            </WeatherDetail>
            <WeatherDetail>
              <DetailLabel>Wind Direction:</DetailLabel>{' '}
              <DetailValue>{weatherData.wind.deg}° deg</DetailValue>
            </WeatherDetail>
            <WeatherDetail>
              <DetailLabel>Sunrise:</DetailLabel>{' '}
              <DetailValue>{weatherData.sunrise}</DetailValue>
            </WeatherDetail>
            <WeatherDetail>
              <DetailLabel>Sunset:</DetailLabel>{' '}
              <DetailValue>{weatherData.sunset}</DetailValue>
            </WeatherDetail>
          </WeatherDetails>
      </div>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage> // display error message if the api is returning error
      }  
    </MainBlock>
  );
}

export default App;
