import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


interface NavigationBarProp {
    navigation : "all"|"complete"|"inProgress"
    setNavigation : React.Dispatch<React.SetStateAction<"all"|"complete"|"inProgress">>
}

const NavigationBar = ({navigation,setNavigation}:NavigationBarProp) => {

  const borderLeftRadius = { borderTopLeftRadius: 25, borderBottomLeftRadius: 25, borderTopRightRadius: 7, borderBottomRightRadius: 7 }
  const borderRightRadius = { borderTopLeftRadius: 7, borderBottomLeftRadius: 7, borderTopRightRadius: 25, borderBottomRightRadius: 25 }

  return (
    <View style={styles.navigationBar}>
        <TouchableOpacity onPress={()=>{setNavigation('all')}} style={{ ...styles.navigationBlog, ...borderLeftRadius,backgroundColor:navigation == 'all'?"#3A7CF9":"#FFFFFF"}}>
          <Text style={{...styles.navigationText,color:navigation == 'all'?"#FFFFFF":"#6e6e6e"}}>All</Text>
        </TouchableOpacity>
        <View style={{flex:1,borderLeftWidth:1,borderRightWidth:1,borderColor:'rgba(0,0,0,0.1)'}}>
          <TouchableOpacity onPress={()=>{setNavigation('complete')}} style={{ ...styles.navigationBlog,backgroundColor:navigation == 'complete'?"#3A7CF9":"#FFFFFF" }}>
            <Text style={{...styles.navigationText,color:navigation == 'complete'?"#FFFFFF":"#6e6e6e"}}>Complete</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>{setNavigation('inProgress')}} style={{ ...styles.navigationBlog, ...borderRightRadius,backgroundColor:navigation == 'inProgress'?"#3A7CF9":"#FFFFFF" }}>
          <Text style={{...styles.navigationText,color:navigation == 'inProgress'?"#FFFFFF":"#6e6e6e"}}>In Progress</Text>
        </TouchableOpacity>
      </View>
  )
}

export default NavigationBar

const styles = StyleSheet.create({
    navigationBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,
        marginHorizontal: 15,
        marginTop: 15,
        backgroundColor: '#fff',
        borderRadius: 100,
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6,
      },
      navigationText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 16,
        textAlign: 'center'
      },
      navigationBlog: {
        // backgroundColor: '#3A7CF9',
        flex: 1,
        paddingVertical: 8,
        borderRadius: 7
      }
})