import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function PrayerCounter(props) {
    const [done, setDone] = useState(props.done);

    const incrementDone = () => {
        setDone(done + 1);
    }

    return (
        <View style={{ width: '100%', position: 'relative', borderWidth: 1, marginBottom: 15 }}>
            <Text style={{ width: '90%', fontSize: '50%', marginLeft: '5%' }}>{props.name}</Text>
            <Text style={{ fontSize: '30%', marginLeft: '15%' }}>{props.total}/{done}</Text>
            <TouchableOpacity style={{ position: 'absolute', bottom: '-8%', right: '4%' }} onPress={incrementDone}>
                <Text style={{ fontSize: '50%', fontWeight: 'bold', }}>+</Text>
            </TouchableOpacity>
        </View>
    );
}