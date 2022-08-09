import Icon from '@expo/vector-icons/Feather'
import Native from 'react-native'
import wateringImg from '../../assets/watering.png'
import { styles } from './styles'

export function Welcome() {
  return (
    <Native.SafeAreaView style={styles.container} >
      <Native.View style={styles.wrapper} >
        <Native.Text style={styles.title} >
          Gerencia {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Native.Text>

        <Native.Image source={wateringImg} style={styles.image} resizeMode='contain' />

        <Native.Text style={styles.subtitle} >
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Native.Text>

        <Native.TouchableOpacity style={styles.button} activeOpacity={0.7} >
          <Icon name='chevron-right' style={styles.buttonIcon} />
        </Native.TouchableOpacity>
      </Native.View>
    </Native.SafeAreaView>
  )
}
