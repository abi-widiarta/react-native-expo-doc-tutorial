import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  console.log(selectedImage);
  console.log({ uri: selectedImage });
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;

  return <Image style={styles.image} source={imageSource} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
