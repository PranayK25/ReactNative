import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';


const TodoInput = (props) => {

    const [enteredTodo, setEnteredTodo] = useState('');

    const todoInputHandler = (enteredText) => {
        setEnteredTodo(enteredText);
    };

    const onAddTodo = () => {
        props.onAddTodo(enteredTodo),
        setEnteredTodo('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={todoInputHandler}
                placeholder="Enter Todos"
                value={enteredTodo}
            />
            <Button title="ADD" onPress = {onAddTodo} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});

export default TodoInput;