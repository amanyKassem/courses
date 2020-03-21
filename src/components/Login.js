import React, { Component } from "react";
import {View, Text, Image, TouchableOpacity, AsyncStorage, KeyboardAvoidingView, I18nManager} from "react-native";
import {Container, Content, Form, Input, Item, Label, Toast,} from 'native-base'
import styles from '../../assets/styles';
import i18n from '../../locale/i18n'
import {NavigationEvents} from "react-navigation";
import {connect} from 'react-redux';
import * as Permissions from 'expo-permissions';
import {Notifications} from 'expo'
import COLORS from "../consts/colors";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            phone               : '',
            password            : '',
            deviceId            : '',
            device_type         : 'ios',
            userId              : null,
            type                : 0,
            phoneStatus         : 0,
            passwordStatus      : 0,
        }
    }

    activeInput(type) {

        if (type === 'phone' || this.state.phone !== '') {
            this.setState({phoneStatus: 1})
        }

        if (type === 'password' || this.state.password !== '') {
            this.setState({passwordStatus: 1})
        }

    }

    unActiveInput(type) {

        if (type === 'phone' && this.state.phone === '') {
            this.setState({phoneStatus: 0})
        }

        if (type === 'password' && this.state.password === '') {
            this.setState({passwordStatus: 0})
        }

    }

    validate = () => {
        let isError = false;
        let msg = '';

        if (this.state.phone.length <= 0) {
            isError = true;
            msg = i18n.t('namereq');
        } else if (this.state.password.length <= 0) {
            isError = true;
            msg = i18n.t('pass');
        }
        if (msg !== '') {
            Toast.show({
                text: msg,
                type: "danger",
                duration: 3000,
                textStyle: {
                    color: "white",
                    fontFamily: 'cairo',
                    textAlign: 'center',
                }
            });
        }
        return isError;
    };
    renderSubmit() {
        if (this.state.password == '' || this.state.phone == '') {
            return (
                <TouchableOpacity
                    style={[styles.bg_red, styles.width_150, styles.flexCenter, styles.marginVertical_15, styles.height_40 , {
                        backgroundColor:'#999'
                    }]}
                >
                    <Text style={[styles.textRegular, styles.textSize_14, styles.text_White]}>
                        {i18n.translate('login')}
                    </Text>
                </TouchableOpacity>
            );
        }

        return (
            <TouchableOpacity
                style={[styles.bg_red, styles.width_150, styles.flexCenter, styles.marginVertical_15, styles.height_40]}
                onPress={() => this.onLoginPressed()}>
                <Text style={[styles.textRegular, styles.textSize_14, styles.text_White]}>
                    {i18n.translate('login')}
                </Text>
            </TouchableOpacity>
        );
    }
    onLoginPressed() {


        const err = this.validate();

        if (!err){
            const {phone, password, deviceId , device_type} = this.state;
            // this.props.userLogin({ phone, password, deviceId , device_type}, this.props.lang);
        }

    }

    async componentWillMount() {
        I18nManager.forceRTL(true);
        const {status: existingStatus} = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
        );

        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }

        if (finalStatus !== 'granted') {
            return;
        }

        const deviceId = await Notifications.getExpoPushTokenAsync();

        this.setState({deviceId, userId: null});
        AsyncStorage.setItem('deviceID', deviceId);

    }

    // componentWillReceiveProps(newProps) {
    //
    //     console.log('props auth ...', newProps.auth);
    //
    //
    //     if (newProps.auth !== null && newProps.auth.success) {
    //
    //         if (this.state.userId === null) {
    //             this.setState({userId: newProps.auth.data.id});
    //             this.props.profile(newProps.auth.data.token);
    //         }
    //
    //         this.props.navigation.navigate('drawerNavigator');
    //
    //     }
    //
    //     if (newProps.auth !== null) {
    //         this.setState({spinner: false});
    //         Toast.show({
    //             text: newProps.auth.message,
    //             type: newProps.auth.success ? "success" : "danger",
    //             duration: 3000,
    //             textStyle: {
    //                 color: "#fff",
    //                 fontFamily: 'cairo',
    //                 textAlign: 'center',
    //             }
    //         });
    //     }
    //
    // }

    onFocus(){
        this.componentWillMount();
    }

    render() {

        return (

            <Container>
                <NavigationEvents onWillFocus={() => this.onFocus()} />

                <Content contentContainerStyle={styles.bgFullWidth}>
                    <View style={[styles.position_R, styles.bgFullWidth, styles.marginVertical_15, styles.flexCenter, styles.Width_100]}>
                        <KeyboardAvoidingView behavior={'padding'} style={styles.keyboardAvoid}>
                            <Form style={[styles.Width_100, styles.flexCenter, styles.marginVertical_10, styles.Width_90]}>

                                <View
                                    style={[styles.position_R, styles.height_70, styles.flexCenter , {backgroundColor: '#000'}]}>
                                    <Item floatingLabel style={[styles.item, styles.position_R]}>
                                        <Label style={[styles.label ,{ color:this.state.phoneStatus === 1 ?  COLORS.blue :  COLORS.gray}]}>{ i18n.t('phone') }</Label>
                                        <Input
                                            style={[styles.input, styles.height_50, (this.state.phoneStatus === 1 ? styles.Active : styles.noActive)]}
                                            onChangeText={(phone) => this.setState({phone})}
                                            onBlur={() => this.unActiveInput('phone')}
                                            onFocus={() => this.activeInput('phone')}
                                            keyboardType={'number-pad'}
                                        />
                                    </Item>
                                </View>

                                <View
                                    style={[styles.position_R,  styles.height_70, styles.flexCenter]}>
                                    <Item floatingLabel style={[styles.item, styles.position_R]}>
                                        <Label style={[styles.label ,{ color:this.state.passwordStatus === 1 ?  COLORS.blue :  COLORS.gray}]}>{ i18n.t('password') }</Label>
                                        <Input
                                            style={[styles.input, styles.height_50, (this.state.passwordStatus === 1 ? styles.Active : styles.noActive)]}
                                            onChangeText={(password) => this.setState({password})}
                                            onBlur={() => this.unActiveInput('password')}
                                            onFocus={() => this.activeInput('password')}
                                            secureTextEntry
                                        />
                                    </Item>
                                </View>

                                {this.renderSubmit()}

                            </Form>
                        </KeyboardAvoidingView>
                    </View>
                </Content>

            </Container>

        );
    }
}
const mapStateToProps = ({lang }) => {
    return {
        lang: lang.lang
    };
};
export default connect(mapStateToProps, {})(Login);
