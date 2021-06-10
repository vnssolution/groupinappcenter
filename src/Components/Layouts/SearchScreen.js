import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Dimensions, ImageBackground, Image, PixelRatio, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CssStyles from '../../CssStyles/CssStyles';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextStyles from "../../CssStyles/TextStyles";

const data = [{
    tittle: "Group Name",
    grnumber: "23",
    click: "true",
    id: "1",
    uri: require("../../Images/vector1.png"),
    color: "#ffb6c1",
    time: "3:32pm",
    text: "Mahesh:Loreum ipsum is a text",
    countvalue: true,
    count: 15
},
{
    tittle: "Group Name",
    grnumber: "30",
    click: "true",
    id: "2",
    uri: require("../../Images/vector2.png"),
    color: "#ffa07a",
    time: "3:32pm",
    text: "Mahesh:Loreum ipsum is a text",
    countvalue: true,
    count: 15
},
{
    tittle: "Group Name",
    grnumber: "13",
    click: "true",
    id: "3",
    uri: require("../../Images/vector1.png"),
    color: "#9370db",
    time: "3.32pm",
    text: "Mahesh:Loreum ipsum is a text",
    countvalue: true,
    count: 5
},
{
    tittle: "Group Name",
    grnumber: "78",
    click: "true",
    id: "4",
    uri: require("../../Images/vector2.png"),
    color: "#f08080",
    time: "3.32pm",
    text: "Mahesh:Loreum ipsum is a text"
},
{
    tittle: "Group Name",
    grnumber: "87",
    click: "true",
    id: "5",
    uri: require("../../Images/vector1.png"),
    color: "#b0c4de",
    time: "3.32pm",
    text: "Mahesh:Loreum ipsum is a text"
},
{
    tittle: "Group Name",
    grnumber: "45",
    click: "true",
    id: "6",
    uri: require("../../Images/vector2.png"),
    color: "#ffdab9",
    time: "3.32pm",
    text: "Mahesh:Loreum ipsum is a text"
},
{
    tittle: "Group Name",
    grnumber: "42",
    click: "true",
    id: "7",
    uri: require("../../Images/vector1.png"),
    color: "#f5deb3",
    time: "3.32pm",
    text: "Mahesh:Loreum ipsum is a text"
},
{
    tittle: "Group Name",
    grnumber: "33",
    click: "true",
    id: "8",
    uri: require("../../Images/vector2.png"),
    color: "#98fb98",
    time: "3.32pm",
    text: "Mahesh:Loreum ipsum is a text"
},
{
    tittle: "Group Name",
    grnumber: "34",
    click: "true",
    id: "9",
    uri: require("../../Images/vector1.png"),
    color: "#f08080",
    time: "3.32pm",
    text: "Mahesh:Loreum ipsum is a text"
},
{
    tittle: "Group Name",
    grnumber: "32",
    click: "true",
    id: "10",
    uri: require("../../Images/vector2.png"),
    color: "#e0ffff",
    time: "3.32pm",
    text: "Mahesh:Loreum ipsum is a text"
},
{
    tittle: "Group Name",
    grnumber: "32",
    click: "true",
    id: "11",
    uri: require("../../Images/vector1.png"),
    color: "#b0c4de",
    time: "3.32pm",
    text: "Mahesh:Loreum ipsum is a text"
},
{
    tittle: "Group Name",
    grnumber: "32",
    click: "true",
    id: "21",
    uri: require("../../Images/vector2.png"),
    color: "#ffa07a",
    time: "3.32pm",
    text: "Mahesh:Loreum ipsum is a text"
},
{
    tittle: "Group Name",
    grnumber: "32",
    click: "true",
    id: "22",
    uri: require("../../Images/vector1.png"),
    color: "#48d1cc",
    time: "3.32pm",
    text: "Mahesh:Loreum ipsum is a text"
},



];
const formatrowdata = (data,) => {
    const numberOfFullRows = Math.floor(data.length);

    let numberOfElementsLastRow = data.length - (numberOfFullRows);
    while (numberOfElementsLastRow !== 0) {
        data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow++;
    }

    return data;
};

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_name: ""
        }
    }
    SearchChange(event) {
        if (event !== null && event !== "" && event.length > 0) {
            //   this.SearchData(event);
            console.log("event", event)
        }
    }
    rendergeneralItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.itemInvisible]} />;
        }
        return (
            <TouchableOpacity style={styles.generalgrid} onPress={() => { console.log("pressed == " + item.id) }}>
                <View style={styles.generalfirstcolum}>
                    <Image style={{
                        resizeMode: 'contain', width: wp('11%', 812),
                        height: hp('7%', 812)
                    }} source={item.uri} />
                </View>
                <View style={styles.generalseccolumn}>
                    <Text style={TextStyles.h5purplebold}>{item.tittle}</Text>
                    <View style={{ marginTop: '1%' }}>
                        <Text style={TextStyles.h5black}>{item.text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.maincontainer}>
                {/* <View style={{ height: hp('10%', 812), backgroundColor: '#511D73', backgroundGradient: 'vertical' }}> */}
                <ImageBackground style={{ height: hp('10%', 812) }}
                    resizeMode='cover'
                    source={require('../../Images/bg.png')}>
                    <View style={styles.mainfirstview}>
                        <TouchableOpacity style={styles.rounrectview} onPress={() => this.props.navigation.pop()}>
                            <Image style={styles.roundrecimagestyles} source={require('../../Images/back.png')} />
                        </TouchableOpacity>
                        <View style={{ backgroundColor: "#B388CD", borderWidth: 0.2, borderRadius: 50, borderColor: "#8E8E93", flexDirection: 'row', marginLeft: '1%', width: wp('85%', 812), height: hp('6%', 812) }}>
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

                </ImageBackground>


                {/* </View> */}

                <View style={{ flex: 3, backgroundColor: '#F7FCFC',marginTop:'5%' }}>
                    <FlatList
                        data={formatrowdata(data)}
                        style={styles.container}
                        renderItem={this.rendergeneralItem}

                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    maincontainer: { flex: 1, backgroundColor: '#fff', },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    item: {
        flex: 1,
        elevation: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: Dimensions.get('window').width, // approximate a square,
        borderRadius: 25,
        shadowOffset: { width: 0, height: 0 },
        margin: '1%',

    },
    itemInvisible: {
        elevation: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: Dimensions.get('window').width, // approximate a square,
        borderRadius: 25,
        opacity: 0,
        shadowOffset: { width: 0, height: 0 },
        margin: '1%',
        backgroundColor: 'transparent',
    },
    itemText: {
        fontSize: RFValue(16, 812),
        color: '#000',
        fontFamily: 'silka-bold-webfont',

    },
    memitemText: {
        fontSize: RFValue(16, 812),
        color: '#808080',
        fontFamily: 'silka-medium-webfont',
        marginTop: wp('2%')


    },
    roundrecimagestyles: {
        resizeMode: 'contain', width: wp('3%', 812),
        height: hp('3%', 812),
    },
    counttext: { color: '#fff', fontWeight: 'normal', fontFamily: 'silkamedium', },
    rounrectview: { flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: '3%', padding: '2%', },
    mainfirstview: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' },
    ellipsebackground: {
        flex: 1, height: 50, width: 50, alignItems: 'center', alignContent: 'center', justifyContent: 'center'
    },
    generalgrid: {
        backgroundColor: '#fff', flexDirection: 'row', marginLeft: 10,
        marginRight: 10, justifyContent: 'center', alignContent: 'center', alignItems: 'center',
        height: hp('7%', 812),
    },
    generalfirstcolum: { flex: 0.7, alignItems: 'center', justifyContent: 'center', alignContent: 'center' },
    generalseccolumn: { flex: 3, justifyContent: 'center' },
    generalthirdcolumn: { flex: 1, alignItems: 'center', marginRight: '2%', marginVertical: '2%' },
});

