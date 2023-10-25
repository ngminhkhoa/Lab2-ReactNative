import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'

const LoginScreen = () => {
    return (
        <ScrollView>
            <View style={Style.container}>
                <Text style={Style.title}>Login</Text>
                <TextInput style={Style.input} placeholder='Phone'></TextInput>
                <TextInput style={Style.input} placeholder='Password' secureTextEntry></TextInput>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default LoginScreen