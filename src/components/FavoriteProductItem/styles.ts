import { StyleSheet,Dimensions } from "react-native";

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    favorite:{
        width:width*0.32
    },
    favoriteView:{
        width:width*0.30,
        height:width*0.30
    },
    favoriteImage:{
        width:width*0.30,
        height:width*0.30,
        borderRadius:10
    },
    labeledFav:{
        transform:[{rotate:"45deg"}],
        position:"absolute",
        right:-25,
        top:12,
        backgroundColor:'white',
        paddingVertical:3,
        paddingHorizontal:20
    },

    //-----------

    main:{
        width:width*0.46,
        height:width*0.46,
        alignItems:'center',
    },
    mainView:{
        width:width*0.43,
        height:width*0.43
    },
    mainImage:{
        width:width*0.43,
        height:width*0.43,
        borderRadius:12
    }
})

export default styles;