export default function User(props: { data: { name: string; age: number } }) {
  return (
    <div>
      Hello {props.data.name}, {props.data.age} !
    </div>
  );
}
