import React from "react";
import "../components/admin.css";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="card-question card-mod">
      <Link to="/admin/agregarcategoria" className="btn btn-mod">
        Agregar categoría
      </Link>
      <Link className="btn btn-mod"> Agregar pregunta</Link>
    </div>
  );
};

export default Admin;
