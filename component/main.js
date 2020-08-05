import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";

import Nav from "./nav";

const ww = Dimensions.get("window").width;
const wh = Dimensions.get("window").height;

export default function Mainc() {
  const [Task, setTask] = useState(0);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonblob.com/api/jsonBlob/1980f273-d709-11ea-b135-61b4a13b95d2')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <Text>Error: {error.message}</Text>;
  } else if (!isLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <>
        <Nav />
        <ScrollView>
          {items.map((item) => (
            <>
              <View key={item.id} style={styles.box}>
                <Text
                  style={    
                    (item.curstate == 0)
                      ? styles.textx_complete
                      : styles.textx_incomplete
                  }
                >
                  {item.task}
                </Text>
                  <Image
                    style={styles.tick}
                    source={
                      (item.curstate == 0)
                        ? require("../assets/tick.png")
                        : require("../assets/shadow.png")
                    }
                  />
              </View>
            </>
          ))}
        </ScrollView>
        <Image
        style={{position: "absolute"}}
                    source={require("../assets/blur.png")
                    }
        />
        <Image
        style={{position: "absolute", bottom: 10}}
                    source={require("../assets/plus.png")
                    }
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  textx_complete: {
    textDecorationLine: "line-through",
    fontSize: 18,
    padding: 11.5,
    color: "#e3e3e3",
  },
  textx_incomplete: {
    fontSize: 18,
    padding: 11.5,
    color: "#666666",
  },
  box: {
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 32,
    backgroundColor: "white",
    height: 50,
    width: ww - 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
  },
  tick: {
    position: "absolute",
    marginLeft: ww - 50,
    borderRadius: 50,
    marginTop: 13,
    marginBottom: 13,
    height: 25,
    width: 25,
    backgroundColor: "white",
  },
  button: {
    position: "absolute",
    marginLeft: ww - 50,
    backgroundColor: "#000",
    borderRadius: 50,
    padding: 10,
    marginTop: 13,
    marginBottom: 13,
  },
});
