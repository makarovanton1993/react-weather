
import { useCallback, useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';
import debounce from 'lodash.debounce'
import SearchWeather from './components/SearchWeather';
import CardFullInfoWeatherCity from './components/CardFullInfoWeatherCity';
import { getInfoWeatherCity } from './api/getInfoCity';
import styled from 'styled-components';
const Wrap = styled.div`
  background-color:#9ac3ec;
  width:400px;
  height:300px;
  padding:40px;
  border-radius:10px;
`

function App() {
  const [fullInfoWearterCity, setFullInfoWearterCity] = useState({});
  const [city, setCity] = useState('tula');

  useEffect(() => {
    getInfoWeatherCity({ city, setFullInfoWearterCity })
  }, [city])

  const handleSetCity = (data: string): void => {
    setCity(data);
  }
  const debounceSearchWeather = useCallback(debounce(handleSetCity, 300), []);

  return (
    <Wrap>
      <SearchWeather handleSetCity={debounceSearchWeather} />
      <CardFullInfoWeatherCity {...fullInfoWearterCity} />
    </Wrap>
  )
}

export default App
