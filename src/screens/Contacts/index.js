import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RootContext } from '../..'
import SearchBar from '../../components/SearchBar'
import Icon from 'react-native-vector-icons/AntDesign'

const Contacts = () => {
    const state = useContext(RootContext)
    const navigation = useNavigation()

    const renderItem = ({ item }) => {
        return (
            <View style={styles.contact}>
                <View>
                    <Text style={styles.contactPhone}>{item.phone}</Text>
                    <Text style={styles.contactName}>{item.name}</Text>
                </View>
                <View style={styles.contactAction}>
                    <TouchableOpacity>
                        <Icon name={'eyeo'} size={20} color={'#a0a0a0'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 10}}>
                        <Icon name={'edit'} size={20} color={'#a0a0a0'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => state.removeContact(item.id)}
                    >
                        <Icon name={'delete'} size={20} color={'#a0a0a0'} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SearchBar />
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('AddContact')}
                >
                    <Icon name={'plus'} size={25} color={'grey'} />
                </TouchableOpacity>
            </View>
            
            <View>
                <FlatList
                    data={state.contacts}
                    renderItem={renderItem}
                    titleExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    addButton: {
        backgroundColor: '#dadada',
        borderRadius: 5,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    contactPhone: {
        fontSize: 17,
        fontWeight: '100',
    },
    contactName: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#a0a0a0',
    },
    contactAction: {
        flexDirection: 'row',
    },
})

export default Contacts