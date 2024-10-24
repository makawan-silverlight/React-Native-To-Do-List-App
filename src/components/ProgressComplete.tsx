import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import AppContext from '../context/AppContext'


const ProgressComplete = () => {
    const { data } = useContext(AppContext)
    const conpleteTask = data.filter((task) => task.success).length
    const allTask = data.length
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 6 }}>
                <Text style={styles.textContent}>Complete :</Text>
                <View style={styles.complete}>
                    <Text style={{ ...styles.textContent, marginTop: 2 }}>{conpleteTask}</Text>
                </View>
                <Text style={styles.textContent}>of</Text>
                <Text style={styles.textContent}>{allTask}</Text>
            </View>
        </View>
    )
}

export default ProgressComplete

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical:10
    },
    complete: {
        width: 35,
        height: 35,
        backgroundColor: '#fff',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3A7CF9',
        borderWidth: 2
    },
    textContent: {
        fontSize: 16,
        color: '#3A7CF9',
        fontFamily: 'Poppins_700Bold'
    }
})