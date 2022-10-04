import React, {useEffect, useContext, useState} from "react";
import axios from 'axios';
import { Text, View, StyleSheet, Image, } from 'react-native';
import { AppHeader } from "../../components/AppHeader";
import { AuthContext } from "../../context/AuthContext";
import { FavItem } from "../../components/favoritos/favoritoItem";




export const Home = () => {
    const { userInfo } = useContext(AuthContext);
    const [fav, setFav] = useState([]);


    console.log(userInfo.user.id);
    useEffect(() => {
        axios.get(`http://192.168.6.20:3010/favoritos/${userInfo.user.id}`)
        .then(res=>{
            // s
            setFav(res.data['favoritos']);
            console.log(res.data['favoritos'])
        })
        
      }, [])
    

    return (
        <View style={styles.Container}>
            <AppHeader/>
            <View style={styles.bannerBox}>                
                <Image
                style={styles.bannerAula}
                 resizeMode="contain" 
                 source={require("../../../assets/banner.png")} 
                 />
                <Image 
                style={styles.banner2} 
                resizeMode="contain" 
                source={require("../../../assets/banner2.png")} 
                />
            </View>
            <View style={styles.aulasVideos}>
                <Text style={{fontFamily:"Poppins_500Medium", fontSize: 16, color: '#403B91'}}> Favoritos</Text>
            </View>
            <View>
                  {fav.map((favs)=>(
                    <FavItem
                    key={favs.id_favorito}
                    {...favs}
                    />
                  ))}
            </View>

        </View>
    )
}





export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#EDF2FF'
    },
    text: {
        color: "#403B91",
        fontSize: 18,
        fontWeight: "500"

    },
    bannerAula: {
        height: 200,
    },

    bannerBox: {
        paddingHorizontal: 12,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#4263EB",
        borderBottomLeftRadius: 28,
        borderBottomRightRadius: 28,

    },
    banner2:{
        height: 130,
        
    },
    aulasVideos:{
        padding: 10,
    }

})