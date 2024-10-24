import { useContext, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import AppContext from '../context/AppContext'
import ToDoItem from './ToDoItem';
import NavigationBar from './NavigationBar';

type Navigation = "all" | "complete" | "inProgress"


function ToDoList() {
  const contextValue = useContext(AppContext);
  const { data } = contextValue
  const [navigation, setNavigation] = useState<Navigation>('all')
  let filterData = data

  switch (navigation) {
    case "all":
      filterData = data
      break;
    case "complete":
      filterData = data.filter((item) => item.success)
      break;
    case "inProgress":
      filterData = data.filter((item) => !item.success)
      break;

    default:
      break;
  }




  return (
    <View style={{ width: '100%', marginTop: 20, overflow: 'hidden', borderTopLeftRadius: 30, flex: 1, backgroundColor: '#E7ECEF' }}>

      <NavigationBar navigation={navigation} setNavigation={setNavigation} />

      <FlatList
        style={{ paddingTop: 10 }}
        data={filterData}
        renderItem={({ item }) => <ToDoItem data={item} />}
        contentContainerStyle={{ padding: 15, paddingBottom: 40, paddingTop: 5, gap: 10 }} // แก้ไขเรื่อง shadow โดนตัด
      />
    </View>
  )
}

export default ToDoList

const styles = StyleSheet.create({

})