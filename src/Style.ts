import styled from "styled-components";

export const MainBlock = styled.div`
max-width: 768px; 
margin: 4rem auto 2rem auto; 
padding: 1.5rem; 
border: 2px dashed #000; 
border-radius: 1rem; 
background-color: #f9f9f9; 
color: #000`;

export const TitleBlock = styled.h1`
  font-family: 'Libre Baskerville', serif;
  font-weight: bold;
  font-size: 4rem;  
  text-align: center;

`;

export const SearchBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border-style: none;
  border-bottom: 1.5px dashed #000;
  margin-right: 0.5rem;

  &:focus {
    outline: none;
    }
`;

export const Button = styled.button`
  background-color: #0F53BA;
  color: #fff;
  border: 1px solid #000;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const WeatherBlock = styled.div`
display:flex;
flex-direction: column;
border: 2px solid #333;
border-radius: 1rem;
margin: 2rem;
align-items: center;
justiify-content: center;`;

export const City = styled.h1`
  margin-bottom: auto;
  margin-top: auto;
  margin-right: auto;
  padding: 0.5rem 1rem 0rem 1rem;
`;

export const Time = styled.p`
font-size: 1rem;
font-weight: bold;
margin-bottom: auto;
margin-top:auto;
margin-right: auto;
color: #777B7E;
padding: 0rem 1rem 0rem 1rem;
`;

export const Weather = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;


export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center`;

export const WeatherDescription = styled.h3`
  padding: 0rem 1rem 0rem 1rem;
  margin-bottom: 0.5rem;
  margin-top:auto;
  margin-right: auto;
`;

export const CurrentTemperature = styled.span`
  font-size: 6rem;
  font-weight: bold;
  margin-right: 1rem;
  letter-spacing: -0.5rem;
  padding: 0.5rem;
`;

export const WeatherIcon = styled.img`
  width: 5rem;
  height: 5rem;
  margin: auto;
`;

export const WeatherType = styled.span`
  margin: auto;
  font-size: 1rem;
  font-weight: bold;
`;

export const WeatherDetails = styled.div`
padding: 1.5rem;
margin-bottom: 2rem;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 2rem`;

export const WeatherDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  border-bottom: 1.5px dashed #000;
  padding-bottom: 0.5rem;`;

export const DetailLabel = styled.span`font-weight: bold;
font-size: 1rem;`;

export const DetailValue = styled.span``;

export const ErrorMessage = styled.div`
text-align: center;
color: red;
margin-top: 1rem;
margin-bottom: auto;`;