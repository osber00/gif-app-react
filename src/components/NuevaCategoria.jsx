import { useState } from "react";
import PropTypes from 'prop-types'

const NuevaCategoria = ({ onGuardarCategoria }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const categoria = inputValue.trim();
    if (categoria.length <= 1) return;
    onGuardarCategoria(categoria);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Nueva categoría'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

NuevaCategoria.propTypes = {
  onGuardarCategoria: PropTypes.func.isRequired
}

export default NuevaCategoria;
