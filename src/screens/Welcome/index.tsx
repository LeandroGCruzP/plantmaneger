import Icon from '@expo/vector-icons/Feather'
import Rn from 'react-native'
import wateringImg from '../../assets/watering.png'
import { styles } from './styles'

export function Welcome() {
  return (
    <Rn.SafeAreaView style={styles.container} >
      <Rn.View style={styles.wrapper} >
        <Rn.Text style={styles.title} >
          Gerencia {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Rn.Text>

        <Rn.Image source={wateringImg} style={styles.image} resizeMode='contain' />

        <Rn.Text style={styles.subtitle} >
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Rn.Text>

        <Rn.TouchableOpacity style={styles.button} activeOpacity={0.7} >
          <Icon name='chevron-right' style={styles.buttonIcon} />
        </Rn.TouchableOpacity>
      </Rn.View>
    </Rn.SafeAreaView>
  )
}
