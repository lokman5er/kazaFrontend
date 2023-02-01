import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import ChangeValue from '../../components/ChangeValue';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SettingsScreen({ navigation }) {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('time');
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ChangeValue title="Username" placeholder="Lokman" keyboardType="default" />
            <ChangeValue title="Email" placeholder="Lokman@beser.com" keyboardType="email-address" />
            <Text style={{ width: '90%', fontSize: '30%', marginBottom: 10, color: 'blue' }}>Change Password</Text>
            <ChangeValue title="Safety Cushion" placeholder="20%" keyboardType="number-pad" />
            <Text style={{ width: '90%', fontSize: '30%', marginBottom: 10 }}>Notification Time</Text>
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
            />

        </SafeAreaView>
    );
}