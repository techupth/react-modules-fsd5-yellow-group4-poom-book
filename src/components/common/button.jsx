export default Button;

function Button(props) {
  return <button className={props.buttonStyle}>{props.buttonText}</button>;
}
