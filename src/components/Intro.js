import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions , I18nManager, AsyncStorage} from "react-native";
import { Container, Content} from 'native-base'
import Swiper from 'react-native-swiper';
import styles from '../../assets/styles'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
class Intro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: null,
            intro: []
        }
    }

    componentWillMount() {

    }


    navigateToLogin() {
        AsyncStorage.setItem('intro', 'true');
        this.props.navigation.navigate('login');
    }

    render() {
        return (

            <Container>
                <Content>
                        <Swiper dotStyle={[styles.doteStyle]}
                                activeDotStyle={[styles.activeDot]}
                                containerStyle={{}} showsButtons={true}
                                buttonWrapperStyle={{top:height-75, height:50 , paddingRight:50 }}
                                prevButton={<View/>}
                                nextButton={<Text style={[styles.textBold ,{color:'#fff'}]}>التالي</Text>}
                                autoplay={false} loop={false}>
                            <View style={{}}>
                                <Image source={require('../../assets/images/intro_three.png')} style={{height:'100%' , width:'100%' ,zIndex:-1}} resizeMode={'cover'} />
                                <View style={[styles.directionColumnCenter , styles.heightFull , styles.Width_60 , styles.flexCenter
                                    , { zIndex:1, position:"absolute"}]}>
                                    <Text style={[styles.textBold , styles.text_White , styles.textSize_18, styles.textCenter , styles.marginBottom_5]}>مرحبا بكم</Text>
                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_14, styles.textCenter]}> نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص</Text>
                                    <TouchableOpacity onPress={() => this.navigateToLogin()} style={[styles.orangeBtn]}>
                                        <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>ابدأ الآن</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{}}>
                                <Image source={require('../../assets/images/intro_two.png')} style={{height:'100%' , width:'100%' ,zIndex:-1}} resizeMode={'cover'} />
                                <View style={[styles.directionColumnCenter , styles.heightFull , styles.Width_70 , styles.flexCenter
                                    , { zIndex:1, position:"absolute"}]}>
                                    <Text style={[styles.textBold , styles.text_White , styles.textSize_18, styles.textCenter , styles.marginBottom_5]}>مرحبا بكم</Text>
                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_14, styles.textCenter]}> نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.navigateToLogin()} style={{position:'absolute' , bottom:37 , left:45}}>
                                    <Text style={[styles.textBold ,{color:'#fff'}]}>تخطي</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{}}>
                                <Image source={require('../../assets/images/intro_one.png')} style={{height:'100%' , width:'100%' ,zIndex:-1}} resizeMode={'cover'} />
                                <View style={[styles.directionColumnCenter , styles.heightFull , styles.Width_60 , styles.flexCenter
                                    , { zIndex:1, position:"absolute"}]}>
                                    <Text style={[styles.textBold , styles.text_White , styles.textSize_18, styles.textCenter , styles.marginBottom_5]}>مرحبا بكم</Text>
                                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_14, styles.textCenter]}> نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص نص</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.navigateToLogin()} style={{position:'absolute' , bottom:37 , left:45}}>
                                    <Text style={[styles.textBold ,{color:'#fff'}]}>تخطي</Text>
                                </TouchableOpacity>
                            </View>

                        </Swiper>
                </Content>
            </Container>

        );
    }
}

export default Intro;