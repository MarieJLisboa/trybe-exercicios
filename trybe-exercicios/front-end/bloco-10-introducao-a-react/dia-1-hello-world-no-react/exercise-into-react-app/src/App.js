import './App.css';

const toDoList = [ 'Comer', 'estudar', 'correr'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}



function App() {
  return (<ol>{toDoList.map((item) => Task(item))}</ol>
  );
}

export default App;
