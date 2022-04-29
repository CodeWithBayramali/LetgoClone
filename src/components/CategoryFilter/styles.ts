import { StyleSheet,Dimensions } from "react-native";

const {height,width} = Dimensions.get("window");


const styles = StyleSheet.create({
    center:{
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10
    },
    scrollStyle:{
        height:height*0.095,
        marginBottom:22
    },
    imageStyle:{
        height:56,
        width:56,
        borderRadius:50
    }
})

export default styles;