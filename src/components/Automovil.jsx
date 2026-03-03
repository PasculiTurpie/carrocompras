import React from "react";

const Automovil = ({auto, handleClickAgregar}) => {

  return (
    <>
      <div className="col-md-8 col-lg-4 my-4 row align-items-center mx-auto">
        <div className="col-10 row align-items-center mx-auto">
          <img
            className="img-fluid"
            src={`./img/${auto.image}.jpg`}
            alt="imagen automóvil"
          />
          <h3 className="text-black fs-4 fw-bold text-uppercase">
            {auto.name}
          </h3>
          <p>{auto.brand}</p>
          <p>{auto.topSpeed}</p>
          <p>{auto.year}</p>
          <p className="fw-black text-primary fs-3">U$S - {auto?.price?.toLocaleString()}</p>
          <button onClick={() => handleClickAgregar(auto)} type="button" className="btn btn-dark w-100">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default Automovil;
