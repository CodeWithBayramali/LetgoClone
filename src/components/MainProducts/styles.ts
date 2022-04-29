import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainProductContainer: {
        width:'94%',
        marginLeft:'4%',
    },
    mainProductsTitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:30
    },
    leftText:{
        fontSize:20,
        fontWeight:'bold'
    },
    rightContent:{
        flexDirection:'row',
        marginRight:'4%'
    },
    rightContentText:{
        color:'#F24E61',
        fontSize:14,
        fontWeight:'bold'
    },
    listContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap:'wrap',
        width:'100%'
    }
})

export default styles;