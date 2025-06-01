import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>Kyaw Min Htway – Software Engineer</Text>
        <Text style={styles.paragraph}>
          I’m Kyaw Min Htway, a passionate and detail-oriented software engineer dedicated to creating clean, efficient, and scalable software solutions. With a strong foundation in modern programming languages and development practices, I enjoy solving complex problems and turning ideas into high-impact applications.
        </Text>
        <Text style={styles.paragraph}>
          I thrive in collaborative environments, continuously learning new technologies, and pushing the boundaries of what software can achieve. Whether working on backend logic, frontend interfaces, or full-stack systems, I bring a focus on quality, performance, and user experience to every project.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  scrollContainer: {
    paddingVertical: 40,
  },
  heading: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'left',
  },
});
