import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import LoadingModal from './../components/common/LoadingModal';
import InputField from './../components/common/InputField';

//config
import Colors from '../config/Colors';

function LoginScreen(props) {


    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Name",
            iconSource: require('../../assets/images/account.png'),
            value: "",
        },
        {
            placeholder: "Password",
            iconSource: require('../../assets/images/lock.png'),
            secure: true,
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
        <Screen style={styles.screen}>

            <LoadingModal show={indicator} />

            {/* logo */}
            <Image source={require('../../assets/images/logo.png')} style={{ marginTop: RFPercentage(6), width: RFPercentage(28), height: RFPercentage(9.2) }} />

            {/* Main Login Fields View */}
            <View style={{ width: "80%", marginTop: RFPercentage(7), height: RFPercentage(58), borderRadius: RFPercentage(3), backgroundColor: Colors.secondary, justifyContent: "flex-start", alignItems: 'center', alignSelf: 'center' }} >
                <View style={{ width: '80%', marginTop: RFPercentage(12), justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }} >

                    {/* Input field */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i === 0 ? RFPercentage(-2) : RFPercentage(2), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                <Image style={{ width: RFPercentage(4.5), height: RFPercentage(4.5), marginRight: RFPercentage(1) }} source={item.iconSource} />
                                <InputField
                                    placeholder={item.placeholder}
                                    backgroundColor={"#5B0038"}
                                    placeholderColor={Colors.grey}
                                    borderWidth={RFPercentage(0.1)}
                                    borderColor={'#5B0038'}
                                    height={RFPercentage(5.8)}
                                    placeholderAtCenter={false}
                                    secure={item.secure}
                                    borderRadius={RFPercentage(10)}
                                    fontSize={RFPercentage(2)}
                                    handleFeild={(text) => handleChange(text, i)}
                                    value={item.value}
                                    width={"90%"}
                                    color={Colors.white}
                                />
                            </View>
                        ))}
                    </View>
                </View>

                {/* Buttons */}
                <View activeOpacity={0.8} style={{ position: 'absolute', bottom: RFPercentage(5), width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                    {/* Login */}
                    <TouchableOpacity activeOpacity={0.8} >
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(3.8) }} >
                            Login
                        </Text>
                    </TouchableOpacity>
                    {/* Forget button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(4) }}>
                        <MyAppButton
                            title="Forget Password"
                            padding={RFPercentage(1)}
                            backgroundColor={Colors.darkRed}
                            fontSize={RFPercentage(2)}
                            color={Colors.white}
                            bold={false}
                            borderRadius={RFPercentage(20)}
                            width={"45%"}
                        />
                    </View>
                </View>
            </View>
            {/* Bottom shade */}
            <Image style={{ marginTop: RFPercentage(0.1), width: '100%', height: RFPercentage(8) }} source={require('../../assets/images/bottom.png')} />

        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.primary
    },
})

export default LoginScreen;