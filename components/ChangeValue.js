import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ChangeValue(props) {
    const [value, onChangeText] = React.useState(props.placeholder);

    return (
        <View style={{ width: '100%', position: 'relative', borderWidth: 1, marginBottom: 15, paddingBottom: 10 }}>
            <Text
                style={{
                    width: '90%',
                    fontSize: '30%',
                    marginLeft: '5%'
                }}>
                {props.title}
            </Text>
            <TextInput
                style={{
                    fontSize: '20%',
                    height: 40,
                    marginLeft: '5%',
                    width: '70%',
                    backgroundColor: 'lightgrey',
                }}
                onChangeText={text => onChangeText(text)}
                keyboardType={props.keyboardType}
            >
                {props.placeholder}
            </TextInput>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '2%'
                }} >
                <Ionicons name="pencil-outline" size={60} />
            </TouchableOpacity>
        </View>
    );
}