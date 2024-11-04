import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({name, description,icon_name, picture })=> {
    return (

        <View>

          <Icon name={icon_name} size={20} color="black" /> {name}
          <Text style={{fontWeight: 'bold', fontSize: 30,fontStyle:'italic'}}>

            </Text>

            <Text>
                {description}
            </Text>

            <Image source = {picture} style={{width:400,height:500}} />
        </View>
    );

};
export default Boat;
