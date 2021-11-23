import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Table, Row, Rows, TableWrapper } from "react-native-table-component";
import COLORS from "../../consts/colors";

export const Tables = () => {
  const tableData = {
    headerOfTable: [
      "Id",
      "Name",
      "Location",
      "Region",
      "Contact",
      "Action",
    ],
    dataForTable: [
      ["1", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["2", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["3", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["4", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["5", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["6", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["7", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["8", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["9", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["10", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["11", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["11", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["11", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["11", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["11", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["11", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["11", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["11", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["11", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["11", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["11", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["11", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["11", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["11", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
      ["11", "Agbetsi Tsito", "Keta", "Volta", "0254897645", "Edit/Del"],
    ],
  };

  return (
    <View
      style={{ flex: 4, padding: 10, paddingTop: 20, backgroundColor: "#fff" }}
    >
      <Text
        style={{
          textAlign: "center",
          color: COLORS.primary,
          fontSize: 15,
          margin: 5,
          fontWeight:'600'
        }}
      >
        REGISTERED FISHER FOLKS
      </Text>
      <ScrollView horizontal={false}>
        <Table borderStyle={styles.border}>
          <Row
            data={tableData.headerOfTable}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={tableData.dataForTable} textStyle={styles.text} />
        </Table>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    height: 40,
    backgroundColor: "#f1f8ff",
  },
  text: {
    textAlign: "center",
    fontSize: 12,
    margin: 3,
  },
  border: { borderWidth: 2, borderColor: "#c8e1ff" },
});
