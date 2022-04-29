import { StyleSheet,Dimensions } from "react-native";

const {width,height} = Dimensions.get('window')

const styles = StyleSheet.create({
    carouselImage: {
        width:width,
        height:height*0.4,
        resizeMode:'stretch'
    },
    dot:{
        width:10,
        height:10,
        borderRadius:5,
        backgroundColor:'white',
        marginHorizontal:4
    },
    dotView: {
        flexDirection:'row',
        position:'absolute',
        alignItems:'center',
        bottom:12,
        right:12,
        borderRadius:50,
        backgroundColor: "rgba(0,0,0,0.5)",
        padding:10
    }
    
})

export default styles;