import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    productContainer:{
        width:'94%',
        marginHorizontal:'4%'
    },
    titleProducts: {
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:18
    },
    topicTitle:{
        fontWeight:'bold',
        fontSize:18
    },
    detailTitle:{
        fontWeight:'bold',
        fontSize:14,
        color:'#F24E61'
    },
    rightContent:{
        flexDirection: "row",
        alignItems: "center",
        marginRight:'4%'
    }
})

export default styles;