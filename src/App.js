import './App.css';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
    <div  className="App">
      <div className="container">
        <Form />
        <TodoItem />
      </div>
    </div>
  );
}

export default App;
