import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors';
import LoadingModal from './../components/common/LoadingModal';
import InputField from './../components/common/InputField';
import MyAppButton from './../components/common/MyAppButton';

function CreateTicketScreen(props) {


    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Write Subject",
            value: "",
        },
        {
            placeholder: "Write Subject Description",
            // secure: true,
            value: ""
        },

    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        try {
            // API INTEGRATION WILL COME HERE
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };


    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.secondary }}>

            <LoadingModal show={indicator} />
            {/* Nav */}
            <View style={{ width: '100%', height: RFPercentage(21), backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center' }} >
                <View style={{ marginTop: RFPercentage(3), width: '86%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >

                    <TouchableOpacity activeOpacity={0.8}>
                        <Image style={{ width: RFPercentage(3.5), height: RFPercentage(2.5) }} source={require('../../assets/images/noti.png')} />
                    </TouchableOpacity>

                    {/* Nav right icons */}
                    <View style={{ position: 'absolute', right: 0, flexDirection: 'row', alignItems: 'center' }} >
                        {/* user */}
                        <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: RFPercentage(1) }}>
                            <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={require('../../assets/images/user.png')} />
                        </TouchableOpacity>
                        {/* DropDown */}
                        <TouchableOpacity activeOpacity={0.8} style={{ marginLeft: RFPercentage(2) }}>
                            <Image style={{ width: RFPercentage(5.5), height: RFPercentage(5.5) }} source={require('../../assets/images/drop.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Pink Shade */}
            <Image style={{ width: '100%', height: RFPercentage(25) }} source={require('../../assets/images/pinkshade.png')} />

            <View style={{ width: RFPercentage(26.5), height: RFPercentage(6), marginTop: RFPercentage(-20), backgroundColor: Colors.darkRed, borderRadius: RFPercentage(20), justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ color: Colors.white, fontSize: RFPercentage(3.5) }}>
                    Create Ticket
                </Text>
            </View>

            <ImageBackground style={{ marginTop: RFPercentage(2), width: '100%', height: RFPercentage(33), justifyContent: 'flex-start', alignItems: 'flex-start' }} source={require('../../assets/images/lead.png')} >

                <View style={{ marginTop: RFPercentage(5), width: '80%', alignSelf: 'center', justifyContent: 'center', alignItems: 'flex-start' }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.3) }} >
                        Subject
                    </Text>
                </View>

                {/* Input field */}
                <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', width: '85%', marginTop: RFPercentage(3) }}>
                    {inputField.map((item, i) => (
                        <View key={i} style={{ marginTop: i === 0 ? RFPercentage(-2) : 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <Image style={{ width: RFPercentage(4.5), height: RFPercentage(4.5), marginRight: RFPercentage(1.2) }} source={item.iconSource} />
                            <InputField
                                placeholder={item.placeholder}
                                backgroundColor={Colors.darkRed}
                                placeholderColor={'#F5F3EE80'}
                                borderWidth={RFPercentage(0.1)}
                                borderColor={Colors.darkRed}
                                height={i == 1 ? RFPercentage(20) : RFPercentage(6)}
                                placeholderAtCenter={false}
                                secure={item.secure}
                                atStartPlaceholder={i == 1 ? true : false}
                                borderRadius={RFPercentage(1.2)}
                                fontSize={RFPercentage(2)}
                                handleFeild={(text) => handleChange(text, i)}
                                value={item.value}
                                width={"100%"}
                                color={Colors.white}
                            />
                        </View>
                    ))}
                </View>

                <TouchableOpacity activeOpacity={0.8} style={{ marginTop: RFPercentage(3), width: '80%', alignSelf: 'center', justifyContent: 'center', alignItems: 'flex-start' }} >
                    <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(14), height: RFPercentage(4) }} source={require('../../assets/images/bb.png')}  >
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2.2) }} >
                            Submit
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>

            </ImageBackground>

            {/* Bottom tab */}
            <BottomTab props={props} />

        </View>
    );
}

export default CreateTicketScreen;