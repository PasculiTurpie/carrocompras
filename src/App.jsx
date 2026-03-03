import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Automovil from "./components/Automovil";
import useCart from "./hooks/useCart";

function App() {
  const {
    data,
    cart,
    eliminarItem,
    handleClickAgregar,
    restarItem,
    sumarItem,
    emptyCart,
    totalItem
  } = useCart();

  return (
    <>
      <Header
        eliminarItem={eliminarItem}
        cart={cart}
        restarItem={restarItem}
        sumarItem={sumarItem}
        emptyCart={emptyCart}
        totalItem={totalItem}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Automóviles disponibles</h2>
        <div className="row mt-5">

        {data.map((auto) => (
          <Automovil
            key={auto.id}
            auto={auto}
            handleClickAgregar={handleClickAgregar}
          />
        ))}

        </div>

      </main>

      <footer className="mt-5 py-5">
        <div className="container-xl">
          <p className="text-center fs-6 mt-4 m-md-0 text-muted">
            © 2024 Super Carros, Inc
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
