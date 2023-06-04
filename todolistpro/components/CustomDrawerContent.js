import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'

import { Linking, Image } from 'react-native'

const CustomDrawer = (props) => (
  <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />

    <DrawerItem
    label="DunDam"
    onPress={() => Linking.openURL('https://dundam.xyz/')}
    icon={() => (
      <Image
      source={require('../assets/dundam.png')}
      style={{ width: 40, height: 40 }}
      />
      )}
      />
    <DrawerItem
    label="DfCat"
    onPress={() => Linking.openURL('https://dfcat.net/')}
    icon={() => (
      <Image
      source={require('../assets/dfcat.png')}
      style={{ width: 40, height: 40 }}
      />
      )}
    />

    <DrawerItem
    label="DunDam"
    onPress={() => Linking.openURL('https://dunfaoff.com/')}
    icon={() => (
      <Image
      source={require('../assets/dfoff.png')}
      style={{ width: 40, height: 40 }}
      />
      )}
    />

    <DrawerItem
    label="D&F"
    onPress={() => Linking.openURL('https://df.nexon.com/df/home')}
    icon={() => (
      <Image
      source={require('../assets/df.png')}
      style={{ width: 40, height: 40 }}
      />
      )}
    />
  </DrawerContentScrollView>
)

export default CustomDrawer