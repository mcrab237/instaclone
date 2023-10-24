import React from "react";
import { View, ScrollView, Text, StyleSheet, SafeAreaView, Touchable, TouchableOpacity } from "react-native";
import { Icon, ListItem, Avatar, Button } from "react-native-elements";

export default function NotificationsScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()} >
          <Icon name="arrow-left" type="font-awesome" color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications</Text>
        <Icon name="filter" type="font-awesome" color="#000" />
      </View>

      <ScrollView>
        {/* Monetization & shops */}
        <ListItem bottomDivider>
          <Icon name="dollar" type="font-awesome" color="#000" />
          <ListItem.Content>
            <ListItem.Title>Monetization & shops</ListItem.Title>
            <ListItem.Subtitle>Branded content and shopping.</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>

        <Text style={styles.sectionHeader}>Priority</Text>

        {/* Sample Notification Item */}
        <ListItem bottomDivider>
          <Avatar
            source={{
              uri: "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/344873692_718891926587895_2014352947666914133_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wQ86uwAyPtEAX_14FBE&_nc_ht=scontent-atl3-2.xx&oh=00_AfDdQ9sbDVFjcKQb85rcmA92NW-YwXX4h1ULtTU0XP1bsw&oe=6538024C",
            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>adaziwaa_ started following you.</ListItem.Title>
          </ListItem.Content>
          <Button title="Follow" type="solid" />
        </ListItem>

        {/* ... You can add more notifications similarly */}

        <Text style={styles.sectionHeader}>Today</Text>

        {/* Another sample notification */}
        <ListItem bottomDivider>
          <Avatar
            source={{
              uri: "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/344873692_718891926587895_2014352947666914133_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wQ86uwAyPtEAX_14FBE&_nc_ht=scontent-atl3-2.xx&oh=00_AfDdQ9sbDVFjcKQb85rcmA92NW-YwXX4h1ULtTU0XP1bsw&oe=6538024C",
            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>
              asiucal, tafiorade and 126 others liked your photo.
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d3d3d3",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
    color: "gray",
  },
});
