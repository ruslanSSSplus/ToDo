import React, {useEffect} from 'react';

import {TodoItem} from './TodoItem/TodoItem';
import {TodoPanel} from '../TodoPanel/TodoPanel';

interface TodoListProps {
    todoIdForEdit: Todo['id'] | null;
    todos: Todo[];
    deleteTodo: (id: Todo['id']) => void;
    checkTodo: (id: Todo['id']) => void;
    selectTodoIdForEdit: (id: Todo['id']) => void;
    changeTodo: ({name, description}: Omit<Todo, 'id' | 'checked'>) => void;
    allActiveDone: number
}

export const TodoList: React.FC<TodoListProps> = ({
                                                      todos,
                                                      todoIdForEdit,
                                                      changeTodo,
                                                      deleteTodo,
                                                      checkTodo,
                                                      selectTodoIdForEdit,
                                                      allActiveDone
                                                  }) => {





    return (
        <div>
            {todos.filter(todo => {

              if(allActiveDone === 1 ){
               return todo
              }
             if(allActiveDone === 2 ){
                  if (!todo.checked) {
                    return todo
                  }
                }
              else if(allActiveDone === 3 ){
                  if (todo.checked) {
                    return todo
                  }
              }
            })
                .map((todo) => {
                if (todo.id === todoIdForEdit)
                    return <TodoPanel mode='edit' changeTodo={changeTodo} editTodo={todo}/>;
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        checkTodo={checkTodo}
                        selectTodoIdForEdit={selectTodoIdForEdit}
                    />
                );
            })}
        </div>
    );

}
