interface IProps {
  displayText: string;
}

function Display({ displayText }: IProps) {
  return <h3>{displayText}</h3>;
}

export default Display;
