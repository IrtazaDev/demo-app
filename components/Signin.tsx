import {
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
  Text,
  Pressable,
  View,
} from "react-native";
import { useState } from "react";

export default function Signin() {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");

  const onSubmit = () => {
    Alert.alert(`Username: ${text} \n Passphrase: ${number}`);
  };
  return (
    <SafeAreaView style={styles.box}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ alignSelf: "center", height: 100, width: 100 }}
        />
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#B3B7BA"
          onChangeText={onChangeText}
          placeholder="Username"
          value={text}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#B3B7BA"
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Passphrase"
          secureTextEntry={true}
        />
        <Pressable
          style={[styles.button, (!text || !number) && styles.buttonDisable]}
          disabled={!text || !number}
          onPress={onSubmit}
        >
          <Text style={styles.btnText}>Sign In</Text>
        </Pressable>
        <Text style={styles.resetText}>Reset your passphrase?</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    display: "flex",
    gap: 12,
  },
  box: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    height: 60,
    borderWidth: 1,
    width: "100%",
    borderColor: "#C6CBCB",
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 20,
  },
  header: {
    height: 250,
    overflow: "hidden",
  },
  title: {
    fontSize: 30,
    color: "#0E0E0E",
    textAlign: "center",
    marginBottom: 24,
    fontWeight: "600",
    marginTop: -26,
    fontFamily: "Times",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  button: {
    backgroundColor: "#51ABCB",
    width: "100%",
    height: 60,
    marginTop: 8,
    borderRadius: 8,
  },
  buttonDisable: {
    opacity: 0.7,
  },
  btnText: {
    color: "#EDF6FB",
    fontWeight: "600",
    fontSize: 23,
    textAlign: "center",
    padding: 16,
  },
  resetText: {
    color: "#B3B7BA",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
    marginTop: 2,
  },
});
