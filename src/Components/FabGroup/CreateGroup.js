import React, { Component } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, ImageBackground, Image, StyleSheet, Dimensions, FlatList, Modal, Pressable, TextInput } from 'react-native';
import CssStyles from '../../CssStyles/CssStyles'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import TextStyles from '../../CssStyles/TextStyles';

const formatrowdata = (data) => {
    const numberOfFullRows = Math.floor(data.length);
    let numberOfElementsLastRow = data.length - (numberOfFullRows);
    while (numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};

class CreateGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIds: [],
            refresh: false,
            checked: "first",
            search: '',
            search_name: "",
            showmenu: false,
            selectedcount: 0,
            navigation: this.props.route.params,
            grouplist: [{
                tittle: "Contact Name",
                text: "Mahesh:Loreum ipsum is a text",
                // uri: require("../../Images/users/avatar.png"),
                uri: require("../../Images/vector1.png"),
                click: false,
                id: "0",
                selectedClass: styles.unlist
            },
            {
                tittle: "Contact Name",
                text: "Mahesh:Loreum ipsum is a text",
                uri: require("../../Images/vector2.png"),
                click: false,
                id: "1",
                selectedClass: styles.unlist
            },
            {
                tittle: "Contact Name",
                text: "Mahesh:Loreum ipsum is a text",
                uri: require("../../Images/vector1.png"),
                click: false,
                id: "2",
                selectedClass: styles.unlist
            },
            {
                tittle: "Contact Name",
                text: "Mahesh:Loreum ipsum is a text",
                uri: require("../../Images/vector2.png"),
                click: false,
                id: "3",
                selectedClass: styles.unlist

            },
            {
                tittle: "Contact Name",
                text: "Mahesh:Loreum ipsum is a text",
                uri: require("../../Images/vector1.png"),
                click: false,
                id: "4",
                selectedClass: styles.unlist
            },
            {
                tittle: "Contact Name",
                text: "Mahesh:Loreum ipsum is a text",
                uri: require("../../Images/vector2.png"),
                click: false,
                id: "5",
            },
            {
                tittle: "Contact Name",
                text: "Mahesh:Loreum ipsum is a text",
                uri: require("../../Images/vector1.png"),
                click: false,
                id: "6",
                selectedClass: styles.unlist
            },
            {
                tittle: "Contact Name",
                text: "Mahesh:Loreum ipsum is a text",
                uri: require("../../Images/vector2.png"),
                click: false,
                id: "7",
                selectedClass: styles.unlist
            },
            {
                tittle: "Contact Name",
                text: "Mahesh:Loreum ipsum is a text",
                uri: require("../../Images/vector1.png"),
                click: false,
                id: "8",
                selectedClass: styles.unlist
            },
            {
                tittle: "Contact Name",
                text: "Mahesh:Loreum ipsum is a text",
                uri: require("../../Images/vector2.png"),
                click: false,
                id: "9",
                selectedClass: styles.unlist
            },
            {
                tittle: "Contact Name",
                text: "Mahesh:Loreum ipsum is a text",
                uri: require("../../Images/vector1.png"),
                click: false,
                id: "10",
                selectedClass: styles.unlist
            },

            ],
        };
    }
    componentDidMount(){
        console.log(" create group emptygroup"+this.state.navigation.emptygroup)
    }
    SearchChange(event) {
        if (event !== null && event !== "" && event.length > 0) {
            //   this.SearchData(event);
            console.log("event", event)
        }
    }
    selectItem = (data, id) => {
        let count = 0
        console.log("selectItem before data==id" + id + "==" + JSON.stringify(data))
        data.item.click = !data.item.click;
        data.item.selectedClass = data.item.click ? styles.select : null;
        count = data.item.click ? this.state.selectedcount + 1 : this.state.selectedcount - 1
        // console.log("dataid=="+data.item.id+"==selectedid"+item.id)
        const index = this.state.grouplist.findIndex(
            item => data.item.id === item.id
        );
        this.state.grouplist[index] = data.item;
        console.log("selectItem after data==" + JSON.stringify(this.state.grouplist))
        this.setState({
            grouplist: this.state.grouplist,
            selectedcount: count
        });
    };
    updateSearch = (search) => {
        this.setState({ search });
    };
    showmenufn(value) {
        this.setState({ showmenu: value })
    }
    renderItem = data => {


        return (
            <View>
                <TouchableOpacity style={styles.generalgrid} onPress={() => this.selectItem(data, data.item.id)}>
                    <View style={styles.generalfirstcolum}>
                        <ImageBackground style={{
                            width: wp('10%', 812), height: hp('7%', 812), alignItems: 'flex-end', justifyContent: 'flex-end'
                        }} resizeMode='contain' source={data.item.uri} >
                            {data.item.selectedClass ?
                                <View style={{
                                    flex: 0.2,
                                    position: "absolute",
                                    bottom: -5,
                                    left: 21


                                }}>
                                    <Image resizeMode='center' source={require('../../Images/Group153x.png')} style={data.item.selectedClass} />
                                </View>

                                : null}
                        </ImageBackground>
                    </View>
                    <View style={styles.generalseccolumn}>
                        <Text style={TextStyles.h5purplebold}>{data.item.tittle}</Text>
                        <View style={{ marginTop: '1%' }}>
                            <Text style={TextStyles.h5black}>{data.item.text}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


    renderselecteditem = data => {

        return (
            <View >
                {data.item.selectedClass ?
                    <TouchableOpacity
                        style={{
                            width: '100%', alignContent: 'center', justifyContent: 'center', alignItems: 'center', height: hp('10%'), paddingHorizontal: 8,
                        }}
                        onPress={() => {
                            this.selectItem(data, data.item.id)
                        }}>
                        <ImageBackground style={{
                            width: wp('11%', 812), height: hp('6%', 812), alignItems: 'flex-end', justifyContent: 'flex-end',
                        }} resizeMode='contain' source={data.item.uri} >
                            <View
                                style={{
                                    flex: 1,
                                    position: "absolute",
                                    top: hp('-0.3%', 812),
                                    left: wp('7%', 812)


                                }}
                            >
                                <Image source={require('../../Images/Group163x.png')} style={styles.close} />
                            </View>
                        </ImageBackground>

                        <Text style={styles.h7purplecont} >{data.item.tittle}</Text>
                    </TouchableOpacity>
                    : null}
            </View>

        );
    }


    render() {
        const { search } = this.state;
        return (
            <View style={styles.maincontainer}>
                {/* <View style={{ height: hp('9%'), backgroundColor: '#511D73', }}> */}
                    <ImageBackground style={{ height: hp('9%') }}
                    resizeMode='cover'
                    source={require('../../Images/bg.png')}>
                    <View style={styles.mainfirstview}>
                        <TouchableOpacity style={styles.rounrectview} onPress={() => this.props.navigation.pop()}>
                            <Image style={styles.roundrecimagestyles} source={require('../../Images/back.png')} />
                        </TouchableOpacity>
                        <View style={styles.groupinview}>
                            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'flex-start', }}>
                                <Text style={TextStyles.h3white}>Create Group</Text>
                                {this.state.selectedcount == 0 ?
                                    <Text style={TextStyles.h4whitewof}>Add participents</Text>
                                    :
                                    <Text style={TextStyles.h4whitewof}>{this.state.selectedcount} contacts selected of {this.state.grouplist.length}</Text>
                                }
                            </View>
                        </View>
                        <TouchableOpacity style={styles.searchview} onPress={() => { this.showmenufn(true) }}>
                            <Image style={{
                                resizeMode: 'contain', width: wp('5%', 812),
                                height: hp('5%', 812)
                            }} source={require('../../Images/search.png')} />
                        </TouchableOpacity>
                    </View>
                    {this.state.showmenu == true ?
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
                                    <View style={{ height: hp('9%'), backgroundColor: '#511D73', }}>
                                        <View style={styles.mainfirstview}>
                                            <TouchableOpacity style={styles.rounrectview} onPress={() => this.props.navigation.pop()}>
                                                <Image style={styles.backimagestyles} source={require('../../Images/backarrow.png')} />
                                            </TouchableOpacity>

                                            <View style={{ backgroundColor: "#B388CD", borderWidth: 0.2, borderRadius: 50, borderColor: "#8E8E93", flexDirection: 'row', marginLeft: '1%', width: wp('85%', 812), height: hp('5%', 812) }}>
                                                <View style={{ flex: 6, width: wp('90%', 812), justifyContent: 'center', height: '100%' }}>
                                                    <TextInput
                                                        style={{ fontSize: RFValue(14, 812), fontFamily: 'silka-medium-webfont', color: '#fff', marginLeft: '5%', height: hp('100%', 812) }}
                                                        placeholder="Search Here ....."
                                                        placeholderTextColor="#fff"
                                                        underlineColorAndroid="transparent"
                                                        onChange={event => {
                                                            this.
                                                                SearchChange(
                                                                    event.nativeEvent.text
                                                                )
                                                            this.setState({
                                                                search_name: event.nativeEvent.text
                                                            });
                                                        }}
                                                        value={this.state.search_name}
                                                    />
                                                </View>
                                            </View>

                                        </View>



                                    </View>
                                    {/* <View style={{ height: hp('8%'), width: '100%', backgroundColor: '#fff', elevation: 30, marginLeft: 'auto', flexDirection: 'row', }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                                            <Image source={require('../../Images/arrowleft.png')} style={{
                                                resizeMode: 'contain', width: wp('7%'),
                                                height: hp('7%'),
                                            }} />
                                        </TouchableOpacity>
                                        <View style={styles.groupinviewstyle}>
                                            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', marginLeft: '10%', marginBottom: '2%' }}>
                                                <Text style={{ color: 'grey', fontSize: RFValue(18, 812), fontFamily: 'silka-medium-webfont' }}>Search here..</Text>
                                            </View>
                                        </View>
                                        <View style={styles.groupinview}>
                                        </View>

                                    </View> */}

                                </Pressable>
                            </Modal>
                        </View>
                        : null}
                    </ImageBackground>
                {/* </View> */}
                <View style={{ backgroundColor: '#F1F5FF', }}>
                    {/* <Text>Hello</Text> */}
                    <FlatList
                        data={formatrowdata(this.state.grouplist)}
                        horizontal
                        renderItem={(item) => this.renderselecteditem(item)}
                        keyExtractor={(item) => item.id.toString()}
                        showsHorizontalScrollIndicator={false}

                    />
                </View>

                <Pressable

                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                                ? '#FAF4FF'
                                : 'white',
                            borderRadius: 8,
                            padding: 6,
                            flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '3%'
                        },

                    ]}

                >
                    <View style={{ flex: 0.5, alignItems: 'flex-end', justifyContent: 'center', }}>
                        <Image source={require('../../Images/addmem3x.png')} style={{
                            resizeMode: 'contain', width: wp(9, 812),
                            height: hp('3%', 812),
                        }} />
                    </View>
                    <View style={{ justifyContent: 'center', alignContent: 'center', flex: 3, marginLeft: '1%', alignItems: 'flex-start' }}>
                        <Text style={TextStyles.h5lightpurplebold}>Add New Member</Text>
                    </View>

                </Pressable>

                <View style={{ flex: 1, backgroundColor: '#FAF4FF', }}>
                    <FlatList
                        data={formatrowdata(this.state.grouplist)}
                        style={styles.container}
                        renderItem={(item) => this.renderItem(item)}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                <View style={{
                    flex: 1,
                    position: 'absolute',
                    marginRight: '2%',
                    marginBottom:'2%',
                    right: 0,
                    bottom: 0,

                }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("CreateGroupScreen",{emptygroup:this.state.navigation.emptygroup}) }}>
                    <Image style={{
                                    resizeMode: 'contain', width: wp('15%', 812),
                                    height: hp('10%', 812)
                                }} source={require('../../Images/Group141x.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default CreateGroup;

const styles = StyleSheet.create({
    itemInvisible: {
        elevation: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        borderRadius: 25,
        opacity: 0,
        shadowOffset: { width: 0, height: 0 },
        margin: '1%',
        backgroundColor: 'transparent',
    },
    generalgrid: {
        backgroundColor: '#fff', flexDirection: 'row',
        justifyContent: 'center', alignContent: 'center', alignItems: 'center',
        height: hp('8%', 812),
    },
    generalfirstcolum: { flex: 0.5, alignItems: 'flex-end', justifyContent: 'center', width: '100%', },
    generalseccolumn: { flex: 3, justifyContent: 'space-between', alignItems: 'flex-start', marginLeft: '2%' },
    maincontainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imageiconStyle: {
        width: 10,
        marginTop: wp('10%'),
        marginLeft: 10
    },

    close: {
        resizeMode: 'contain',
        width: wp('6.5%', 812),
        height: hp('4%', 812),
    },

    container: {
        flex: 1,
        // margin: 20,
        backgroundColor: '#fff',
        // height: 450
    },
    select: {

        width: wp('6%', 812),
        height: hp('4%', 812),
    },
    itemText: {
        fontSize: RFValue(16, 812),
        color: '#000',
        fontFamily: 'silka-bold-webfont',

    },
    memitemText: {
        fontSize: RFValue(16, 812),
        color: '#808080',
        fontFamily: 'silka-regular-webfont',


    },

    roundrecimagestyles: {
        resizeMode: 'contain', width: wp('3%'),
        height: hp('3%'),
    },
    backimagestyles: {
        resizeMode: 'contain', width: wp('7%'),
        height: hp('7%'),
    },
    mainfirstview: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', },
    searchview: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10, },
    groupinview: {
        flex: 1, alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center',
    },
    rounrectview: {
        flex: 1, alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center', padding: 10,
    },
    groupinviewstyle: {
        flex: 4, alignItems: 'flex-start', alignContent: 'center', justifyContent: 'center',
    },
    h7purplecont: { color: '#A47CC3', fontSize: RFValue(11, 812), fontFamily: 'silka-medium-webfont', },

})