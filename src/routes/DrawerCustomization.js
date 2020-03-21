import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, Share} from "react-native";
import {Button, Container, Content, Icon} from 'native-base';
import { DrawerItems } from 'react-navigation-drawer';

import styles from "../../assets/styles";
import COLORS from '../../src/consts/colors'
import i18n from "../../locale/i18n";

class DrawerCustomization extends Component {
    constructor(props){
        super(props);
        this.state={
            user: [],
        }
    }

    render() {
        return (
            <Container>
                <View style={[styles.bg_light_red, styles.width_50, styles.height_full, styles.position_A, styles.left_20, styles.top_0 , styles.zIndexDown]}/>
                <Content contentContainerStyle={styles.bgFullWidth}>



                </Content>
            </Container>
        );
    }
}

export default DrawerCustomization;
