import React from 'react'
import { View, Text } from 'react-native'

import { ButtonAdd } from '../../components/ButtonAdd'
import { Profile } from '../../components/Profile'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'
import { Background } from '../../components/BackgroundLinear'

import { styles } from './style'
import { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export function Home(){
  const [ category, setCategory ] = useState('')
  const navigation = useNavigation()

  const appointments = [
    {
    id: '1',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner : true
    },
    category : '1',
    date: '22/06 às 20:48h',
    description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
  },
  {
    id: '2',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner : true
    },
    category : '1',
    date: '22/06 às 20:48h',
    description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
  },
]

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  function handleAppointmentDetails(){
    navigation.navigate('AppointmentDetails')
  }
  function handleAppointmentCreate(){
    navigation.navigate('AppointmentCreate')
  }

  return(
    <Background>
      <View>
        <View style={styles.header}>
          <Profile/>
          <ButtonAdd onPress={handleAppointmentCreate}/>
        </View>      

          <CategorySelect 
            categorySelected={category}
            setCategory={handleCategorySelect}
            hasCheckBox={true}
          />

          <ListHeader
            title="Partidadas agendadas"
            subtitle="Total 6"
          />   
      </View>
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment data={item}
              onPress={handleAppointmentDetails}
            />
          )}
          style={styles.matches}
          contentContainerStyle={{ paddingBottom: 60 }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={()=> <ListDivider/>}
        />
    </Background>
  )
}