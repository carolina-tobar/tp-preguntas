import React, { useState, useEffect } from "react";
import axios from "axios";
import CardHome from "../components/CardHome";
import { Link } from "react-router-dom";

const Home = () => {
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
  return (
    <div className="card-container">
      {categorias &&
        categorias.map((item) => {
          return (
            <Link to={`/questions/${item.id}`} key={`cardHome${item.id}`}>
              <CardHome
                img={item.img}
                tema={item.name}
                preguntas={item.questions}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default Home;
