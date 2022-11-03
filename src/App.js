import './App.css';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import { TodoProvider } from './TodoContext';

function App() {
  

  return (
    <div  className="App">
      <TodoProvider>
        <div className="container">
          <Form/>
          <TodoItem />
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
