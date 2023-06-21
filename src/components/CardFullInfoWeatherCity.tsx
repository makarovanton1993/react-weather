import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    
`
const NameCity = styled.h3`
    font-size:20px;

`
const ContainerWeather = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
`
const ContainerWeatherLeft = styled.div``
const ContainerWeatherRight = styled.div``
const ImgWeather = styled.img``
const СonditionWeather = styled.div``
const TempBlock = styled.div`
    font-size:20px;
`

type CardFullInfoWeatherCityTypes = {
    current?: object,
    location?: object
}
type CardFullInfoWeatherCityTypesCurrent = {
    condition?: CardFullInfoWeatherCityTypesCurrentCondition,
    temp_c?: number
}
type CardFullInfoWeatherCityTypesLocation = {
    name?: string,
    country?: string
}
type CardFullInfoWeatherCityTypesCurrentCondition = {
    icon?: string,
    text?: string
}
const CardFullInfoWeatherCity = ({ current = {}, location = {} }: CardFullInfoWeatherCityTypes) => {

    const { condition, temp_c }: CardFullInfoWeatherCityTypesCurrent = current;
    const { name, country }: CardFullInfoWeatherCityTypesLocation = location;
    return (
        <Wrap>
            <NameCity>{country && name ? `${country}, ${name}` : 'Не найдено'}</NameCity>
            <ContainerWeather>
                <ContainerWeatherLeft>
                    <ImgWeather src={condition?.icon} />
                    <СonditionWeather>{condition?.text}</СonditionWeather>
                </ContainerWeatherLeft>
                <ContainerWeatherRight>
                    <TempBlock>{temp_c && temp_c + 'C'} </TempBlock>
                </ContainerWeatherRight>
            </ContainerWeather>
        </Wrap>
    )
}

export default CardFullInfoWeatherCity