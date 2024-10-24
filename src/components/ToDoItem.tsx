import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { dataToDo } from '../interface/contextInterface'
import AppContext from '../context/AppContext'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const Confetti = require('../../assets/confetti.png')

interface ToDoItemProp {
    data: dataToDo
}

function ToDoItem({ data }: ToDoItemProp) {
    const [success, setSuccess] = useState<boolean>(data.success);
    const { updateSuccess,deleteToDo } = useContext(AppContext);

    function handlePressSuccess() {
        setSuccess((prev) => {
            const newSuccess = !prev
            updateSuccess(data.id, newSuccess)
            return newSuccess
        })

    }

    return (
        <Pressable onPress={handlePressSuccess} style={{...styles.toDoItem,backgroundColor:success?'#367CF6':'#ffffff'}}>
            <View style={styles.flexItem}>
                <View style={{...styles.imageContainer,backgroundColor:success?'#FFFFFF':'#ccddff'}}>
                    {success ?
                        <Image style={{ width: 30, height: 30 }} source={Confetti} />
                        : ""
                    }

                </View>
                <View>
                    <Text style={{...styles.title,color:(success?'#FFFFFF':'#00308a'),textDecorationLine:(success?'line-through':'none')}}>{data.title}</Text>
                    <Text style={{...styles.textCreate,color:success?'#FFFFFF':'#3f6bbf'}}>Create : {data.timeStamp}</Text>
                </View>
            </View>

            <TouchableOpacity onPress={()=>{deleteToDo(data.id)}} style={{...styles.trashBtn,backgroundColor: success? 'rgba(240, 240, 240, 0.3)' : 'rgba(240, 240, 240, 1)'}}>
                <IconFontAwesome5 name='trash-alt' color={success?'#FFFFFF':'#00308a'} size={25} />
            </TouchableOpacity>
        </Pressable>
    )
}

export default ToDoItem

const styles = StyleSheet.create({
    toDoItem: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 100,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.19,
        shadowRadius: 5.62,
        elevation: 6,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    title: {
        fontSize: 22,
        fontFamily:'Poppins_700Bold',
    },
    textCreate:{
        fontSize: 13,
        opacity:0.7,
        fontFamily:'Poppins'
    },
    flexItem :{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap: 16
    },
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ffffff'
    },
    trashBtn: {
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
})