import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Movies from "../../pages/Movies/Movies";
// import Movies from "../Movies/Movies";
import "./Home.css";

export const Home = () => {
  let usuario = useRef(null);
  let password = useRef(null);
  const [user, setUser] = useState(false);

  const usuarios = [
    {
      nombre: "Lucas Giordano",
      password: "lala",
    },
    {
      nombre: "Ines Piazzalonga",
      password: "hola",
    },
  ];

  function logIn() {
    let usuarioIngresado = usuarios.find(
      (usuarioI) => usuarioI.nombre === usuario.current.value
    );

    let registrado = usuarios.includes(usuarioIngresado);

    if (registrado) {
      if (password.current.value === usuarioIngresado.password) {
        alert("hola vieji");
        setUser(true);
      } else if (password.current.value !== usuarioIngresado.password) {
        alert("contraseña incorrecta gil");
        console.log(usuarioIngresado);
      }
    } else {
      alert("registrate y paga raton");
    }
  }

  return !user ? (
    <div className="divHome">
      <h2>Inicie sesión</h2>
      <input type="text" placeholder="Usuario" name="usuario" ref={usuario} />
      <input
        type="password"
        placeholder="Contraseña"
        name="password"
        ref={password}
      />
      <input type="submit" value={"Ingresar"} onClick={logIn} />
    </div>
  ) : (
    <Link to={"/movies"}>
      <Movies />
    </Link>
  );
};
