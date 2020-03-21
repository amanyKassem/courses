import React from "react";
import { createAppContainer , createSwitchNavigator } from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';

import { I18nManager } from "react-native";

import DrawerCustomization      from "./DrawerCustomization";
import InitScreen      from "../components/InitScreen";
import Home      from "../components/Home";
import Intro      from "../components/Intro";
import Login      from "../components/Login";


const drawerCust = (props) => (<DrawerCustomization {...props} />);

const DrawerNavigator = createDrawerNavigator({
    home                : Home,

},
{
    initialRouteName    :'home',
    drawerPosition      : I18nManager.isRTL ?'right' : 'left',
    drawerOpenRoute     : 'DrawerOpen',
    drawerCloseRoute    : 'DrawerClose',
    gesturesEnabled     : false,
    drawerToggleRoute   : 'DrawerToggle',
    drawerWidth         : '80%',
    contentComponent    : drawerCust
});



const appStack =  createStackNavigator({

    intro: {
        screen: Intro,
        navigationOptions: {
            header: null
        }
    },
    drawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: {
            header: null
        }
    },

});

const authStack = createStackNavigator({

    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },


});

const AppNavigator = createSwitchNavigator({

    app     : appStack,
    InitScreen: {
        screen: InitScreen,
        navigationOptions: {
            header: null
        }
    },
    auth    : authStack,
});

export default createAppContainer(AppNavigator);
