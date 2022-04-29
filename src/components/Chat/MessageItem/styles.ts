import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    uriImage: {
        width:85,
        height:85,
        borderRadius:12
    },
    messageCard: {
        padding:15,
        borderBottomWidth:0.5,
        borderBottomColor:'#E2E2E2',
        flexDirection:'row',
        alignItems:'center'
    },
    imageBadge:{
        height:30,
        width:30,
        backgroundColor:'#A3CE72',
        position:'absolute',
        right:-15,
        bottom:0,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    }
})


export default styles;