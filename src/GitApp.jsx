import { useState } from "react";
import {NuevaCategoria, GridGif} from './components'


export const GitApp = () => {
  const [categorias, setCategorias] = useState(['One punch']);

  const onGuardarCategoria = (nuevaCategoria) => {
    if (categorias.includes(nuevaCategoria)) return;
    setCategorias([nuevaCategoria, ...categorias]);
  };

  return (
    <>
      <h3>Categorías</h3>
      <NuevaCategoria onGuardarCategoria={onGuardarCategoria} />
      <ul>
        {categorias.map((item) => (
          <GridGif key={item} categoria={item}/>
        ))}
      </ul>
    </>
  );
}
