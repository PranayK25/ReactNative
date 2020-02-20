import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';



const TodoList = (props) => {

    let isWaitingForSecondTap = false;
    let firstPressTimeout = null;
    const delay = 300;

    const handleDoubleTap = () => {
        if (!isWaitingForSecondTap) {
            firstPressTimeout = setTimeout(() => {
                onSingleTap();
                isWaitingForSecondTap = false;
            }, delay);
            isWaitingForSecondTap = true;
        } else {
            onDoubleTap();
            firstPressTimeout = clearTimeout(firstPressTimeout);
            isWaitingForSecondTap = false;
        }
    };

    const onSingleTap = () => {
        props.onDelete(props.id);
    };

    const onDoubleTap = () => {
        props.onShow(props.id);
    };

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleDoubleTap}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        marginTop: 10,
        padding: 10,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TodoList;