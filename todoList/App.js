import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Modal } from 'react-native';

import Heading from './Components/Heading';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import UpdateView from './Components/UpdateView';

const App = () => {

  const [todoItems, setTodoItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [oldVal, setOldVal] = useState('');
  const [id, setId] = useState(null);

  const addTodosHandler = todos => {
    setTodoItems(currentTodos => [...currentTodos,
    { id: Math.random().toString(), value: todos }]);
  };

  const updateSelecterHandler = (todos, todoId) => {
    console.log(todos, todoId);
    const newTodoItems = [...todoItems];
    const updatedTodoItems = newTodoItems.map(todo => todo.id === todoId ?{"id": todoId, "value": todos } : todo )
    setTodoItems(updatedTodoItems);
    setIsUpdateMode(false);
  }

  const removeTodosHandler = todoId => {
    setTodoItems(currentTodos => {
      return currentTodos.filter((todo) => todo.id !== todoId)
    });
  };

  const showSelectedHandler = todoId => {
    setIsUpdateMode(true);
    setId(todoId);
    const oldV = (todoItems.filter((todo) => todo.id == todoId))[0].value;
    setOldVal(oldV);
  }

  const cancelUpdateMode = () => {
    setIsUpdateMode(false);
  };


  useEffect(() => {
    setItemCount(todoItems.length)
  }, [todoItems]);

  return (
    <View style={styles.screen}>
      <Heading title="To-Do" count={itemCount} />
      <TodoInput onAddTodo={addTodosHandler} />
      <FlatList style={styles.listContainer}
        keyExtractor={(item, index) => item.id}
        data={todoItems}
        renderItem={itemData => <TodoList
          id={itemData.item.id}
          onShow={showSelectedHandler}
          onDelete={removeTodosHandler}
          title={itemData.item.value}
        />}
      />
      <UpdateView
        visible={isUpdateMode}
        onCancel={cancelUpdateMode} 
        onUpdateTodo={updateSelecterHandler}
        oldValue={oldVal}
        id={id}/>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  listContainer: {
    paddingTop: 30
  }
});

export default App;