import React, { useState } from "react";
import Axios from "axios";

const AgregarCategoria = () => {
  const [form, setForm] = useState({ questions: 5 });
  // axios .post (url,data que quiero mandar)
  const agregarCategoria = () => {
    Axios.post(
      "https://5f280966f5d27e001612e9e3.mockapi.io/categories",
      form
    ).then((response) => {
      console.log(response.data);
    });
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="card-question card-mod">
      <div className="form-group">
        <label htmlFor="exampleFormControlInput1">Categoría</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Nombre de la categoría"
          name="name"
          onChange={handleOnChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlInput2">Url imagen</label>
        <input
          type="url"
          className="form-control"
          id="InputImagen"
          placeholder="Agregar imagen"
          name="img"
          onChange={handleOnChange}
        />
      </div>
      <button class="btn" onClick={agregarCategoria}>
        Submit
      </button>
    </div>
  );
};

export default AgregarCategoria;
