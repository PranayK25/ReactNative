import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Heading = (props) => {
    return (
        <View style={styles.heading}>
            <Text style={styles.title}>{props.title} ( {props.count} )</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    title: {
        fontSize: 20
    }
});

export default Heading;