import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import Icon from "react-native-vector-icons/FontAwesome";

function Spacer() {
  return <View style={styles.spacer}></View>;
}

export default function App() {
  const flash = useRef();

  const handlePress = (type) => {
    flash.current.showMessage({
      message: "Hello flashbars!",
      description: "React Native flashbar and top notification alert utility",
      animationDuration: 550,
      position: "bottom",
      renderAfterContent: () => (
        <View style={{ alignItems: "flex-end", paddingTop: 12 }}>
          <View style={{ width: "30%" }}>
            <Button title="Details" onPress={() => {}} />
          </View>
        </View>
      ),

      // message: "Type: " + type,
      // description: "React Native flashbar and top notification alert utility",
      // position: "bottom",
      // type,
      // icon: () => (
      //   <Icon
      //     name="warning"
      //     size={30}
      //     color="#aa2020"
      //     style={{ paddingRight: 20, paddingTop: 14 }}
      //   />
      // ),

      // message: "Hello flashbars!",
      // description: "React Native flashbar and top notification alert utility",
      // type: "success",
      // titleStyle: styles.flasdescriptionhTitle,
      // textStyle: styles.flashText,

      // message: "Type :" + type,
      // type,

      // message: "Hello flashbars!",
      // color: "#332222",
      // backgroundColor: "#e09107",

      // message: "Hello flashbars!",
      // type: "success",
      // style: styles.flashMessage,
    });
    // showMessage({
    //   message: "react-native-flash-message",
    //   description:
    //     "React Native flashbar and top notification alert utility" +
    //     "\n" +
    //     "Works on Android & iOS",
    //   duration: 3000,
    // });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        style={styles}
        title="Default"
        onPress={() => handlePress("default")}
        color="#696969"
      />
      <Spacer />
      <Button
        title="Success"
        onPress={() => handlePress("success")}
        color="#5cb85c"
      />
      <Spacer />
      <Button
        title="Info"
        onPress={() => handlePress("info")}
        color="#5bc0de"
      />
      <Spacer />
      <Button
        title="Warning"
        onPress={() => handlePress("warning")}
        color="#f0ad4e"
      />
      <Spacer />
      <Button
        title="Danger"
        onPress={() => handlePress("danger")}
        color="#d9534f"
      />
      <Spacer />

      <Button
        title="Show alert"
        onPress={() => handlePress("alert")}
        color="#e09107"
      />

      <FlashMessage ref={flash} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  spacer: {
    paddingBottom: 8,
  },
  flashMessage: {
    borderRadius: 12,
    opacity: 0.8,
    borderWidth: 2,
    borderColor: "#222",
    margin: 12,
  },
  flashText: {
    fontStyle: "italic",
    fontSize: 15,
  },
  flashTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
