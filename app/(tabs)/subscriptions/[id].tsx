 import React from 'react';
import { View, Text } from 'react-native';
import {Link, useLocalSearchParams} from "expo-router";

const SubscriptsionDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>()
    return (
      <View>
        <Text>SubscriptsionDetails: {id}</Text>
        <Link href="/">Go back</Link>
      </View>
    );
};
 
export default SubscriptsionDetails;