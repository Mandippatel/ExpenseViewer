import React from 'react'
import { Text, View ,StyleSheet} from 'react-native'

const Empty=() =>{
    return (
        <View style={{alignItems:'center',marginTop:30}}>
            <Text style={{color:'#ff4500',fontWeight:'700',fontSize:17}}>
                No Transation Yet
            </Text>
        </View>
    )
}
export default  Empty;