'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const key = process.env.NEXT_PUBLIC_WEATHER_API;
const q = 'Budapest';
const days = 7;

async function getWeather() {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${q}&days=${days}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
    };
  };
}

export default function Weather() {
  const [forecast, setForecast] = useState<ForecastDay[]>([]);

  useEffect(() => {
    getWeather()
      .then((res) => {
        if (res) {
          setForecast(res.data.forecast.forecastday);
        }
      })
      .catch((err) => err);
  }, []);

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl p-4 m-4 font-bold text-center border border-bgSecondary rounded-lg bg-bgSecondary'>
        Weather in {q}
      </h1>
      <div className='overflow-x-auto whitespace-nowrap p-4'>
        <div className='flex space-x-8 justify-center'>
          {forecast.map((day) => (
            <Card key={day.date} className='min-w-[250px] p-4 shadow-md border rounded-lg text-center'>
              <CardHeader>
                <CardTitle className='text-lg font-bold'>{day.date}</CardTitle>
              </CardHeader>
              <CardContent className='text-center'>
                <p>{day.day.condition.text}</p>
                <p>Max: {day.day.maxtemp_c}°C</p>
                <p>Min: {day.day.mintemp_c}°C</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}