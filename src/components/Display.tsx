interface IProps {
  displayText: string;
}

function Display({ displayText }: IProps) {
  return <h3 className="display-text">{displayText}</h3>;
}

export default Display;
