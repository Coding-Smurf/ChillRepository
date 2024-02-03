import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import the pages
import Recipes from './Recipes';
import Products from './Products';
import ProductSelect from './ProductSelect';
import ReciperViewer from './RecipeViewer';
import AddProduct from './AddProduct';
import UserSettings from './UserSettings';
import MainView from './MainView';
import { Animated, Image, StyleSheet } from 'react-native';
import { useEffect, useRef, useState } from 'react';


const bottomTabs = createBottomTabNavigator(); 

const selectedColor = '#fff';
const unselectedColor = 'black';

const TabIconStyles = (isFocused, Icon) => (
    <Image
        source={Icon}
        style={{
            width: isFocused ? 45 : 35,
            height: isFocused ? 45 : 35,
            tintColor: isFocused ? selectedColor : unselectedColor,
            margin: 10,
            backgroundColor: isFocused ? '#333' : '#ccc',
            borderRadius: 10,

        }}
    />
);

const screenOptionStyle = {
    tabBarStyle: [{ 
        height: '12%',
        backgroundColor: '#ccc',
        borderTopRightRadius: 200,
        borderTopLeftRadius: 200,
        paddingTop: 25,
        paddingRight: 35,
        paddingLeft: 35,
         
    }], 
  };


export default function MainNavigation() {
    return (

        <bottomTabs.Navigator
            screenOptions={screenOptionStyle}
            options={{
                tabBarShowLabel: false,
                headerShown: false,
            }} initialRouteName="Products">
            <bottomTabs.Screen
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        TabIconStyles(focused, require('./assets/icons8-barcode-64.png'))
                    ),
                }}
                name="Scan"
                component={AddProduct}
            />

            <bottomTabs.Screen options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    TabIconStyles(focused, require('./assets/icons8-cuenco-de-arroz-96 (1).png'))

                ),
            }} name="Products" component={Products} />

            <bottomTabs.Screen options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    TabIconStyles(focused, require('./assets/icons8-libro-de-cocina-100.png'))
                ),
            }} name="Recipes" component={Recipes} />

            <bottomTabs.Screen options={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    TabIconStyles(focused, require('./assets/icons8-ajustes-144.png'))
                ),
            }} name="UserSettings" component={UserSettings} />

        </bottomTabs.Navigator>

    );



}