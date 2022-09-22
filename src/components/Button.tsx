import PropTypes, { InferProps } from "prop-types";

function Button({
  tipo,
  accion,
}: InferProps<typeof Button.propTypes>): JSX.Element {
  return <button onClick={accion}>{tipo}</button>;
}

Button.propTypes = {
  tipo: PropTypes.string.isRequired,
  accion: PropTypes.func.isRequired,
};

export default Button;
