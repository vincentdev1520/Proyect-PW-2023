import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="a - Banner 02.png"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Camisa de vestir casual COOFANDY para hombre, camisa de trabajo vaquera de manga larga con botones"
            price={25.99}
            rating={5}
            image="Ropa 01.jpg"
          />
          <Product
            id="49538094"
            title="Burband 2021, pantalones vaqueros informales de algodón color negro, pantalones ceñidos elásticos ajustados, pantalones cónicos"
            price={35.20}
            rating={4}
            image="Ropa 02.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Vestidos de verano para mujer, cuello cuadrado, lazo en la espalda, manga farol, volantes, línea A, mini vestido informal"
            price={47.99}
            rating={3}
            image="Ropa 03.jpg"
          />
          <Product
            id="23445930"
            title="Pantalones de lápiz de cintura alta casuales para mujer con bolsillos con nudo de lazo para el trabajo"
            price={45.99}
            rating={5}
            image="Ropa 04.jpg"
          />
          <Product
            id="3254354345"
            title="Zapatos de running ASICS VERSABLAST para mujer"
            price={40.70}
            rating={4}
            image="Ropa 05 - V03.png"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="BCPOLO Chaqueta de béisbol Varsity Baseball"
            price={45.55}
            rating={4}
            image="Ropa 06.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
