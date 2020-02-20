import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, Button } from 'react-native';

const UpdateView = props => {

    const [updatedTodo, setUpdatedTodo] = useState('');

    const updatedTodoHandler = (todo) => {
        setUpdatedTodo(todo);
    };

    const addUpdateHandler = () => {
        props.onUpdateTodo(updatedTodo, props.id);
        setUpdatedTodo('');
    }

    const cancelUpdateHandler = () => {
        props.onCancel();
        setUpdatedTodo('');
    }

    return (

        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Text>Update</Text>
                <TextInput style={styles.input}
                    placeholder={props.oldValue}
                    onChangeText={updatedTodoHandler}
                    value={updatedTodo}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="OK"
                            color="red"
                            onPress={addUpdateHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" onPress={cancelUpdateHandler} />
                    </View>
                </View>
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default UpdateView;