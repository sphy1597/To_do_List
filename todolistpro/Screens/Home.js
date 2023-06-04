import { Text, View, StyleSheet, ScrollView, Button, TextInput, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native'
import {useState} from 'react'
import Task from '../components/Task'

const image1 = require('../assets/ispins2.png');
const image2 = require('../assets/archmage2.png');
const image3 = require('../assets/bakal2.png');

const Home = (props) => {

  const [writeText, setWriteText] = useState('캐릭터를 추가하세요')
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [oneCheck, setOneCheck] = useState(0);
  const [twoCheck, setTwoCheck] = useState(0);
  const [threeCheck, setThreeCheck] = useState(0);

  const handleAddTask = () => {
    setWriteText('캐릭터를 추가하세요')
    setTaskItems([...taskItems, task])
    setTask('');
  }

  const completeTask = (idx, onePressed, twoPressed, threePressed) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(idx,1);
    setTaskItems(itemsCopy);
  }

  const toggleCheck = (index,isPressed) => {
    if (index==1){
      setOneCheck(oneCheck + (isPressed ? -48 : 48));
    }else if(index==2){
      setTwoCheck(twoCheck + (isPressed ? -36 : 36));
    }else{
      setThreeCheck(threeCheck + (isPressed ? -31 : 31));
    }    
  };


  return(

    <View style = {styles.container}>
      {/* 투두리스트 */}
      <View style = {styles.taskWrapper}>
           <View style={styles.headerContainer}> {/* headerContainer로 묶음 */}
        <View style={styles.sectionContainer}>
          <Image source={image1} style={styles.image} />
          <Text style={styles.sectionTitle}>{oneCheck}</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Image source={image2} style={styles.image} />
          <Text style={styles.sectionTitle}>{twoCheck}</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Image source={image3} style={styles.image} />
          <Text style={styles.sectionTitle}>{threeCheck}</Text>
        </View>
      </View>
       
        <View style = {styles.items}>
          {/* 할일 목록 */}
          {
            taskItems.map((item, idx)=> {
              return (
                  <Task 
                    text={item}
                    key={idx}
                    toggleCheck={toggleCheck}       
                    onSquarePress={()=>completeTask(idx)} 
                    />
              )
            })
          }
          
        </View>
      </View>
     
       <KeyboardAvoidingView  
        
        style={styles.writeTaskWrapper}
      >
        <TextInput 
          style={styles.input} 
          placeholder={writeText} 
          onChangeText={text => setTask(text)}
          value={task}  
        />
        <TouchableOpacity
        
          onPress={()=>handleAddTask()}
        >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>


    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#E8EAED",
  },
  taskWrapper:{
    
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    flexDirection: 'row',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position: "absolute",
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    height:45,
    paddingVartical:15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250,

  },
  addWrapper:{
    width:45,
    height:45,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText:{

  },
   image: {
    width: 40,
    height: 40,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
    headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Home

