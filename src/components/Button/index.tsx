import PropTypes, { InferProps } from "prop-types";

import style from './Button.module.scss'

function Button({
  tipo,
  accion,
}: InferProps<typeof Button.propTypes>): JSX.Element {
  return <button className={style.button}  onClick={accion}>{tipo}</button>;
}

Button.propTypes = {
  tipo: PropTypes.string.isRequired,
  accion: PropTypes.func.isRequired,
};

export default Button;
