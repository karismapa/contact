import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchArea}>
                <Icon name={'search1'} size={20} style={styles.icon} />
                <TextInput
                    placeholder={'search'}
                    style={styles.input}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '87%',
    },
    searchArea: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        height: 43,
        backgroundColor: '#dadada',
    },
    icon: {
        paddingLeft: 12,
        paddingRight: 7,
    },
    input: {
        width: '100%',
    },
})

export default SearchBar