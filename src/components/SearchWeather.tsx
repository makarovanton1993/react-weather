import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getInfoWeatherCity } from '../api/getInfoCity'
const WrapForm = styled.form`
`
const SeactInp = styled.input`
    width:300px;
    height:30px;
    border-radius:10px;
    padding:10px;
`

const SearchWeather = ({ handleSetCity }: any) => {
    return (
        <WrapForm onSubmit={(e) => { e.preventDefault() }}>
            <SeactInp type='text' onChange={(e) => handleSetCity(e.target.value)} placeholder='Введите город' />
        </WrapForm>
    )
}

export default SearchWeather