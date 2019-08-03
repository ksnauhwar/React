import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilters from './VisibilityFilters';

const App = (props) => {
    return (
       <div>
        <AddTodo/>
        <TodoList/>
        <VisibilityFilters/>
       </div>
    );
}

export default App;