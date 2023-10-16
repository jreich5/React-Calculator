import { IButtonProps } from "./interfaces";

function Button({ name, displayText, classes, listener }: IButtonProps) {
  return (
    <button data-name={name} onClick={listener} className={classes.join(" ")}>
      {displayText}
    </button>
  );
}

export default Button;
