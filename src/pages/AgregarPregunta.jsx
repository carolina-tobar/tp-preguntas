import React, { useState, useEffect } from "react";
import axios from "axios";

const AgregarPregunta = () => {
  const [form, setForm] = useState({});
  const [category, setCategory] = useState(null);
  const [categorias, setCategorias] = useState(null);
  useEffect(() => {
    axios
      .get("https://5f280966f5d27e001612e9e3.mockapi.io/categories")
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const agregarPreguntas = () => {
    axios
      .post(
        `https://5f280966f5d27e001612e9e3.mockapi.io/categories/${category}/questions`,
        form
      )
      .then((response) => {
        console.log(response.data);
      });
  };
  console.log({ category });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  const handleOnChangeOption = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, options: { ...form.options, [name]: value } });
  };

  return (
    <div className="card-question ">
      <div class="form-group">
        <label
          className="question-subtitle"
          HTMLfor="exampleFormControlSelect1"
        >
          Categoría
        </label>
        <select
          className=" form-control question-subtitle"
          id="exampleFormControlSelect1"
          onChange={(event) => setCategory(event.target.value)}
        >
          {categorias &&
            categorias.map((categoria) => {
              return (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.id}-{categoria.name}
                </option>
              );
            })}
        </select>
      </div>
      <div className="form-group">
        <label className="question-subtitle" htmlFor="exampleFormControlInput1">
          Pregunta
        </label>
        <input
          onChange={handleOnChange}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Agregar pregunta"
          name="question"
        />
      </div>
      <h1 className="question-subtitle">Respuestas</h1>
      <div className="form-group">
        <label className="question-subtitle" htmlFor="exampleFormControlInput2">
          Opcion A
        </label>
        <input
          onChange={handleOnChangeOption}
          type="text"
          className="form-control"
          id="optionA"
          placeholder="Agregar respuesta"
          name="A"
        />
      </div>
      <div className="form-group">
        <label className="question-subtitle" htmlFor="exampleFormControlInput2">
          Opcion B
        </label>
        <input
          onChange={handleOnChangeOption}
          type="text"
          className="form-control"
          id="optionB"
          placeholder="Agregar respuesta"
          name="B"
        />
      </div>
      <div className="form-group">
        <label className="question-subtitle" htmlFor="exampleFormControlInput2">
          Opcion C
        </label>
        <input
          onChange={handleOnChangeOption}
          type="text"
          className="form-control"
          id="optionC"
          placeholder="Agregar respuesta"
          name="C"
        />
      </div>
      <div className="form-group">
        <label className="question-subtitle" htmlFor="exampleFormControlInput2">
          Opcion D
        </label>
        <input
          onChange={handleOnChangeOption}
          type="text"
          className="form-control"
          id="optionD"
          placeholder="Agregar respuesta"
          name="D"
        />
      </div>
      <div className="form-group">
        <label className="question-subtitle" htmlFor="exampleFormControlInput2">
          Respuesta correcta
        </label>
        <input
          onChange={handleOnChange}
          type="text"
          className="form-control"
          id="answer"
          placeholder="Indica la respuesta correcta"
          name="answer"
        />
      </div>
      <button onClick={agregarPreguntas} class="btn">
        Submit
      </button>
    </div>
  );
};

export default AgregarPregunta;
