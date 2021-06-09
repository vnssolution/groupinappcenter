import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground, Image, PixelRatio, TextInput, Alert, Modal, Pressable } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextStyles, { widthScale } from '../../CssStyles/TextStyles';
import CssStyles from '../../CssStyles/CssStyles';
import DocumentPicker from 'react-native-document-picker';



class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: this.props.route.params,
            message_name: "",
            showmenu: false,
            exitgroupmenu: false,

        }
    }
    componentDidMount() {
        console.log(this.state.navigation)
    }
    messageChange(event) {
        if (event !== null && event !== "" && event.length > 0) {
            //   this.SearchData(event);
            console.log("event", event)
        }
    }
    showmenufn(value) {
        this.setState({ showmenu: value })
    }
    showexitgroupfn(value) {
        this.setState({ exitgroupmenu: value })
    }
    showattachdocfn(value) {
        this.setState({ attachdocmenu: value })
    }
    documentsync = async () => {

        setTimeout(async () => {
            try {
                const res = await DocumentPicker.pick({
                    type: [DocumentPicker.types.allFiles],
                });
                console.log(
                    res.uri,
                    res.type, // mime type
                    res.name,
                    res.size
                );
            } catch (err) {
                if (DocumentPicker.isCancel(err)) {
                    // User cancelled the picker, exit any dialogs or menus and move on
                } else {
                    throw err;
                }
            }
        })

    }
    rightbubble() {
        return (<View style={{ alignItems: 'flex-end', margin: '2%', flexDirection: 'row' }}>

            <View style={styles.RighttalkBubble}>
                <View style={styles.RighttalkBubbleSquare} >
                    <View style={{ margin: '1%', padding: '1%' }}>
                        <Text style={{ flex: 3, fontSize: widthScale(12), fontFamily: 'silka-regular-webfont', }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </Text>
                    </View>
                    <View style={{ flexDirection: 'row', margin: '1%' }}>
                        <View style={{ flex: 1, }}>
                            <Text style={{ fontSize: widthScale(12), fontFamily: 'silka-regular-webfont', color: '#b2b2b2', marginLeft: '5%' }}>3.32pm</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end', marginTop: '2%', marginRight: '2%' }}>
                        <View style={{ flexDirection: 'row', width: wp('5%', 812), alignItems: 'center',marginTop: '-3%', }}>
                                <Image style={{  width: wp('3.5%', 812), height: 12, }} source={require('../../Images/purplecheck3x.png')} />
                                <Image style={{  width: wp('3.5%', 812), height: 12,left:wp(-4.5,812), }} source={require('../../Images/purplecheck3x.png')} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.RighttalkBubbleTriangle} />

            </View>
        </View>
        )
    }
    leftbubble() {
        return (<View style={{ flex: 1, alignItems: 'flex-start', margin: '2%', flexDirection: 'row' }}>
            <View style={styles.talkBubble}>
                <View style={styles.talkBubbleTriangle} />
                <View style={styles.talkBubbleSquare} >

                    <View style={{ marginLeft: "2%", }}>
                        <View style={{ flex: 1, }}>
                            <Text style={{ fontSize: widthScale(12), fontFamily: 'silka-bold-webfont', color: 'rgba(121, 43, 169, 1)', margin: '4%', marginBottom: '1%' }}>{this.state.navigation.tittle}</Text>
                        </View>

                        <Text style={{ flex: 3, fontSize: widthScale(12), fontFamily: 'silka-regular-webfont', margin: '4%', marginTop: '1%' }}>{this.state.navigation.message}</Text>

                        <View style={{ flexDirection: 'row', margin: '1%' }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ fontSize: widthScale(12), fontFamily: 'silka-regular-webfont', marginLeft: '5%', color: '#b2b2b2' }}>3.32pm</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end', marginTop: '2%', marginRight: '2%' }}>
                            <View style={{ flexDirection: 'row', width: wp('5%', 812), alignItems: 'center', marginTop: '-3%', }}>
                                <Image style={{  width: wp('3.5%', 812), height: 12, }} source={require('../../Images/purplecheck3x.png')} />
                                <Image style={{  width: wp('3.5%', 812), height: 12,left:wp(-4.5,812), }} source={require('../../Images/purplecheck3x.png')} />
                            </View>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
            <TouchableOpacity style={styles.moreview} onPress={() => { Alert.alert("Send clicked") }}>
                <Image source={require('../../Images/Send.png')} />
            </TouchableOpacity>

        </View>
        )

    }
    leftbubblewithimage() {
        return (
            <View style={{ alignItems: 'flex-start', margin: '2%', flexDirection: 'row' }}>
                <View style={styles.talkBubble}>
                    <View style={styles.talkBubbleTriangle} />
                    <View style={styles.talkBubbleSquare} >

                        <View style={{ marginLeft: "2%" }}>
                            <View style={{ flex: 1, }}>
                                <Text style={{ fontSize: widthScale(12), fontFamily: 'silka-bold-webfont', fontWeight: 'bold', color: 'rgba(121, 43, 169, 1)', margin: '4%', marginBottom: '1%' }}>{this.state.navigation.tittle}</Text>
                            </View>
                            <Image style={{ flex: 2, marginLeft: "3%", resizeMode: 'contain', width: wp('70%', 812), marginTop: '1%' }} source={require('../../Images/Rectangle.png')} />

                            <Text style={{ flex: 2, fontSize: widthScale(12), fontFamily: 'silka-regular-webfont', margin: '4%', marginTop: '2%', color: '#000000' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</Text>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 0.5, }}>
                                    <Text style={{ fontSize: widthScale(12), fontFamily: 'silka-regular-webfont', marginLeft: '7%', color: 'rgba(0, 0, 0, 0.5)' }}>3.36pm</Text>
                                </View>
                                <View style={{ flex: 0.5, alignItems: 'flex-end', alignContent: 'flex-end', justifyContent: 'flex-end', marginTop: '2%', marginRight: '2%' }}>
                                <View style={{ flexDirection: 'row', width: wp('5%', 812), alignItems: 'center',  marginTop: '-3%',}}>
                                <Image style={{  width: wp('3.5%', 812), height: 12 }} source={require('../../Images/check3x.png')} />
                                {/* <Image style={{ width: wp('3.5%', 812), height: 12,left:wp(-4.5,812),}} source={require('../../Images/check3x.png')} /> */}
                            </View>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
                <TouchableOpacity style={styles.moreview} onPress={() => { Alert.alert("Send clicked") }}>
                    <Image source={require('../../Images/Send.png')} />
                </TouchableOpacity>

            </View>

        )
    }

    render() {
        return (
            <View style={styles.maincontainer}>
                {/* <View style={{ height: hp('8%'), backgroundColor: '#511D73', }}> */}
                    <ImageBackground style={{ height: hp('8%') }}
                    source={require('../../Images/bg.png')}>
                    <View style={styles.mainfirstview}>

                        <TouchableOpacity style={styles.rounrectview} onPress={() => this.props.navigation.pop()}>
                            <Image style={styles.roundrecimagestyles} source={require('../../Images/back.png')} />
                            {/* <ImageBackground style={styles.ellipsebackground} resizeMode='cover'
                                source={require('../../Images/greenellipse.png')}> */}
                                <Image style={{
                                    resizeMode: 'contain', width: wp('10%',812),
                                    height: hp('6%',812),
                                }} source={this.state.navigation.uri} />
                            {/* </ImageBackground> */}
                        </TouchableOpacity>

                        <View style={styles.groupinview}>

                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', }}
                                onPress={() => {
                                    this.props.navigation.navigate("BroadcastGroupinfo", {
                                        itemId: this.state.navigation.itemId,
                                        tittle: this.state.navigation.tittle,
                                        grouptext: this.state.navigation.grouptext,
                                        otherParam: 'true',
                                        uri: this.state.navigation.uri,
                                        admin: this.state.navigation.admin,
                                        chatscreen:this.state.navigation.chatscreen
                                    });
                                }}
                            >
                                <Text
                                    numberOfLines={1} style={{ flex: 0.4, fontSize: RFValue(16, 812), color: '#fff', fontFamily: 'silka-bold-webfont', }}
                                >
                                    {this.state.navigation.tittle}</Text>
                                <Text
                                    numberOfLines={1} style={{ flex: 0.4, fontSize: widthScale(12), color: '#fff', fontFamily: 'silka-medium-webfont', marginTop: '1%' }}
                                >{this.state.navigation.grouptext}</Text>

                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.searchview} onPress={() => { Alert.alert("Userplus clicked") }}>
                            <Image style={{
                                resizeMode: 'contain', width: wp('6%'),
                                height: hp('5%'),
                            }} source={require('../../Images/user-plus.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.moreview} onPress={() => { this.showmenufn(true) }}>
                            <Image style={{
                                resizeMode: 'contain', width: wp('2%'),
                                height: hp('3%'),
                            }} source={require('../../Images/more3x.png')} />
                        </TouchableOpacity>

                    </View>
                    </ImageBackground>
                {/* </View> */}
              
                    <ImageBackground style={CssStyles.backgroundImage}
                        source={require('../../Images/chatbg.png')}>
                              <ScrollView contentContainerStyle={{ paddingBottom: 2, }}>
                        <View style={{ flex: 1, }}>
                            <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center', marginTop: '5%', margin: '3%' }}>
                                <View style={{ flex: 1, height: 20, borderRadius: 5, borderWidth: 1, alignContent: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: "#B388CD", borderColor: "#B388CD", }}>
                                    <Text style={{ fontSize: widthScale(12), fontFamily: 'silka-medium-webfont', color: '#fff', marginLeft: '2%', marginRight: '2%' }}>Yesterday</Text>
                                </View>
                            </View>
                            {this.state.navigation.chatscreen === "adminscreen" ?
                                <View>
                                    {this.leftbubble()}
                                    {this.leftbubblewithimage()}
                                </View>

                                : null}
                            {this.state.navigation.chatscreen === "broadcastscreen" ?
                                <View>
                                    {this.rightbubble()}
                                    {this.rightbubble()}
                                </View>
                                : null}

                        </View>
                        </ScrollView>
                    </ImageBackground>
              
                {this.state.navigation.admin == true || this.state.navigation.chatscreen === "broadcastscreen" ?
                    <View style={{
                        backgroundColor: '#fff',
                        flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                        width: wp('100%', 812), height: hp('8%', 812), bottom: 0, position: 'relative'
                    }}>
                        <View style={{ backgroundColor: '#FAF4FF', borderWidth: 0.2, borderRadius: 50, borderColor: "#8E8E93", flexDirection: 'row', marginLeft: '1%', width: wp('85%', 812), height: hp('6%', 812) }}>
                            <View style={{ flex: 6, width: wp('90%', 812), justifyContent: 'center', height: '100%' }}>
                                <TextInput
                                    style={{ fontSize: widthScale(12), fontFamily: 'silka-medium-webfont', color: '#808080', marginLeft: '5%', height: hp('100%', 812) }}
                                    placeholder="Write a message"
                                    placeholderTextColor="#808080"
                                    underlineColorAndroid="transparent"
                                    onChange={event => {
                                        this.
                                            messageChange(
                                                event.nativeEvent.text
                                            )
                                        this.setState({
                                            message_name: event.nativeEvent.text
                                        });
                                    }}
                                    value={this.state.message_name}
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
                        {this.state.message_name == "" ?
                            <TouchableOpacity style={{ flex: 1, width: wp('12%', 812), marginLeft: 'auto', justifyContent: 'center', }}
                                onPress={() => { Alert.alert("Record audio clicked") }}>
                                <ImageBackground style={styles.ellipsebackground} resizeMode='contain'
                                    source={require('../../Images/greenellipse.png')}>

                                    <Image style={{
                                        resizeMode: 'contain', width: wp('3%', 812),
                                        height: hp('6%', 812),
                                    }} source={require('../../Images/RecordAudio3x.png')} />

                                </ImageBackground>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={{ flex: 1, width: wp('12%', 812), marginLeft: 'auto', justifyContent: 'center', }}
                                onPress={() => { Alert.alert("send clicked") }}
                            >
                                <Image style={{
                                    resizeMode: 'cover', width: wp('12%', 812),
                                    height: hp('5%', 812),
                                }} source={require('../../Images/Send.png')} />
                            </TouchableOpacity>
                        }

                    </View>
                    : null}
                {this.state.navigation.admin !== true && this.state.navigation.chatscreen === "adminscreen" ?
                    <View style={styles.splashvnsview}>
                        <View style={{ height: hp('5%', 812), backgroundColor: '#A47CC3', justifyContent: 'center', alignContent: 'center' }}>
                            <Text style={{ color: '#792BA9', textAlign: 'center', fontSize: widthScale(12), fontFamily: 'silka-medium-webfont', }}>Only {<Text style={{ color: '#fff', textAlign: 'center', fontSize: widthScale(12), fontFamily: 'silka-medium-webfont', }}>Group Admins</Text>} can send messages</Text>
                        </View>
                    </View>
                    : null}


                {/* Menu Model starts */}

                {this.state.showmenu == true ?
                    // <View>
                    //     <Modal
                    //         animationType="fade"
                    //         transparent={true}
                    //         visible={this.state.showmenu}
                    //         onRequestClose={() => {
                    //             this.showmenufn(false);
                    //         }}
                    //     >
                    //         <Pressable style={{
                    //             width: "100%",
                    //             height: "100%",
                    //             backgroundColor: "transperent",
                    //             marginTop: '1%',

                    //         }}
                    //             onPress={() => { this.showmenufn(false) }}
                    //         >
                    //                <View style={{
                    //                 backgroundColor: '#A47CC3',
                    //                 width: 250, height: 250, borderRadius: 15,
                    //                 marginLeft: 'auto', elevation: 50,
                    //                 top: hp('5%', 812),
                    //                 marginRight: '5%',
                    //             }}>
                    //                   <View style={{
                    //                     backgroundColor: '#fff',
                    //                     width: 250,height: 250,
                    //                     borderTopStartRadius: 90,
                    //                     borderBottomRightRadius: 100,
                    //                     borderRadius: 15,
                    //                     //   borderEndWidth:1,
                    //                     //   borderStartWidth:1,
                    //                     //   borderTopWidth:1,
                    //                     //   borderBottomWidth:1,
                    //                     //   borderTopColor:'#640093',
                    //                     //   borderBottomColor:'#640093',
                    //                     //   borderEndColor:'#640093',
                    //                     //   borderStartColor:'#640093',
                    //                 }}>
                    //                      <View style={{marginTop:'10%',marginLeft:'15%',}}>
                    //                 <Pressable style={({ pressed }) => [
                    //                     {
                    //                         backgroundColor: pressed
                    //                             ? '#f2f2f2'
                    //                             : 'white',
                    //                         borderRadius: 8,
                    //                         padding: 6
                    //                     },

                    //                 ]}

                    //                     onPress={() => {
                    //                         this.props.navigation.navigate("BroadcastGroupinfo", {
                    //                             itemId: this.state.navigation.itemId,
                    //                             tittle: this.state.navigation.tittle,
                    //                             grouptext: this.state.navigation.grouptext,
                    //                             otherParam: 'true',
                    //                             uri: this.state.navigation.uri,
                    //                             admin: this.state.navigation.admin
                    //                         });
                    //                         this.showmenufn(false)
                    //                     }}>
                    //                     <Text style={TextStyles.h5purple}>Group Info</Text>
                    //                 </Pressable>
                    //                 <View>
                    //                     <Pressable style={({ pressed }) => [
                    //                         {
                    //                             backgroundColor: pressed
                    //                                 ? '#f2f2f2'
                    //                                 : 'white',
                    //                             borderRadius: 8,
                    //                             padding: 6
                    //                         },

                    //                     ]} onPress={() => { Alert.alert("Search"), this.showmenufn(false) }}>
                    //                         <Text style={TextStyles.h5purple}>Search</Text>
                    //                     </Pressable>
                    //                 </View>
                    //                 <View>
                    //                     <Pressable style={({ pressed }) => [
                    //                         {
                    //                             backgroundColor: pressed
                    //                                 ? '#f2f2f2'
                    //                                 : 'white',
                    //                             borderRadius: 8,
                    //                             padding: 6
                    //                         },

                    //                     ]} onPress={() => { Alert.alert("Mute Notification"), this.showmenufn(false) }}>
                    //                         <Text style={TextStyles.h5purple}>Mute Notification</Text>
                    //                     </Pressable>
                    //                 </View>
                    //                 <View>
                    //                     <Pressable style={({ pressed }) => [
                    //                         {
                    //                             backgroundColor: pressed
                    //                                 ? '#f2f2f2'
                    //                                 : 'white',
                    //                             borderRadius: 8,
                    //                             padding: 6
                    //                         },

                    //                     ]} onPress={() => { Alert.alert("Clear Chat"), this.showmenufn(false) }}>
                    //                         <Text style={TextStyles.h5purple}>Clear Chat</Text>
                    //                     </Pressable>
                    //                 </View>
                    //                 <View>
                    //                     <Pressable style={({ pressed }) => [
                    //                         {
                    //                             backgroundColor: pressed
                    //                                 ? '#f2f2f2'
                    //                                 : 'white',
                    //                             borderRadius: 8,
                    //                             padding: 6
                    //                         },

                    //                     ]} onPress={() => { Alert.alert("Star Messages"), this.showmenufn(false) }}>
                    //                         <Text style={TextStyles.h5purple}>Star Messages</Text>
                    //                     </Pressable>
                    //                 </View>
                    //                 <View>
                    //                     <Pressable
                    //                         style={({ pressed }) => [
                    //                             {
                    //                                 backgroundColor: pressed
                    //                                     ? '#f2f2f2'
                    //                                     : 'white',
                    //                                 borderRadius: 8,
                    //                                 padding: 6
                    //                             },

                    //                         ]} onPress={() => { this.showexitgroupfn(true), this.showmenufn(false) }}>
                    //                         <Text style={TextStyles.h5purple}>Exit Group</Text>
                    //                     </Pressable>
                    //                 </View>
                    //                 </View>
                    //             </View>
                    //             </View>
                    //         </Pressable>
                    //     </Modal>
                    // </View>
                    <View>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.showmenu}
                        onRequestClose={() => {
                            this.showmenufn(false);
                        }}
                    >
                        <Pressable style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "transperent",
                            marginTop: '1%',

                        }}
                            onPress={() => { this.showmenufn(false) }}
                        >
                            {/* <View style={{
                                    height: 'auto', backgroundColor: '#fff',
                                    elevation: 50, marginLeft: 'auto', padding: '2%',
                                  
                                    marginRight: '5%',
                                    width: 231,
                                    top: hp('5%', 812),
                                    borderRadius:30,
                                    // borderTopWidth:20,
                                    // borderTopColor:'cyan',
                                    // borderBottomColor:'cyan',
                                    // borderBottomWidth:10,
                                    // borderLeftWidth:0

                                    

                                }}> */}

                            <View style={{
                                backgroundColor: '#A47CC3',
                                width:wp('55%',812), borderRadius: 15,
                                marginLeft: 'auto', elevation: 50,
                                top: hp('5%', 812),
                                marginRight: '5%',
                            }}>
                                <View style={{
                                    backgroundColor: '#fff',
                                    width:wp('55%',812),
                                    borderTopStartRadius: 90,
                                    borderBottomRightRadius: 100,
                                    borderRadius: 15,
                                    //   borderEndWidth:1,
                                    //   borderStartWidth:1,
                                    //   borderTopWidth:1,
                                    //   borderBottomWidth:1,
                                    //   borderTopColor:'#640093',
                                    //   borderBottomColor:'#640093',
                                    //   borderEndColor:'#640093',
                                    //   borderStartColor:'#640093',
                                }}>
                                    <View style={{marginTop:'10%',marginLeft:'15%',marginBottom:'3%'}}>

                                   
                                    <Pressable
                                        style={({ pressed }) => [
                                            {
                                                // backgroundColor: pressed
                                                //     ? '#f2f2f2'
                                                //     : 'transparent',
                                                //     borderRadius: 8,
                                                    padding: 6
                                              
                                            },

                                        ]}
                                        onPress={() => { Alert.alert("Search"), this.showmenufn(false) }}>
                                        <Text style={TextStyles.h4black}>Search</Text>
                                    </Pressable>
                                    <Pressable
                                        style={({ pressed }) => [
                                            {
                                                // backgroundColor: pressed
                                                //     ? '#f2f2f2'
                                                //     : 'transparent',
                                                // borderRadius: 8,
                                                padding: 6
                                            },

                                        ]}
                                        onPress={() => { Alert.alert("Mute Notification"), this.showmenufn(false) }}>
                                        <Text style={TextStyles.h4black}>Mute Notification</Text>
                                    </Pressable>
                                    <Pressable
                                        style={({ pressed }) => [
                                            {
                                                // backgroundColor: pressed
                                                //     ? '#f2f2f2'
                                                //     : 'transparent',
                                                // borderRadius: 8,
                                                padding: 6
                                            },

                                        ]}
                                        onPress={() => { Alert.alert("Clear Chat"), this.showmenufn(false) }}>
                                        <Text style={TextStyles.h4black}>Clear Chat</Text>
                                    </Pressable>
                                    <Pressable
                                        style={({ pressed }) => [
                                            {
                                                // backgroundColor: pressed
                                                //     ? '#f2f2f2'
                                                //     : 'transparent',
                                                // borderRadius: 8,
                                                padding: 6
                                            },

                                        ]}
                                        onPress={() => { Alert.alert("Star Messages"), this.showmenufn(false) }}>
                                        <Text style={TextStyles.h4black}>Star Messages</Text>
                                    </Pressable>

                                    <Pressable
                                        style={({ pressed }) => [
                                            {
                                                // backgroundColor: pressed
                                                //     ? '#f2f2f2'
                                                //     : 'transparent',
                                                // borderRadius: 8,
                                                padding: 6
                                            },

                                        ]}
                                        onPress={() => { this.showexitgroupfn(true), this.showmenufn(false) }}>
                                                                 <Text style={styles.h5purple}>Delete Group</Text>
                                    </Pressable>

                                </View>
                            </View>



                            {/* <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                                        <Pressable style={({ pressed }) => [
                                            {
                                                backgroundColor: pressed
                                                    ? '#f2f2f2'
                                                    : '#fff',
                                                borderRadius: 8,
                                                padding: 6,
                                                marginRight: '3%'
                                            },

                                        ]} onPress={() => { this.showmenufn(false) }}>
                                            <Text style={TextStyles.oktextstyle}>OK</Text>
                                        </Pressable>

                                    </View> */}
                            {/* </View> */}
                            </View>
                        </Pressable>
                    </Modal>
                </View>





                    : null}
                {/* More modal ends */}

                {/* exit group Model starts */}
                {this.state.exitgroupmenu == true ?
                    <View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.exitgroupmenu}
                            onRequestClose={() => {
                                this.showexitgroupfn(false);
                            }}

                        >
                            <Pressable  style={{
                            width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5);',
                            justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                            position: 'absolute',left:0,bottom:0,top:0,right:0
                        }}
                                onPress={() => { this.showexitgroupfn(false) }}
                            >
                                   <View style={{
                                backgroundColor: '#A47CC3',
                                width:wp('87%',812),borderRadius: 30,
                                justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                                // position: 'absolute',  bottom: 0,

                            }}>
                                <View style={{
                                    backgroundColor: '#fff',
                                    width:wp('87%',812),
                                    borderTopStartRadius: 130,
                                    borderBottomRightRadius: 130,
                                    borderRadius: 30,
                                    //   borderEndWidth:1,
                                    //   borderStartWidth:1,
                                    //   borderTopWidth:1,
                                    //   borderBottomWidth:1,
                                    //   borderTopColor:'#640093',
                                    //   borderBottomColor:'#640093',
                                    //   borderEndColor:'#640093',
                                    //   borderStartColor:'#640093',
                                }}>

                                                                            <Text style={{fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont',justifyContent: 'center',alignContent:'center',alignSelf:'center',textAlign:'center',marginTop:'8%'}}>Are you sure you want to</Text>
                                                                            <Text style={{fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont',justifyContent: 'center',alignContent:'center',alignSelf:'center',textAlign:'center'}}>delete & exit the group?</Text>

                                    <Pressable
                style={({ pressed }) => [{
                    elevation: 10,
                    borderRadius: hp('1%', 812), flexDirection: 'row',
                    justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                    height: hp('10%', 812),
                    backgroundColor: pressed
                        ? '#f2f2f2'
                        : '#fff',
                    marginLeft: '5%', marginRight: '3%', marginBottom: '1%', marginTop: '5%',
                    borderEndColor: "#FFB4B4", borderBottomRightRadius: 30,
                    borderEndWidth: wp(2.5, 812),
                    

                }]}
                
             >



                                    <View style={styles.admincolum}>


<Image style={{
    resizeMode: 'contain', width: wp('15%', 812),
    height: hp('7%', 812),
}} source={require("../../Images/users/vectorpopup.png") }/>
{/* </View> */}

</View>
<View style={styles.adminseccolumn}>
                    <View style={{ flex: 0.2 }}></View>
                    <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'center', }}>
                        <View style={{ flex: 0.6, justifyContent: 'center' }}>
                            <Text numberOfLines={1} style={TextStyles.itemText}>{this.state.navigation.tittle}</Text>
                        </View>
                        <View style={{
                            flex: 0.4, alignContent: 'flex-end', alignItems: 'flex-end', justifyContent: 'center', padding: '1%'
                        }}>
                            <Text numberOfLines={1} style={TextStyles.admintimetext}>3.35pm</Text>
                        </View>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                        <View style={{ flexDirection: 'row', flex: 1, }}>
                            <Image style={{
                                resizeMode: 'contain', width: wp('4%', 812), top: -9,

                            }} source={require('../../Images/Vectorgroup.png')} />
                            <Text numberOfLines={1} style={TextStyles.h7lightwhitetext}>
                                {" "}12{" "}Members
                                </Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, marginRight: '2%', justifyContent: 'space-between' }}>
                            <Image style={{
                                resizeMode: 'contain', width: wp('3%', 812), top: -9

                            }} source={require('../../Images/star.png')} />
                            <Text numberOfLines={1} style={TextStyles.h7lightwhitetext} >
                                {" "}13{" "}Star{" "}Messaages
                              </Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.2, }}></View>
                    <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', width: '100%', flex: 1, marginTop: '-3%', alignItems: 'center', height: '100%', }}>
                        {this.state.navigation.purplecheck ?
                            <View style={{ flexDirection: 'row', width: wp('5%', 812), alignItems: 'center', height: '70%', marginTop: '-3%', }}>
                                <Image style={{ width: wp('3.5%', 812), height: 12, }} source={require('../../Images/purplecheck3x.png')} />
                                <Image style={{ width: wp('3.5%', 812), height: 12, left: wp(-4.5, 812), }} source={require('../../Images/purplecheck3x.png')} />
                            </View>
                            : null}
                        {this.state.navigation.greycheck ?
                            <View style={{ flexDirection: 'row', width: wp('5%', 812), alignItems: 'center', height: '65%', marginTop: '-3%', }}>
                                <Image style={{ width: wp('3.5%', 812), height: 12 }} source={require('../../Images/check3x.png')} />
                                <Image style={{ width: wp('3.5%', 812), height: 12, left: wp(-4.5, 812), }} source={require('../../Images/check3x.png')} />
                            </View>
                            : null}
                        <View style={{ flex: 1, }}>
                            <Text numberOfLines={1} style={TextStyles.memitemText}>{this.state.navigation.message}</Text>
                        </View>

                    </View>
                </View>
                </Pressable>
