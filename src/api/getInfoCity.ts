import axios from 'axios'

type getInfoWeatherCityType = {
    city: string,
    setFullInfoWearterCity?: any,
}

export const getInfoWeatherCity = ({ city = 'tula', setFullInfoWearterCity }: getInfoWeatherCityType) => {
    const API_KEY = 'ad53780c52mshc3140737f5eaa8fp177cacjsna252166aad44'
    const API_HOST = 'weatherapi-com.p.rapidapi.com'
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {
            q: city
        },
        headers: {
            'X-RapidAPI-Key': `${API_KEY}`,
            'X-RapidAPI-Host': `${API_HOST}`
        }
    };

    if (city !== '') {
        try {
            axios.request(options).then((res) => setFullInfoWearterCity(res.data));
        } catch (error) {
            console.error(error);
        }
    } else {
        setFullInfoWearterCity('no mathes')
    }

}