import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import AppContext from '../context/AppContext';

const FormToDo = () => {
    const [title,setTitle] = useState('')
    const contextValue = useContext(AppContext)
    const {addToDo} = contextValue

    function createToDoList (){
        if(title.length < 1){
            alert('Add title to create to do list.')
        }else{
            addToDo(title)
            setTitle('')
        }
    }
    return (
        <View style={styles.form}>
                <TextInput onSubmitEditing={createToDoList} onChangeText={(textValue)=>{
                    if(textValue.length > 20){
                        alert("can't more than 20 characters.")
                    }else{
                        setTitle(textValue);
                    }
                }} 
                placeholder='Create To Do List...'
                style={styles.input}
                value={title}/>
                <TouchableOpacity onPress={createToDoList}>
                    <View style={styles.addBtn}>
                        <Text style={styles.textBtn}>
                            <Entypo name='plus' size={30}/>
                            </Text>
                    </View>
                </TouchableOpacity>
        </View>
    )
}

export default FormToDo

const styles = StyleSheet.create({
    form:{
        backgroundColor: '#FEFEFC',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6,
        width: "100%", 
        borderRadius:100,
        padding:7,
        flexDirection:"row",
        marginBottom:10
    },
    input: {
        marginLeft:15,
        width:'80%',
        fontSize:20,
        color:'#00308a',
    },
    addBtn:{
        backgroundColor:'#3A7CF9',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:100,
        width:55,
        height:55, 
    },
    textBtn:{
        color:'#FFFFFF',
        fontSize:30,
    }
})