export default function List(props) {
  let { tasks, deleteTask } = props;
  return (
    <ul>
      {tasks.map((el, index) => (
        <li key={el._id}>
          <span>{el.name} </span>
          <button onClick={() => deleteTask(index)}>delete</button>
        </li>
      ))}
    </ul>
  );
}
