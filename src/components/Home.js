import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, ImageBackground, Linking, FlatList, Platform, ScrollView, Dimensions, I18nManager} from "react-native";
import {
    Container,
    Content,
    Header,
    Button,
    Left,
    Icon,
    Body,
    Title,
    Right,
    Item,
    Input,
    Picker,
    CheckBox,
} from 'native-base'

import styles from '../../assets/styles';
import COLORS from "../consts/colors";
import i18n from "../../locale/i18n";

const isIOS = Platform.OS === 'ios';
const width = Dimensions.get('window').width;

class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            categorySearch      : '',
            isFav               : 0,
            refreshed           : false,
            active              : true,
            loader              : true,
            status              : 1,
            spinner             : true,
            show_modal: false,
            country: null,
            isModalVisible: false,
        }
    }

    componentWillMount() {


    }


    static navigationOptions = () => ({
        header      : null,
        drawerLabel : ( <Text style={[styles.textRegular, styles.text_black, styles.textSize_18]}>{ i18n.t('home') }</Text> ) ,
        // drawerIcon  : ( <Image style={[styles.smImage]} source={require('../../assets/images/home.png')} resizeMode={'cover'}/>)
    });


    onFocus(){
        this.componentWillMount();
    }



    render() {

        return (
            <Text>kkkjkjk</Text>

        );
    }
}


export default Home;
