import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Avatar } from '../../components/Avatar'

import { styles } from './style'
import { theme } from '../../global/styles/theme'

type Props = {
  data: MemberProps;
}

type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string
}

export function Member({ data }: Props){
  const isOnline = data.status === "online"
  const { on, primary } = theme.colors

  return(
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />

      <View>
        <Text style={styles.title}>
          {data.username}
        </Text>

        <View style={styles.status}>
          <View style={[
            styles.bulletStatus,
            {
              backgroundColor: isOnline ? on : primary
            }
          ]}/>

          <Text style={styles.nameStatus}>
            { isOnline ? "Disponivel" : "Ocupado" }
          </Text>
        </View>
      </View>
    </View>
  )
}