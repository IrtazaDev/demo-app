import React from 'react'
import { Alert, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const MentorModal = ({ modalVisible, onClose }) => {
  return (
    <View style={[styles.centeredView]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          onClose(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, , { width: "90%" }]}>
            <Image
              source={require("@/assets/images/thumbnail1.png")}
              width={114}
              height={114}
            />
            <Text style={styles.title}>Shirley Taylor</Text>
            <Text style={styles.desc}>
              Passionate UX designer with a keen eye for detail and a knack for
              creating seamless, user-centric digital experiences. Transforming
              complex ideas into intuitive and visually appealing designs is my
              forte.
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => onClose(!modalVisible)}
            >
              <Text style={styles.btnText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MentorModal;

const styles = StyleSheet.create({
  title: {
    color: "#0E172B",
    fontWeight: "600",
    fontSize: 24,
  },
  desc: {
    color: "rgba(60, 65, 76, 0.70)",
    fontSize: 16,
    textAlign: 'center'
  },
  button: {
    backgroundColor: "#1F5EF4",
    width: "100%",
    marginTop: 8,
    borderRadius: 100,
  },
  btnText: {
    color: "#EDF6FB",
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
    padding: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 14,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%'
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
