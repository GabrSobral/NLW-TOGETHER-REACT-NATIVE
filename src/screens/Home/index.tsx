import React from 'react'
import { View, Text } from 'react-native'

import { ButtonAdd } from '../../components/ButtonAdd'
import { Profile } from '../../components/Profile'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { Appointment } from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'

import { styles } from './style'
import { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

export function Home(){
  const [ category, setCategory ] = useState('')

  const appointments = [{
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
  }]

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return(
    <View>
      <View style={styles.header}>
        <Profile/>
        <ButtonAdd/>
      </View>      

        <CategorySelect 
          categorySelected="2"
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader
            title="Partidadas agendadas"
            subtitle="Total 6"
          />

          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment data={item}/>
            )}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={()=> <ListDivider/>}
          />
        </View>
    </View>
  )
}