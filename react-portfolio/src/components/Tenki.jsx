import { useEffect, useState } from "react";
import axios from "axios";
import { Spotify } from "./Spotify";

export const Tenki = ({ tenki }) => {
  const componentName = () => tenkiList;
  const [tenkiList, settenkiList] = useState(null);

  useEffect(() => { axios.get('https://weather.tsukumijima.net/api/forecast/city/130010')
  .then((response) => settenkiList(response.data.forecasts[1].telop)) }, []);
  return (
      <Spotify 
        tenki = { tenki = componentName()}
      />
  );
};
