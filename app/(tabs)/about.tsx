import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
       Kyaw Min Htway – Software Engineer

I’m Kyaw Min Htway, a passionate and detail-oriented software engineer dedicated to creating clean, efficient, and scalable software solutions. With a strong foundation in modern programming languages and development practices, I enjoy solving complex problems and turning ideas into high-impact applications.

I thrive in collaborative environments, continuously learning new technologies, and pushing the boundaries of what software can achieve. Whether working on backend logic, frontend interfaces, or full-stack systems, I bring a focus on quality, performance, and user experience to every project.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
