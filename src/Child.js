export default function Child(props) {
  const counter = 10;
  const { counter: cnt, handleOnChange } = props;
  return <div>{"" + cnt}</div>;
}
