import PropTypes, { InferProps } from "prop-types";

function Saludo({
    nombre, edad,
}: InferProps<typeof Saludo.propTypes>) {
    return (
        <div>
            Hola!soy {nombre} <br /> y tengo {edad} años
        </div>
    );
}

Saludo.propTypes = {
  nombre: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired,
};

Saludo.defaultProps = {
    nombre: '',
    edad: 18
  };

export default Saludo;
