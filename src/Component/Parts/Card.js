import React from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import LinerGradient from 'react-native-linear-gradient'
import {Button} from 'native-base'

 /* Redux */
import {useSelector} from 'react-redux'

const Card =({navigation})=>{
    const {transactions} = useSelector((state) => state.transactions);

    const prices = transactions.map((transaction) =>transaction.price)
    const TotalPrice = prices.reduce((prev,cur) => (prev += cur),0);
    
    const Expense = prices.filter(price => price <0)
     .reduce((prev,cur) =>(prev += cur),0) * -1 ;

        return (
            
             <LinerGradient 
                colors={['#FAAD3D','#EFC90A','#F1CB0C']}
                style={{...styles.Box}}
            >
                <View>
                    <Text style={{
                        fontFamily:'Lato-Medium',
                        fontSize:15,
                        fontWeight:'600',
                        color:'#fff'
                    }}>Current Balance </Text>
                    <Text style={{fontFamily:'Lato-Medium',
                                fontSize:32,
                                color:'#fff',
                                fontWeight:'700'
                            }}
                    >
                        ₹ {TotalPrice}
                    </Text>
                    <Text style={{marginTop:67,
                                color:"#fff",
                                fontWeight:'700',
                                fontFamily:'Loto-Regular',
                                fontSize:18
                            }}>
                                1432 **** **** 6543
                    </Text>
                </View>
                <View>
                    <Text  style={{marginTop:5,
                                left:100,
                                color:"#fff",
                                fontWeight:'700',
                                fontFamily:'Loto-Regular',
                                fontSize:18
                            }} >$$$</Text>
                </View>
                <View>
                    <Button
                        rounded
                        light
                        style={{
                            padding:10,marginTop:50,left:50,
                            borderWidth:3,borderColor:"#fff",
                            backgroundColor:'#E10c62',
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                        onPress={()=>{navigation.navigate('Add')}}
                        >
                            <Text style={{color:'#fff',fontWeight:'700'}}>Add</Text>
                        </Button>
                    <Text style={{
                        marginTop:20,left:50,
                        fontFamily:'Lato-Medium',
                        fontSize:13,
                        fontWeight:'700',
                        color:'#fff'
                    }}>Expance </Text>
                    <Text style={{
                        fontFamily:'Lato-Medium',
                        fontSize:20,left:50,
                        fontWeight:'700',
                        color:'#fff'
                    }}>
                        ₹  {Expense}
                         </Text>
                </View>
            </LinerGradient>
            // </View>
        );    
}

const styles=StyleSheet.create({
    Box:{
        width:'100%',
        height:189,
        borderRadius:15,
        flexDirection:'row',
        padding:22
    }
})
export default Card;