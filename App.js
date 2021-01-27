import React , { useState} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';

export default function App() {
  const [task, setTask]= useState('');
  const [list, setList]= useState([]);
  var edit;
  const addItem =()=>{
    setList([...list,{ key: Math.random().toString(), data: task}])
    setTask('')
  }
  const removeItem = (itemKey) => {
     var nlist = list.filter(item => item.key != itemKey)
     setList(nlist);
  }
  const editItem = (text) =>{
    setTask(text.data)
    edit=(text.key)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <View style={styles.head}>
        <TextInput style={styles.input} placeholder="New Task?" onChangeText={text=> setTask(text)} value={task} />
        <Button title="Add" onPress={addItem} />
      </View>
      <ScrollView>
        {list.map((item)=> 
        <View style={styles.list}  key={item.key}>
        <Text style={styles.entry}>{item.data}</Text>
        <View style={styles.icons}>
          <TouchableOpacity  activeOpacity={0.5} onPress={() => editItem(item)} >
              <Image style={styles.image} source={require('./Images/draw.png')}/>
          </TouchableOpacity>
          <TouchableOpacity  activeOpacity={0.5} onPress={() => removeItem(item.key)} >
              <Image style={styles.image} source={require('./Images/trash.png')}/>
          </TouchableOpacity>
          </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8A48F',
    alignItems: 'center',
  },
  head:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title:{
    fontSize: 50,
    fontStyle: 'italic',
    color: '#720E07'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  list: {
    flexDirection:'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    width: 250,
    borderColor: "blue",
    backgroundColor: '#D1EDF2',
    padding: 10,
    margin: 5,
  },
  entry: {
    color: "blue",
    fontSize: 20,
    alignItems: 'center',
  },
  image:{
    width:20,
    height:20,
    marginLeft: 5,
  },
  icons: {
    flexDirection: 'row',
  }
});
