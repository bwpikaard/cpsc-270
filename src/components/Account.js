import React, { Component } from "react";
import "react-native-gesture-handler";
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
Stack.Navigator.defaultProps = {
    headerMode: "none",
};

const Account = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="accountInfo">
                <Stack.Screen name="accountInfo" component={AccountInfo} />
                <Stack.Screen name="accountDetails" component={AccountDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const AccountInfo = ({ navigation }) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-login.jpg")}
                style={page.background}>
                <Image
                    style={page.logo}
                    source={require("../assets/images/logo.png")}
                />
                <View style={page.utilityBox}>
                    <View style={page.form}>
                        <Text style={page.title}>Create Account</Text>
                        <View style={page.formContent}>
                            <TextInput
                                style={page.userInput}
                                onChangeText={text => setUsername(text)}
                                value={username}
                                placeholder="Username..."
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={page.userInput}
                                onChangeText={text => setPassword(text)}
                                value={password}
                                placeholder="Password..."
                                placeholderTextColor="black"
                            />
                            <TouchableOpacity onPress={() => navigation.navigate("accountDetails")}>
                                <View style={page.loginButton}>
                                    <Text style={page.loginText}>Continue</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={page.returnButton}>Returning User? Login Here!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const AccountDetails= props => {
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    return (
        <View style={page.container}>
            <ImageBackground
                source={require("../assets/images/background-login.jpg")}
                style={page.background}>
                <View style={page.longUtilityBox}>
                    <View style={page.form}>
                        <Text style={page.title}>Create Account</Text>
                        <View style={page.formContent}>
                            <TextInput
                                style={page.userInput}
                                onChangeText={text => setFirstName(text)}
                                value={firstName}
                                placeholder="First Name"
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={page.userInput}
                                onChangeText={text => setLastName(text)}
                                value={lastName}
                                placeholder="Last Name"
                                placeholderTextColor="black"
                            />
                            <TextInput
                                style={page.userInput}
                                onChangeText={text => setPhoneNumber(text)}
                                value={phoneNumber}
                                placeholder="Phone Number"
                                placeholderTextColor="black"
                                keyboardType={"number-pad"}
                            />
                            <TouchableOpacity>
                                <View style={page.loginButton}>
                                    <Text style={page.loginText}>Join Reel</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};


const page = StyleSheet.create({
    background: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",

    },
    logo: {
        resizeMode: "contain",
        height: 150,
        width: "100%",
    },
    container: {
        flex: 1,
        flexDirection: "row",
    },
    utilityBox: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
    },
    longUtilityBox: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        height: 400,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        fontSize: 22,
    },
    form: {
        backgroundColor: "transparent",
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 8,
        padding: "5%",
        paddingBottom: "1%",
        marginTop: "1%",
        width: "70%",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
    },
    formContent: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        width: "100%",
    },
    userInput: {
        width: "100%",
        maxWidth: "100%",
        overflow: "hidden",
        backgroundColor: "#B0C4DE",
        borderRadius: 4,
        padding: "3%",
        marginBottom: "2%",
    },
    loginButton: {
        backgroundColor: "#FFFFFF",
        borderRadius: 4,
        padding: "4%",
        marginBottom: "4%",
        width: "100%",
    },
    loginText: {
        color: "black",
        textAlign: "center",
    },
    returnButton: {
        textAlign: "center",
        color: "white",
        opacity: 0.6,
        textDecorationLine: "underline",
    },
});

export default Account;