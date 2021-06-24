import React from 'react'
import { View, Text, FlatList } from 'react-native'

import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'

import { theme } from '../../global/styles/theme'
import { styles } from './style'

type Props = {
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected }: Props){
  const { secondary100, secondary80 } = theme.colors

  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true
    },
    {
      id: '2',
      name: 'Teste',
      icon: null,
      owner: false
    },
  ]

  return(
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild 
            data={item} 
            onPress={()=> handleGuildSelected(item)}
          />
        )}
        ItemSeparatorComponent={()=> <ListDivider isCentered/>}
        ListHeaderComponent={() => <ListDivider isCentered/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        style={styles.guilds}
      />
    </View>
  )
}