import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../../styles/colors'
import wateringImg from '../assets/watering.png'

export function Welcome() {
  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.title} >
        Gerencia {'/n'}
        suas plantas {'/n'}
        de forma fácil
      </Text>

      <Image source={wateringImg} style={styles.image} />

      <Text style={styles.subtitle} >
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7} >
        <Text style={styles.buttonText} >
          C
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  image: {
    width: 292,
    height: 284,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  }
})