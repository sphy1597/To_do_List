import {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
const image1 = require('../assets/ispins.png');
const image2 = require('../assets/archmage.png');
const image3 = require('../assets/bakal.png');
const Task = (props) => {
  const [onePressed, setOnePressed] = useState(false);
  const [twoPressed, setTwoPressed] = useState(false);
  const [threePressed, setThreePressed] = useState(false);

    const onPressed = (idx) => {
    if (idx === 1) {
      props.toggleCheck(1,onePressed);
      setOnePressed(!onePressed);
    } else if (idx === 2) {
      props.toggleCheck(2, twoPressed);
      setTwoPressed(!twoPressed);
    } else {
      props.toggleCheck(3, threePressed);
      setThreePressed(!threePressed);
    }
  };

  const circularStyle1 = onePressed
    ? { ...styles.circular1, borderColor: '#B7B7B7' }
    : styles.circular1;
  const circularStyle2 = twoPressed
    ? { ...styles.circular2, borderColor: '#B7B7B7' }
    : styles.circular2;
  const circularStyle3 = threePressed
    ? { ...styles.circular3, borderColor: '#B7B7B7' }
    : styles.circular3;

  return(
    <View style={styles.item}>
      <View style={styles.itemLeft} >
        <TouchableOpacity  onPress={()=>props.onSquarePress()}>
          <View style={styles.square}></View>
        </TouchableOpacity>
        
        <Text style={styles.itemText}> {props.text} </Text>
      </View>
      
      
      <TouchableOpacity onPress={() => onPressed(1)}>
        <View style={circularStyle1} >
          <Image source={image1} style={styles.image} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onPressed(2)}>
        <View style={circularStyle2} >
          <Image source={image2} style={styles.image} />
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity onPress={() => onPressed(3)}>
        <View style={circularStyle3} >
          <Image source={image3} style={styles.image} />
        </View>
      </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  item:{
    backgroundColor:"#FFF",
    padding:15,
    borderRadius: 10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap'
  },
  square:{
    width:24,
    height:24,
    backgroundColor:'#55BCF6',
    opacity:0.4,
    borderRadius:5,
    marginRight:15,
  },
  itemText:{
    maxWidth:'80%',


  },
  circular1:{
    width:36,
    height:36,
    borderColor:'#55BCF6',
    borderWidth:3,
    borderRadius:5,
  },
  circular2:{
    width:36,
    height:36,
    borderColor:'#55BCF6',
    borderWidth:3,
    borderRadius:5,
  },
  circular3:{
    width:36,
    height:36,
    borderColor:'#55BCF6',
    borderWidth:3,
    borderRadius:5,
  },
  image: {
    width: 30,
    height: 30,
    
  },
})

export default Task; 