import {
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Tips } from "./db";
import { useState } from "react";
import MentorModal from "./Modal";

export default function Home() {
  const menuItems = ["Feeds", "Events", "Organization"];
  const width = Dimensions.get("window").width;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTab, setSelectTab] = useState(1);

  const baseOptions = {
    loop: true,
    autoPlay: true,
    width: width * 0.6,
    scrollAnimationDuration: 1000,
    data: Tips,
  };
  return (
    <SafeAreaView style={styles.box}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerBox1}>
            <Image source={require("@/assets/images/logo2.png")} />
            <Text style={styles.headerTitle}>Mentoring</Text>
          </View>
          <View style={styles.headerBox1}>
            <View style={styles.iconBox}>
              <Image source={require("@/assets/images/search.png")} />
            </View>
            <View style={styles.iconBox}>
              <Image source={require("@/assets/images/bell.png")} />
            </View>
          </View>
        </View>
        <View style={styles.menuTab}>
          <FlatList
            data={menuItems}
            horizontal={true}
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  style={[
                    styles.menuBox,
                    index === menuItems.length - 1 && {
                      borderRightWidth: 0,
                      paddingRight: 0,
                    },
                  ]}
                  onPress={() => setSelectTab(index)}
                >
                  <Text
                    style={[
                      styles.menuItems,
                      index === selectedTab && { color: "#1F5EF4" },
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <Text style={styles.tipsTitle}>Mentorship Tips</Text>
        <Carousel
          {...baseOptions}
          style={{ width: "100%", height: 250 }}
          renderItem={({ item }) => (
            <View style={{ marginLeft: "3%" }}>
              <View style={styles.tipsBox}>
                <Image source={item.img} style={styles.img} />
                <Text style={styles.tipsBoxTitle}>
                  Mentoring Ultimate Guide
                </Text>
                <Text style={{ fontSize: 16 }}>
                  I am here to guide you through the intricacies of UX design
                </Text>
              </View>
            </View>
          )}
        />
        <View style={{ marginTop: 4 }}>
          <Text style={styles.tipsTitle}>Mentors</Text>
          <View style={styles.mentorsBox}>
            <View style={styles.mentorsNameBox}>
              <View style={styles.mentorInfo}>
                <Image source={require("@/assets/images/thumbnail1.png")} />
                <View>
                  <Text style={styles.mentorTitle}>Shirley Taylor</Text>
                  <Text style={styles.mentorDesig}>Web Designer</Text>
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 16, textAlign: "right" }}>
                  <Text style={{ fontWeight: "600" }}>2</Text> Sessions Held
                </Text>
                <Text
                  style={{ marginTop: 3, fontSize: 16, textAlign: "right" }}
                >
                  Duration: <Text style={{ fontWeight: "600" }}>30mins</Text>
                </Text>
              </View>
            </View>
            <Text style={styles.mentorsDesc}>
              Passionate UX designer with a keen eye for detail and a knack for
              creating seamless, user-centric digital experiences. Transforming
              complex ideas into intuitive and visually appealing designs is my
              forte.
            </Text>
            <View style={styles.tagsContainer}>
              <View style={styles.tagBox}>
                <Text style={styles.tags}>Design Pattern</Text>
              </View>
              <View style={styles.tagBox}>
                <Text style={styles.tags}>User Research </Text>
              </View>
              <View style={styles.tagBox}>
                <Text style={styles.tags}>Personas</Text>
              </View>
            </View>
            <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
              <Text style={styles.btnText}>View Profile</Text>
            </Pressable>
          </View>
        </View>
        <MentorModal
          modalVisible={modalVisible}
          onClose={(val) => setModalVisible(val)}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    marginTop: "20%",
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 10,
    marginVertical: 12,
  },
  tagBox: {
    borderWidth: 1,
    borderColor: "rgba(31, 94, 244, 0.30)",
    borderRadius: 100,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  tags: {
    color: "#1F5EF4",
    fontSize: 16,
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
  mentorsDesc: {
    color: "rgba(60, 65, 76, 0.80)",
    marginTop: 20,
    marginBottom: 12,
    fontSize: 16,
  },
  mentorsBox: {
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: "rgba(31, 94, 244, 0.12)",
    backgroundColor: "#FFF;",
    borderRadius: 8,
    padding: 20,
  },
  mentorsNameBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mentorInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  mentorTitle: {
    color: "#0E172B",
    fontWeight: "500",
    fontSize: 18,
  },
  mentorDesig: {
    color: "rgba(60, 65, 76, 0.80)",
    marginTop: 3,
    fontSize: 16,
  },
  menuBox: {
    borderRightWidth: 2,
    borderRightColor: "#E5E5E5",
    paddingRight: 20,
    overflow: "scroll",
    marginVertical: 10,
    paddingVertical: 6,
  },
  menuTab: {
    borderWidth: 2,
    borderColor: "#E5E5E5",
    borderRadius: 100,
    marginHorizontal: 32,
    marginBottom: 35,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  menuItems: {
    color: "rgba(60, 65, 76, 0.60)",
    fontWeight: "500",
    fontSize: 18,
    paddingLeft: 20,
  },
  headerTitle: {
    color: "#252525",
    fontSize: 26,
    fontWeight: "800",
  },
  headerBox1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconBox: {
    backgroundColor: "#0659FD",
    width: 35,
    height: 35,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    marginBottom: 30,
  },
  tipsTitle: {
    color: "#0E172B",
    fontFamily: "SF Pro Display",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    paddingLeft: 32,
  },
  tipsBox: {
    marginRight: 20,
  },
  tipsBoxTitle: {
    color: "#0E172B",
    fontWeight: "600",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  img: {
    alignSelf: "center",
    borderRadius: 12,
    width: "100%",
    height: 130,
    objectFit: "cover",
  },
});
