import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RootContext } from '../..'

const AddContact = () => {
    const state = useContext(RootContext)
    const navigation = useNavigation()
    
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={'name'}
                value={state.inputName}
                onChangeText={(input) => state.handleChangeInputName(input)}
                style={styles.input}
            />
            <TextInput
                placeholder={'phone number'}
                value={state.inputPhone}
                onChangeText={(input) => state.handleChangeInputPhone(input)}
                style={styles.input}
            />
            <View style={styles.buttonArea}>
                <TouchableOpacity
                    onPress={() => {
                        state.addContact()
                        navigation.popToTop()
                    }}
                    style={styles.button}
                >
                    <Text style={{color: 'white'}}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        borderRadius: 5,
        height: 43,
        backgroundColor: '#dadada',
        marginTop: 20,
        paddingHorizontal: 15,
    },
    buttonArea: {
        alignItems: 'flex-end',
    },
    button: {
        backgroundColor: '#b0b0b0',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 30,
    },
})

export default AddContact