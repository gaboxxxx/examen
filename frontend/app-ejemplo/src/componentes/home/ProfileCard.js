import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const twitter = <Icon name={'twitter'} size={30} color={'blue'}/>
const facebook = <Icon name={'facebook'} size={30} color={'blue'}/>
const instagram = <Icon name={'instagram'} size={30} color={'blue'}/>
const linkedin = <Icon name={'linkedin'} size={30} color={'blue'}/>
const kway = <Icon name={'codepen'} size={30} color={'blue'}/>
const ProfileCard = () => {
    const user = {
        avatar: "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/339116603_1992309891161026_6354341414654339865_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeGs5HfX4GMYVkBHGGK_2WhQCkJNmtWxHosKQk2a1bEei-G43LQ6ojU6S25EtzbkkUes0vU5Tot-41jTCztdIkLI&_nc_ohc=bC_hcbRfIQcAX-nFnPT&_nc_ht=scontent.fuio13-1.fna&oh=00_AfCVaV-0GAMlVafww0gQ1mIHJuqYtrKALbtPMOYWna8vBw&oe=65DB5AFE",
        coverPhoto: "https://media.istockphoto.com/id/1623303770/es/foto/la-imagen-de-fondo-creativa-es-luces-borrosas-de-la-ciudad-por-la-noche-y-nevadas-ligeras.webp?b=1&s=170667a&w=0&k=20&c=VNzUllcfbq0eZY5AAjqnpTT0IiVmxuNc2cvauyKLWQc=",
        name: "Diego Flores"
    }
    return (
        <View style={styles.container}>
            <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
            <View style={styles.avatarContainer}>
                <Image source={{uri: user.avatar}} style={styles.avatar}/>
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://facebook.com/')
                }}>
                    {facebook}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://twitter.com/')
                }}>
                    {twitter}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://instagram.com/')
                }}>
                    {instagram}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://linkedin.com/')}>
                    {linkedin}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://www.kwai.com/es')}>
                    {kway}
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        alignItems: 'center' //flex y grid
    },
    coverPhoto: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'

    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -75
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 10,
        borderColor: 'white'
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '60%',
        justifyContent: 'space-between'
    }
});
export default ProfileCard