import React from 'react'
import { Component } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground, Image, PixelRatio, Alert, TextInput, LogBox, Modal, Pressable } from 'react-native';
import CssStyles from '../../CssStyles/CssStyles'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Switchtoggle from '../UI/Switchtoggle'
import TextStyles from '../../CssStyles/TextStyles';

const images = [
    {
        id: "0",
        uri: require('../../Images/Rectangle.png'),
        click: false,
    },
    {
        id: "1",
        uri: require('../../Images/uploaddoc.png'),
        click: false,
    },
    {
        id: "2",
        uri: require('../../Images/vnslogo.png'),
        click: false,
    },
    {
        id: "3",
        uri: require('../../Images/group1.png'),
        click: false,
    },
    {
        id: "4",
        uri: require('../../Images/vector1.png'),
        click: false,
    },
    {
        id: "5",
        uri: require('../../Images/vector2.png'),
        click: false,
    },
    {
        id: "6",
        uri: require('../../Images/bluevector.png'),
        click: false,
    },

]
const profiledata = [{
    tittle: "Message John Doe",
    uri: require("../../Images/message-circle.png"),
    click: false,
    id: "0",
    admin: true

},
{
    tittle: "View John Doe",
    uri: require("../../Images/blackeye.png"),
    click: false,
    id: "1",
    admin: true

},
{
    tittle: "Make Group Admin",
    uri: require("../../Images/user-check.png"),
    click: false,
    id: "2",
    admin: true

},
{
    tittle: "Add in Other Group",
    uri: require("../../Images/users.png"),
    click: false,
    id: "3",
    admin: true

},
{
    tittle: "Block John Doe",
    uri: require("../../Images/slash.png"),
    click: false,
    id: "4",
    admin: true

},
{
    tittle: "Remove John Doe",
    uri: require("../../Images/blacklog-out.png"),
    click: false,
    id: "5",
    admin: true

},

]
class GroupInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: this.props.route.params,
            message_name: "",
            switchValue: '',
            creategroupmenu: false,
            grouplist: [{
                tittle: "Contact Name",
                text: "Loreum ipsum is a text",
                uri: require("../../Images/vector1.png"),
                click: false,
                id: "0",
                selectedClass: styles.unlist,
                admin: true

            },
            {
                tittle: "Contact Name",
                text: "Loreum ipsum is a text",
                uri: require("../../Images/vector2.png"),
                click: false,
                id: "1",
                selectedClass: styles.unlist,
                admin: true
            },
            {
                tittle: "Contact Name",
                text: "Loreum ipsum is a text",
                uri: require("../../Images/vector1.png"),
                click: false,
                id: "2",
                selectedClass: styles.unlist,
                admin: true
            },
            {
                tittle: "Contact Name",
                text: "Loreum ipsum is a text",
                uri: require("../../Images/vector2.png"),
                click: false,
                id: "3",
                selectedClass: styles.unlist

            },
            {
                tittle: "Contact Name",
                text: "Loreum ipsum is a text",
                uri: require("../../Images/vector1.png"),
                click: false,
                id: "4",
                selectedClass: styles.unlist
            },
            {
                tittle: "Contact Name",
                text: "Loreum ipsum is a text",
                uri: require("../../Images/vector2.png"),
                click: false,
                id: "5",
                selectedClass: styles.unlist

            },




            ],

        }
    }
    componentDidMount() {
        console.log(this.state.navigation),
            LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }
    toggleSwitch = (value) => {
        this.setState({ switchValue: value });
        return this.state.switchValue ? null : null;
    }
    showcreategroupfn(value) {
        this.setState({ creategroupmenu: value })
    }

    renderselecteditem = ({ item, id }) => {

        return (
            <View key={item.id}>
                <Image
                    source={item.uri}
                    style={{
                        resizeMode: 'contain', width: wp('20%', 812), height: hp('10%', 812),
                    }}

                />
            </View>


        );
    }
    renderItem = data => {


        return (

            <TouchableOpacity style={styles.generalgrid} onPress={() => this.showcreategroupfn(true)} key={data.item.id}>
                <View style={styles.generalfirstcolum}>
                    <Image style={{
                        resizeMode: 'contain', width: wp('13%'),
                        height: hp('10%')
                    }} source={data.item.uri} />
                </View>
                <View style={styles.generalseccolumn}>
                    <Text style={styles.itemText}>{data.item.tittle}</Text>
                    <Text style={styles.memitemText}>{data.item.text}</Text>
                </View>
                <View style={styles.generalthirdcolumn}>
                    {data.item.admin ?
                        <Text style={{ color: '#792BA9', fontFamily: 'silka-Regular-webfont', textAlign: 'right', fontSize: RFValue(16, 812), }}>Admin</Text>
                        : null}
                </View>
            </TouchableOpacity>

        )
    }

    renderprofileItem = ({ item, id }) => {


        return (

            <Pressable   style={({ pressed }) => [
                {
                  backgroundColor: pressed
                  ? '#f2f2f2'
                  : '#fff'
              , flexDirection: 'row',
                justifyContent: 'center', alignContent: 'center', alignItems: 'center',
                height: hp('6%',812), borderRadius:50,borderColor:'#792BA9',borderWidth:1,marginLeft:'5%',marginRight:'5%',width:wp('90%',812),marginTop:'3%'}
              ]}onPress={() => Alert.alert("clicked")} key={id}>
                <View style={styles.generalfirstcolum}>
                    <Image style={{
                        resizeMode: 'contain', width: wp('5%'),
                        height: hp('5%')
                    }} source={item.uri} />
                </View>
                <View style={styles.generalseccolumn}>
                    <Text style={TextStyles.h4black}>{item.tittle}</Text>
                </View>
                {/* <View style={styles.generalthirdcolumn}>
                    {data.item.admin ?
                        <Text style={{ color: '#792BA9', fontFamily: 'silka-Regular-webfont', textAlign: 'right', fontSize: RFValue(16, 812), }}>Admin</Text>
                        : null}
                </View> */}
            </Pressable>

        )
    }

    render() {
        return (
            <ScrollView style={styles.maincontainer}>
                <ImageBackground style={CssStyles.backgroundImage, { height: hp('30%') }}
                    resizeMode='cover'
                    source={require('../../Images/bg.png')}>
                    <View style={styles.mainfirstview}>
                        <View style={{ flexDirection: 'column', flex: 1, alignItems: 'flex-start', width: '50%', marginLeft: '2%' }}>
                            <TouchableOpacity style={styles.rounrectview} onPress={() => this.props.navigation.pop()}>
                                <Image style={styles.roundrecimagestyles} source={require('../../Images/back.png')} />
                            </TouchableOpacity>

                            <View style={styles.groupinview}>
                                {/* <Image style={{
                          resizeMode: 'contain', width: wp('16%'),
                                height: hp('10%'),
                            }} source={require('../../Images/ellipse4.png')} /> */}
                                <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'flex-start', }}
                                    onPress={() => {
                                        this.props.navigation.navigate("GroupInfoScreen", {
                                            itemId: this.state.navigation.itemId,
                                            tittle: this.state.navigation.tittle,
                                            grouptext: this.state.navigation.grouptext,
                                            otherParam: 'true',
                                        });
                                    }}
                                >
                                     <Text
                                numberOfLines={1} style={[TextStyles.h3white,{flex:0.4,width:wp('60%',812)}]}
                            >
                                {this.state.navigation.tittle}</Text>
                            <Text
                                style={[TextStyles.h5blackcenter,{color:'#fff'}]}
                            >{this.state.navigation.grouptext}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end', marginRight: '2%' }}>
                            <View style={styles.userplusview}>
                                <TouchableOpacity onPress={() => { Alert.alert("Userplus clicked") }}>
                                    <Image style={{
                                        resizeMode: 'contain', width: wp('7%'),
                                        height: hp('7%'),
                                    }} source={require('../../Images/user-plus.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.editview}>
                                <TouchableOpacity onPress={() => { Alert.alert("edit clicked") }}>
                                    <Image style={{
                                        resizeMode: 'contain', width: wp('7%'),
                                        height: hp('6%'),
                                    }} source={require('../../Images/edit.png')} />
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>
                </ImageBackground>
                <View style={styles.cardview}>
                    <Text style={TextStyles.h4purpletext}>
                        Add Group Description
                </Text>
                </View>
             
                <View style={styles.cardview}>
                    <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.toggletextcolor}>
                          Mute Notifications
                        </Text>
                        <View style={styles.toggleview}>
                            <Switchtoggle
                                toggleSwitch={this.toggleSwitch}
                                switchValue={this.state.switchValue}
                            />
                        </View>
                    </View>

                </View>
                <View style={styles.cardview}>
                    <Text style={TextStyles.h4purpletext}>
                        Add Member in Group
                </Text>
                </View>
                <View style={styles.cardview}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={TextStyles.h4purpletextcenter}>
                            Media,links,{'&'}docs
                        </Text>
                        <View style={styles.toggleview}>
                            <Text style={TextStyles.h4lightwhitecenter}>
                                35 Files
                        </Text>
                        </View>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("DocumentScreen")}>
                        <FlatList
                            key="3"
                            data={images}
                            renderItem={this.renderselecteditem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                        />
                     </TouchableOpacity>
                    </View>
                  
                </View>

                <View style={styles.cardview}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={TextStyles.h4purpletext}>
                            {this.state.grouplist.length}{" "}Members
                        </Text>
                        {/* <View style={styles.toggleview}> */}
                            <TouchableOpacity style={{flex:1,marginLeft: '70%',justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center',}} onPress={() => { Alert.alert("search clicked") }}>
                                <Image style={{
                                    resizeMode: 'contain',width: wp('5%'),
                                    height: hp('3%')
                                }} source={require('../../Images/purplesearch.png')} />
                            </TouchableOpacity>
                        {/* </View> */}
                    </View>

                    <FlatList
                        key="1"
                        data={this.state.grouplist}
                        style={styles.container}
                        renderItem={(item) => this.renderItem(item)}
                        keyExtractor={(item) => item.id.toString()}
                    />


                </View>
                <View style={{ flexDirection: 'row', width: '100%', padding: '3%', justifyContent: 'space-around', }}>

                    <TouchableOpacity style={CssStyles.cardbuttonview} onPress={() => Alert.alert("Exit group clicked")}>
                        <Image
                            style={{
                                resizeMode: 'contain',width: wp('5%'),
                                height: hp('5%')
                            }}
                            source={require('../../Images/log-out.png')}
                        />
                        <Text style={CssStyles.cardbuttontext}>Exit Group</Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={CssStyles.cardbuttonview} onPress={() => Alert.alert("Report clicked")}>
                        <Image
                            style={{
                                resizeMode: 'contain',width: wp('5%'),
                                height: hp('5%')
                            }}
                            source={require('../../Images/thumbs-down.png')}
                        />
                        <Text style={CssStyles.cardbuttontext}>Report</Text>

                    </TouchableOpacity>


                </View>
                 {/* profile Modal starts  */}
                 <View>
                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={this.state.creategroupmenu}
                        onRequestClose={() => {
                            this.showcreategroupfn(false);
                        }}
                    >
                        <Pressable style={{
                            width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5);'

                        }}
                            onPress={() => { this.showcreategroupfn(false) }}
                        >
                            <View style={{
                                elevation: 50, backgroundColor: '#fff', width: wp('100%',812), height: hp('75%',812),borderTopLeftRadius:20,borderTopRightRadius:20,
                                 position: 'absolute', bottom: 0,
                            }}>
                                <ScrollView >
                                    <Pressable style={{ marginLeft: 'auto', width: 'auto', marginRight: '5%',}} onPress={() => { this.showcreategroupfn(false) }}>
                                        <Image style={{
                                            resizeMode: 'contain', width: wp('5%',812),
                                            height: hp('5%',812)
                                        }} source={require('../../Images/x-circle.png')} />
                                    </Pressable>
                                    <View style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                                        <ImageBackground 
                                        source={require('../../Images/whiteellipse.png')}
                                        resizeMode='contain'
                                         style={{width: wp('35%'),
                                            height: hp('15%'),alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                                        <Image style={{
                                            resizeMode: 'contain', width: wp('9%'),
                                            height: hp('10%'),
                                        }} source={require('../../Images/Vectoricon.png')} />
                                        </ImageBackground>
                                        
                                        <Text
                                            style={TextStyles.h4black}
                                        >John Doe</Text>
                                        <Text
                                            style={TextStyles.h4black}
                                        >+91 9393333535</Text>
                                    </View>
                                    <FlatList
                                        key="4"
                                        data={profiledata}
                                        style={styles.container}
                                        renderItem={(item) => this.renderprofileItem(item)}
                                        keyExtractor={(item) => item.id.toString()}
                                    />
                                </ScrollView>
                            </View>
                        </Pressable>
                    </Modal>
                </View>

                {/* Profile modal ends */}

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    maincontainer: { flex: 1, backgroundColor: '#FAF4FF' },
    // Header style starts
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },


    rounrectview: {
        flex: 1, alignItems: 'flex-start', alignContent: 'space-around', justifyContent: 'flex-start',
    },
    roundrecimagestyles: {
        resizeMode: 'contain', width: wp('5%'),
        height: hp('3%')
    },
    counttext: { color: '#fff', fontWeight: 'normal', fontFamily: 'silka-medium-webfont', },
    editview: { flex: 1, alignItems: 'flex-end', marginTop: 'auto', position: 'absolute', bottom: 0 },
    userplusview: { flex: 1, alignItems: 'flex-end', position: 'absolute', top: 0 },
    groupinview: {
        position: 'absolute', bottom: 0,
        alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', marginTop: 'auto',
    },

    mainfirstview: { flex: 1, flexDirection: 'row' },


    //  style starts

    cardview: { elevation: 10, backgroundColor: '#fff', borderRadius: 10, marginLeft: '5%', padding: '2%', marginRight: '5%', marginTop: '2%', },
    toggleview: { marginLeft: 'auto',justifyContent: 'flex-start', alignContent: 'center', alignItems: 'center',},
    generalgrid: {
        backgroundColor: '#fff', flexDirection: 'row',
        justifyContent: 'center', alignContent: 'center', alignItems: 'center',
        height: hp('10%'),
    },
    generalfirstcolum: { flex: 1, alignItems: 'center', marginLeft: '2%', justifyContent: 'center', },
    generalseccolumn: { flex: 3, justifyContent: 'center' },
    generalthirdcolumn: { flex: 1, marginRight: '1%', alignItems: 'center', justifyContent: 'center', alignContent: 'center', },
    maincontainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    shortcardview: {
        elevation: 10, height: hp('5%', 812),
        backgroundColor: '#fff', borderRadius: 10,
        width: wp('40%', 812), flexDirection: 'row',
        justifyContent: 'center', alignContent: 'center', alignItems: 'center',
    },
    // modal styles
    profileitemText: {
        fontSize: RFValue(16, 812),
        color: '#000',
        fontFamily: 'silka-medium-webfont',
    },
    profilegeneralgrid: {
        backgroundColor: '#fff', flexDirection: 'row',
        justifyContent: 'center', alignContent: 'center', alignItems: 'center',
        height: hp('6%',812), borderRadius:50,borderColor:'#792BA9',borderWidth:1,marginLeft:'5%',marginRight:'5%',width:wp('90%',812),marginTop:'3%'
    },
    itemText: { fontSize: RFValue(16, 812), color: '#000', fontFamily: 'silka-bold-webfont', },
    memitemText: { fontSize: RFValue(16, 812), color: '#333333', fontFamily: 'silka-medium-webfont',},
    toggletextcolor:{ fontSize: RFValue(16, 812), fontFamily: 'silka-medium-webfont', color: '#792BA9', textAlign: 'center',marginTop:'2%'  },

});

export default GroupInfoScreen;