import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBackListener } from "../../hooks/useBackListener";

// import logo from './logo.svg';
import "./App.css";
// import Saludo from './components/Saludo';
import Counter from "../Counter";
import Button from "../Button";
import { Search } from "../test";
import NotFound from '../NotFound'

function App() {
  // const navigate = useNavigate();
  // const [edad, setEdad] = useState(15);
  const [count, setCount] = useState(10);
  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  // useBackListener(({ location }: any) => {
  //   console.log("Navigated Back", { location });
  //   // navigate("/", { replace: true });
  // });

  return (
    <div className="App">
      {/* <Counter numero={count} />
      <Button tipo="suma" accion={() => setCount(count + 1)} />
      <Button tipo="resta" accion={() => setCount(count - 1)} /> */}

      {/* <Button tipo='suma' accion={sumar} />
      <Button tipo='resta' accion={restar} /> */}
      {/* <Search /> */}
<NotFound />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <Saludo nombre={edad > 18 ? 'Luis' : 'Abdel'} edad={edad} />
      <button onClick={() => {
        setEdad(edad + 1)
        console.log(edad)
      }}>click</button> */}
    </div>
  );
}

export default App;
