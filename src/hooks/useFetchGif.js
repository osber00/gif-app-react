import {useState, useEffect} from 'react'
import {busquedaAPI} from '../helpers/busquedaAPI'

export const useFetchGif = (categoria) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const obtenerGifs = async () => {
    const resultado = await busquedaAPI(categoria);
    setGifs(resultado);
    setIsLoading(false)
  };

  useEffect(() => {
    obtenerGifs();
  }, []);

  return {
    gifs,
    isLoading,
  };
}