<View style={{flexDirection:'row',marginTop:'3%',marginLeft:'13%'}}>
                <Image style={{
                                resizeMode: 'contain', width: wp('5%', 812), marginTop:'1%'

                            }} source={require('../../Images/Rectanglebox.png')} />
                            <Text>Delete for all the group members</Text>
                </View>
                <View style={{flexDirection:'row',margin:'5%',justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                <View style={styles.purplebutton}>
                                        <Pressable style={styles. purplebuttonview} onPress={() => { Alert.alert('upload') }}>
                                            <Text style={styles. purplebuttontext}>CANCEL</Text>
                                        </Pressable>
                                    </View>
                                    <View style={styles.redbutton}>
                                        <Pressable style={styles.redbuttonview} onPress={() => { Alert.alert('upload') }}>
                                            <Text style={styles.redbuttontext}>DELETE</Text>
                                        </Pressable>
                                    </View>
                    </View> 
                </View>                   
                                    </View>
                                {/* <View style={{
                                    elevation: 50,   backgroundColor: '#A47CC3',   width: 231, 
                                    position: 'absolute', marginLeft: '5%', marginRight: '5%', width: wp('90%', 812),
                                    padding: '1%',
                                    bottom: hp('45%', 812),
                                    borderRadius: 15,
                                    borderStartWidth: 10, borderStartColor: '#f2f2f2',
                                    borderTopStartRadius: 30, borderBottomEndRadius: 30,
                                    borderEndWidth: 10,
                                    borderEndColor: '#f2f2f2',


                                }}> */}
                                                                           {/* <View style={{ paddingLeft: '2%', paddingTop: '2%', flex: 1, paddingBottom: '1%', }}>
                                            <Text style={{ flex: 1, fontSize: widthScale(12), fontFamily: 'silka-medium-webfont', color: '#800080', }}>Exit "{this.state.navigation.tittle}" group {" ?"}</Text>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', marginLeft: 'auto', }}>
                                            <Pressable style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? '#f2f2f2'
                                                        : 'white',
                                                    borderRadius: 8,
                                                    padding: 6,
                                                    marginRight: '3%'
                                                },

                                            ]} onPress={() => { this.showexitgroupfn(false) }}>
                                                <Text style={TextStyles.oktextstyle}>CANCEL</Text>
                                            </Pressable>
                                            <Pressable style={({ pressed }) => [
                                                {
                                                    backgroundColor: pressed
                                                        ? '#f2f2f2'
                                                        : 'white',
                                                    borderRadius: 8,
                                                    padding: 6,
                                                    marginLeft: '3%', marginRight: '3%'
                                                },


                                            ]} onPress={() => { this.showexitgroupfn(false) }}>
                                                <Text style={TextStyles.oktextstyle}>EXIT</Text>
                                            </Pressable>

                                        </View> */}
                                  
                             
                            </Pressable>
                        </Modal>
                    </View>
                    : null}

                {/* exit group model ends */}

                {/* Document group Model starts */}
                {this.state.attachdocmenu == true ?
                    <View>
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={this.state.attachdocmenu}
                            onRequestClose={() => {
                                this.showattachdocfn(false);
                            }}
                        >
                            <Pressable style={{
                                width: '100%', height: '100%',
                                //  backgroundColor: 'rgba(0, 0, 0, 0.5);'
                                backgroundColor: 'transparent'

                            }}
                                onPress={() => { this.showattachdocfn(false) }}
                            >
                                <View style={{
                                    elevation: 20, backgroundColor: '#fff', width: 'auto', height: 'auto', borderRadius: hp('1%', 812),
                                    borderRadius: 20, position: 'absolute', marginLeft: '5%', marginRight: '5%', width: '90%', bottom: hp('7%', 812)
                                }}>
                                    <ScrollView >
                                        <View style={{ margin: '1%', }}>
                                            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingBottom: '1%', paddingTop: '1%' }}>
                                                <Text style={{ fontSize: RFValue(15, 812), fontFamily: 'silka-medium-webfont', textAlign: 'center', color: '#800080' }}>Upload New</Text>
                                            </View>

                                            <View style={{ flexDirection: 'row', paddingBottom: '1%', paddingTop: '1%' }}>
                                                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                                    <Pressable style={({ pressed }) => [{
                                                        flexDirection: 'column', backgroundColor: pressed
                                                            ? '#f2f2f2' : '#fbce63',
                                                        justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                                                        elevation: 10, borderRadius: hp('2%', 812), height: hp('7%', 812), width: wp('16%', 812)
                                                    }]}
                                                        onPress={() => {
                                                            this.documentsync()
                                                        }}

                                                    >
                                                        <Image style={{
                                                            resizeMode: 'contain', width: wp('6%', 812),
                                                            height: hp('6%', 812),
                                                        }} source={require('../../Images/UI/document.png')} />

                                                    </Pressable>
                                                    <Text style={TextStyles.brocastext}>Document</Text>
                                                </View>
                                                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                                    <Pressable
                                                        style={({ pressed }) => [{
                                                            flexDirection: 'column', backgroundColor: pressed
                                                                ? '#f2f2f2' : '#ff904b',
                                                            justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                                                            elevation: 10, borderRadius: hp('2%', 812), height: hp('7%', 812), width: wp('16%', 812)
                                                        }]}>
                                                        <Image style={{
                                                            resizeMode: 'contain', width: wp('6%', 812),
                                                            height: hp('6%', 812),
                                                        }} source={require('../../Images/UI/camera.png')} />

                                                    </Pressable>
                                                    <Text style={TextStyles.brocastext}>Camera</Text>
                                                </View>
                                                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                                    <Pressable style={({ pressed }) => [{
                                                        flexDirection: 'column', backgroundColor: pressed
                                                            ? '#f2f2f2' : '#F167B1',
                                                        justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                                                        elevation: 10, borderRadius: hp('2%', 812), height: hp('7%', 812), width: wp('16%', 812)
                                                    }]}>
                                                        <Image style={{
                                                            resizeMode: 'contain', width: wp('6%', 812),
                                                            height: hp('6%', 812),
                                                        }} source={require('../../Images/UI/gallary.png')} />

                                                    </Pressable>
                                                    <Text style={TextStyles.brocastext}>Gallery</Text>
                                                </View>
                                                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                                    <Pressable style={({ pressed }) => [{
                                                        flexDirection: 'column', backgroundColor: pressed
                                                            ? '#f2f2f2' : '#69C7FF',
                                                        justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                                                        elevation: 10, borderRadius: hp('2%', 812), height: hp('7%', 812), width: wp('16%', 812)
                                                    }]}>
                                                        <Image style={{
                                                            resizeMode: 'contain', width: wp('6%', 812),
                                                            height: hp('6%', 812),
                                                        }} source={require('../../Images/UI/music.png')} />

                                                    </Pressable>
                                                    <Text style={TextStyles.brocastext}>Audio</Text>
                                                </View>

                                            </View>

                                            <View style={{ flexDirection: 'row', paddingBottom: '1%', paddingTop: '1%' }}>

                                                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                                    <Pressable style={({ pressed }) => [{
                                                        flexDirection: 'column', backgroundColor: pressed
                                                            ? '#f2f2f2' : '#7f44b9',
                                                        justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                                                        elevation: 10, borderRadius: hp('2%', 812), height: hp('7%', 812), width: wp('16%', 812)
                                                    }]}>
                                                        <Image style={{
                                                            resizeMode: 'contain', width: wp('6%', 812),
                                                            height: hp('5%', 812),
                                                        }} source={require('../../Images/UI/location.png')} />

                                                    </Pressable>
                                                    <Text style={TextStyles.brocastext}>Location</Text>
                                                </View>
                                                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                                    <Pressable style={({ pressed }) => [{
                                                        flexDirection: 'column', backgroundColor: pressed
                                                            ? '#f2f2f2' : '#97df6a',
                                                        justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                                                        elevation: 10, borderRadius: hp('2%', 812), height: hp('7%', 812), width: wp('16%', 812)
                                                    }]}>
                                                        <Image style={{
                                                            resizeMode: 'contain', width: wp('6%', 812),
                                                            height: hp('6%', 812),
                                                        }} source={require('../../Images/UI/contact.png')} />

                                                    </Pressable>
                                                    <Text style={TextStyles.brocastext}>Contact</Text>
                                                </View>
                                                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>

                                                </View>
                                                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>

                                                </View>

                                            </View>

                                        </View>




                                    </ScrollView>
                                </View>

                            </Pressable>
                        </Modal>
                    </View>
                    : null}

                {/* Document group model ends */}

            </View>
        )
    }
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
    moreview: { flex: 1, width: wp('9%', 812), alignItems: 'center', justifyContent: 'center', },
    searchview: { flex: 1, width: wp('9%', 812), alignItems: 'center', justifyContent: 'center', },

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
    sendview: { flex: 1, width: wp('10%', 812), marginLeft: 'auto', justifyContent: 'center' },
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
        padding:'2%',
        paddingBottom:'3%'
        // borderTopLeftRadius: 5,
    },
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
    h7lightwhitetext: { fontSize: widthScale(12), color: '#7E8793', fontFamily: 'silka-medium-webfont', },

    RighttalkBubbleSquare: {
        height: "auto",
        backgroundColor: '#E1CDFA',
        elevation: 5,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginRight: '5%',
        // borderTopRightRadius: 1,
        padding:'2%'
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
    adminfirstcolum: { flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', marginLeft: '2%', marginRight: '2%', paddingTop: '2%', paddingBottom: '2%', paddingLeft: '2%' },
    adminseccolumn: { flex: 3, justifyContent: 'center', width: '100%', height: '100%', paddingLeft: '1%' },
    itemText: { flex: 1, fontSize: RFValue(16, 812), color: '#000', fontFamily: 'silka-bold-webfont', marginTop: '6%', },


    purplebutton: {
        borderRadius: hp('5%', 812), backgroundColor: "rgba(164, 124, 195, 1)", height: hp('5%', 812), width: 'auto', justifyContent: 'center', alignContent: 'center', alignItems: 'center', elevation: 10, padding: '1%',
    },
    purplebuttonview: {  width: wp('20%',812),justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '1%', padding: '2%',marginBottom:'1%' },
    purplebuttontext: {
        textAlign: 'center',
        fontSize: RFValue(16, 812),
        color: '#fff',
        fontFamily: 'silka-medium-webfont',
        padding: '3%'
    },
    redbutton: {
        borderRadius: hp('5%', 812), backgroundColor: "rgba(121, 43, 169, 1)", height: hp('5%', 812), width: 'auto', justifyContent: 'center', alignContent: 'center', alignItems: 'center', elevation: 10, padding: '1%',marginLeft:'2%'
    },
    redbuttonview: {  width: wp('20%',812),justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '1%', padding: '2%',marginBottom:'1%' },
    redbuttontext: {
        textAlign: 'center',
        fontSize: RFValue(16, 812),
        color: '#fff',
        fontFamily: 'silka-medium-webfont',
        padding: '3%'
    },
    sendview: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10, },
    h5purple:{ fontSize: RFValue(16, 812), color: '#E00000', fontFamily: 'silka-medium-webfont'},
    admincolum: {  alignItems: 'center', justifyContent: 'center', },
    whitebutton: {
        borderRadius: hp('5%',812), backgroundColor: "#f2f2f2", 
        height: hp('5%',812), width: 'auto', justifyContent: 'center', alignContent: 'center',
         alignItems: 'center', elevation: 10, padding: '3%',
         
    },
    whitebuttonview: {  width: wp('80%',812),justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '1%', padding: '2%',marginBottom:'1%' },
    whitebuttontext: {
        textAlign: 'center',
        fontSize: RFValue(18, 812),
        color: '#792BA9',
        fontFamily: 'silka-medium-webfont',
        padding:'3%'
    },
  
});

export default ChatScreen