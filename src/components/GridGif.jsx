import PropTypes from 'prop-types'
import { GifItem } from "./GifItem";
import {useFetchGif} from '../hooks/useFetchGif'

export const GridGif = ({categoria}) => {
  const { gifs, isLoading } = useFetchGif(categoria);

  return (
    <div>
      <h4>{categoria}</h4>
      {isLoading && <h3>Cargando...</h3>}
      <div className='card-grid'>
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </div>
  );
}

GridGif.propTypes = {
  categoria : PropTypes.string.isRequired
}
