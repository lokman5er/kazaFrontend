import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import * as Progress from 'react-native-progress';


import PrayerCounter from '../../components/PrayerCounter';

export default function HomeScreen({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <PrayerCounter name="Fajr" total={500} done={20} />
            <PrayerCounter name="Dhuhur" total={500} done={20} />
            <PrayerCounter name="Asr" total={500} done={20} />
            <PrayerCounter name="Magrib" total={500} done={20} />
            <PrayerCounter name="Isha" total={500} done={20} />

            <Text style={{ fontSize: 30, marginBottom: 20 }}>Progress so far</Text>
            <Progress.Bar progress={0.3} width={350} color="#C1E1C1" height={30} />

        </SafeAreaView>
    );
}