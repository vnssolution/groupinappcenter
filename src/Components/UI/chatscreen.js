import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground, Image, PixelRatio, TextInput, Alert, Modal, Pressable } from 'react-native';
import { GiftedChat, Bubble, Send, InputToolbar } from 'react-native-gifted-chat'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextStyles, { widthScale } from '../../CssStyles/TextStyles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function chatscreen() {
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'hi developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },

            },
            {
                _id: 3,
                text: 'hi developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },


            },
            {
                _id: 2,
                text: 'hi ',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 4,
                text: 'hi how are you',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    function renderInputToolbar(props) {
        return (
            <InputToolbar {...props}>
                <View style={{
                    backgroundColor: '#fff',
                    flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                    width: wp('100%', 812), height: hp('8%', 812), bottom: 30, position: 'relative'
                }}>


                    <View style={{ backgroundColor: '#FAF4FF', borderWidth: 0.2, borderRadius: 50, borderColor: "#8E8E93", flexDirection: 'row', marginLeft: '1%', width: wp('85%', 812), height: hp('6%', 812) }}>
                        <View style={{ flex: 6, width: wp('90%', 812), justifyContent: 'center', height: '100%' }}>
                            <TextInput
                                style={{ fontSize: widthScale(12), fontFamily: 'silka-medium-webfont', color: '#808080', marginLeft: '5%', height: hp('100%', 812) }}
                                placeholder="Write a message"
                                placeholderTextColor="#808080"
                                underlineColorAndroid="transparent"
                            // onChange={event => {
                            //     this.
                            //         messageChange(
                            //             event.nativeEvent.text
                            //         )
                            //     this.setState({
                            //         message_name: event.nativeEvent.text
                            //     });
                            // }}
                            // value={this.state.message_name}
                            />
                        </View>

                        <View style={{ flex: 1, width: wp('5%', 812), justifyContent: 'center', }}>
                            <TouchableOpacity
                                style={{ alignItems: 'center', justifyContent: 'center', }}
                                onPress={() => { this.showattachdocfn(true) }}
                            >
                                <Image style={{
                                    resizeMode: 'contain', width: wp('5%', 812),
                                    height: hp('5%', 812),
                                }} source={require('../../Images/paperclip3x.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, width: wp('5%', 812), justifyContent: 'center', }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', }} onPress={() => { Alert.alert("camera clicked") }}>
                                <Image style={{
                                    resizeMode: 'contain', width: wp('5%', 812),
                                    height: hp('5%', 812),
                                }} source={require('../../Images/camera3x.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/*                
                    <TouchableOpacity style={{ flex: 1, width: wp('12%', 812), marginLeft: 'auto', justifyContent: 'center', }}
                        onPress={() => { Alert.alert("Record audio clicked") }}>
                        <ImageBackground style={styles.ellipsebackground} resizeMode='contain'
                            source={require('../../Images/greenellipse.png')}>

                            <Image style={{
                                resizeMode: 'contain', width: wp('3%', 812),
                                height: hp('6%', 812),
                            }} source={require('../../Images/RecordAudio3x.png')} />

                        </ImageBackground>
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity style={{ flex: 1, width: wp('12%', 812), marginLeft: 'auto', justifyContent: 'center', }}
                        onPress={() => { Alert.alert("send clicked") }}
                    >
                        <Image style={{
                            resizeMode: 'cover', width: wp('12%', 812),
                            height: hp('5%', 812),
                        }} source={require('../../Images/Send.png')} />
                    </TouchableOpacity> */}
                </View>
            </InputToolbar>
        );
    }

    function renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        // Here is the color change
                        backgroundColor: 'rgba(225, 201, 255, 1)'
                    }
                }}
                textStyle={{
                    right: {
                        color: '#fff'
                    }
                }}
            />
        )
    }
    function renderSend(props) {
        return (
            <Send {...props}>
                <View style={styles.sendingContainer}>
                    <Image style={{
                        resizeMode: 'cover', width: wp('12%', 812),
                        height: hp('5%', 812),
                    }} source={require('../../Images/Send.png')} />

                </View>
            </Send>
        )
    }
    return (
        //   <View style={{ backgroundColor: '#2D1786'}}>
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            renderBubble={renderBubble}
            renderInputToolbar={renderInputToolbar}
            alwaysShowSend
            renderSend={renderSend}


        />
        //   </View>

    )
}
const styles = StyleSheet.create({
    maincontainer: { flex: 1, backgroundColor: '#FAF4FF' },
    container: {
        flex: 1,
        // margin: 20,
        backgroundColor: '#fff',
        height: 450
    },


    roundrecimagestyles: {
        resizeMode: 'contain', width: wp('3%'),
        height: hp('3%'),
    },
    counttext: { color: '#fff', fontWeight: 'normal', fontFamily: 'silka-medium-webfont', },
    moreview: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10, },
    searchview: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10, },

    groupinview: {
        width: wp('63%', 812), alignContent: 'center', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'flex-start', marginTop: '2%'
    },
    rounrectview: {
        width: wp('15%', 812), alignItems: 'center', alignContent: 'space-around', justifyContent: 'space-around', flexDirection: 'row', marginLeft: '2%', marginTop: '10%'
    },
    mainfirstview: { width: wp('100%', 812), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', },
    ellipsebackground: {
        alignItems: 'center', alignContent: 'center', justifyContent: 'center', width: wp('12%', 812),
    },
    generalgrid: { flex: 1, elevation: 10, backgroundColor: '#fff', marginTop: 2, marginBottom: 2, flexDirection: 'row' },
    generalfirstcolum: { flex: 0.8, alignItems: 'center', marginLeft: '2%', marginVertical: '2%' },
    generalseccolumn: { flex: 3, alignItems: 'flex-start', marginLeft: '2%', marginVertical: '2%' },
    generalthirdcolumn: { flex: 1, alignItems: 'center', marginRight: '2%', marginVertical: '2%' },
    sendview: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10, },
    // talkbubble style starts
    talkBubble: {
        width: '80%',
        backgroundColor: 'transparent',
        marginLeft: '5%',
        shadowOpacity: 0.5,
        flexDirection: 'row',
        shadowColor: '#F7FCFC'

    },
    talkBubbleSquare: {
        height: "auto",
        backgroundColor: '#fff',
        elevation: 5,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        // borderTopLeftRadius: 5,
    },
    h5purple: { fontSize: RFValue(16, 812), color: '#E00000', fontFamily: 'silka-medium-webfont' },

    talkBubbleTriangle: {
        // elevation: 5,
        // position: 'absolute',
        // left: -26,
        // top: 5,
        // width: 0,
        // height: 0,
        // borderTopColor: 'transparent',
        // borderTopWidth: 10,
        // borderRightWidth: 30,
        // borderRightColor: '#fff',
        // borderBottomWidth: 5,
        // borderBottomColor: 'transparent',
        // justifyContent: 'space-between'


    },
    // talkbubble style starts
    RighttalkBubble: {
        width: '80%',
        backgroundColor: 'transparent',
        shadowOpacity: 0.5,
        shadowColor: '#F7FCFC',
        marginLeft: 'auto'

    },
    RighttalkBubbleSquare: {
        height: "auto",
        backgroundColor: '#E1CDFA',
        elevation: 5,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginRight: '5%',
        padding: '2%'
        // borderTopRightRadius: 5
    },
    RighttalkBubbleTriangle: {
        // elevation: 5,
        // position: 'absolute',
        // right: 1,
        // top: 5,
        // width: 0,
        // height: 0,
        // borderTopColor: 'transparent',
        // borderTopWidth: 10,
        // borderLeftWidth: 30,
        // borderLeftColor: '#E1CDFA',
        // borderBottomWidth: 5,
        // borderBottomColor: 'transparent',

    },
    purplebutton: {
        borderRadius: hp('5%', 812), backgroundColor: "rgba(164, 124, 195, 1)", height: hp('5%', 812), width: 'auto', justifyContent: 'center', alignContent: 'center', alignItems: 'center', elevation: 10, padding: '1%',
    },
    purplebuttonview: { width: wp('20%', 812), justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '1%', padding: '2%', marginBottom: '1%' },
    purplebuttontext: {
        textAlign: 'center',
        fontSize: RFValue(16, 812),
        color: '#fff',
        fontFamily: 'silka-medium-webfont',
        padding: '3%'
    },
    redbutton: {
        borderRadius: hp('5%', 812), backgroundColor: "rgba(121, 43, 169, 1)", height: hp('5%', 812), width: 'auto', justifyContent: 'center', alignContent: 'center', alignItems: 'center', elevation: 10, padding: '1%', marginLeft: '2%'
    },
    redbuttonview: { width: wp('20%', 812), justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '1%', padding: '2%', marginBottom: '1%' },
    redbuttontext: {
        textAlign: 'center',
        fontSize: RFValue(16, 812),
        color: '#fff',
        fontFamily: 'silka-medium-webfont',
        padding: '3%'
    },
    adminfirstcolum: { flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', marginLeft: '2%', marginRight: '2%', paddingTop: '2%', paddingBottom: '2%', paddingLeft: '2%' },
    adminseccolumn: { flex: 3, justifyContent: 'center', width: '100%', height: '100%', paddingLeft: '1%' },
    sendingContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});