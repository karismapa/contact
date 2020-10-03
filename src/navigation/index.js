import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Contacts from '../screens/Contacts'
import AddContact from '../screens/AddContact'

const RootStack = createStackNavigator()

const RootNavigation = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Contacts" component={Contacts} options={{headerShown: false}} />
            <RootStack.Screen name="AddContact" component={AddContact} options={{title: 'Add Contact'}} />
        </RootStack.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <RootNavigation />
        </NavigationContainer>
    )
}

export default Navigation