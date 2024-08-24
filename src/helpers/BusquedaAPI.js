export const busquedaAPI = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=2luNjAulMlmq1r4T2uSC7f5S1QHuSKpD&q=${categoria}&limit=5`;
  const peticion = await fetch(url);
  const { data } = await peticion.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized.url,
  }));
  return gifs;
};