import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Modal, ScrollView, Platform } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize, Padding } from "../../GlobalStyles";
import { useAppDispatch, useAppSelector } from "../reduxstore/hooks";
import DateTimePicker from "@react-native-community/datetimepicker";
import { updateDepDate, updateRetDate } from "../reduxstore/ticketSlice";
import { updateFromDestination, updateToDestination } from "../reduxstore/flightSlice";

const Fields = () => {
  const dispatch = useAppDispatch();

  const [openModal1, setOpenModal1] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const [openModal3, setOpenModal3] = React.useState(false);
  const [openModal4, setOpenModal4] = React.useState(false);
  
  const fromDestination = useAppSelector((state) => state.ticket.fromDestination);
  const toDestination = useAppSelector((state) => state.ticket.toDestination);

  const [fromDes, setFromDes] = React.useState(fromDestination);
  const [toDes, setToDes] = React.useState(toDestination);
  const [dep, setDep] = React.useState(new Date());
  const [ret, setRet] = React.useState(new Date());

  function handlerSwapping() {
    const tempFromDes = fromDes;
    const tempToDes = toDes;
    setFromDes(tempToDes);
    setToDes(tempFromDes);
    dispatch(updateFromDestination({ fromDestination: fromDes }));
    dispatch(updateToDestination({ toDestination: toDes }));
  }

  const handleDepDateChange = (event, selectedDate) => {
    if (selectedDate) {
      console.log(selectedDate); 
      setDep(selectedDate); 
      setOpenModal3(false); 
      dispatch(updateDepDate({ depDate: dep }));
    }
  }

  const handleRetDateChange = (event, selectedDate) => {
    if (selectedDate) {
      console.log(selectedDate); 
      setRet(selectedDate); 
      setOpenModal4(false); 
      dispatch(updateRetDate({ retDate: ret }))
    }
  }

  return (
    <View>
      <View style={styles.fields1}>
        <View style={styles.fields2}>
          <TouchableOpacity style={[styles.typetitle, {width: 343}]} onPress={() => setOpenModal1(true)}>
            <Text style={[styles.name, styles.nameTypo]}>From</Text>
            <Text style={[styles.text, styles.nameTypo]}>{fromDes}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.typetitle, {width: 343, marginTop: 8}]} onPress={() => setOpenModal2(true)}>
            <Text style={[styles.name, styles.nameTypo]}>To</Text>
            <Text style={[styles.text, styles.nameTypo]}>{toDes}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlerSwapping}>
          <Image
            style={styles.arrowsIcon}
            contentFit="cover"
            source={require("../../assets/arrows.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.fields3}>
        <TouchableOpacity style={[styles.typetitle, {flex: 1}]} onPress={() => setOpenModal3(true)}>
          <Text style={[styles.name, styles.nameTypo]}>Departure</Text>
          <Text style={[styles.text, styles.nameTypo]}>{dep.toLocaleDateString()}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.typetitle, {flex: 1, marginLeft: 16}]} onPress={() => setOpenModal4(true)}>
          <Text style={[styles.name, styles.nameTypo]}>Return</Text>
          <Text style={[styles.text, styles.nameTypo]}>{ret.toLocaleDateString()}</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={openModal1} animationType="slide" transparent={true}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{backgroundColor: "white", padding: 15, width: '95%', height: 300, borderRadius: 10}}>
            <ScrollView>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal1(false); setFromDes("New York (NYC)"); dispatch(updateFromDestination({ fromDestination: fromDes }));}} >
                <Text style={styles.textmodal}>New York (NYC)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal1(false); setFromDes("Los Angeles (LA)"); dispatch(updateFromDestination({ fromDestination: fromDes }));}}>
                <Text style={styles.textmodal}>Los Angeles (LA)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal1(false); setFromDes("Chicago (CHI)"); dispatch(updateFromDestination({ fromDestination: fromDes }));}}>
                <Text style={styles.textmodal}>Chicago (CHI)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal1(false); setFromDes("Houston (HOU))"); dispatch(updateFromDestination({ fromDestination: fromDes }));}}>
                <Text style={styles.textmodal}>Houston (HOU)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal1(false); setFromDes("Dallas (DAL)"); dispatch(updateFromDestination({ fromDestination: fromDes }));}}>
                <Text style={styles.textmodal}>Dallas (DAL)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal1(false); setFromDes("San Jose (SJC)"); dispatch(updateFromDestination({ fromDestination: fromDes }));}}>
                <Text style={styles.textmodal}>San Jose (SJC)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal1(false); setFromDes("Memphis (MEM)"); dispatch(updateFromDestination({ fromDestination: fromDes }));}}>
                <Text style={styles.textmodal}>Memphis (MEM)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal1(false); setFromDes("San Diego (SAN)"); dispatch(updateFromDestination({ fromDestination: fromDes }));}}>
                <Text style={styles.textmodal}>San Diego (SAN)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal1(false); setFromDes("San Francisco (SFO)"); dispatch(updateFromDestination({ fromDestination: fromDes }));}}>
                <Text style={styles.textmodal}>San Francisco (SFO)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal1(false); setFromDes("Denver (DEN)"); dispatch(updateFromDestination({ fromDestination: fromDes }));}}>
                <Text style={styles.textmodal}>Denver (DEN)</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal visible={openModal2} animationType="slide" transparent={true}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{backgroundColor: "white", padding: 15, width: '95%', height: 300, borderRadius: 10}}>
            <ScrollView>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setToDes("New York (NYC)"); dispatch(updateToDestination({ toDestination: toDes }));}}>
                <Text style={styles.textmodal}>New York (NYC)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setToDes("Los Angeles (LA)"); dispatch(updateToDestination({ toDestination: toDes }));}}>
                <Text style={styles.textmodal}>Los Angeles (LA)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setToDes("Chicago (CHI)"); dispatch(updateToDestination({ toDestination: toDes }));}}>
                <Text style={styles.textmodal}>Chicago (CHI)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setToDes("Houston (HOU))"); dispatch(updateToDestination({ toDestination: toDes }));}}>
                <Text style={styles.textmodal}>Houston (HOU)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setToDes("Dallas (DAL)"); dispatch(updateToDestination({ toDestination: toDes }));}}>
                <Text style={styles.textmodal}>Dallas (DAL)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setToDes("San Jose (SJC)"); dispatch(updateToDestination({ toDestination: toDes }));}}>
                <Text style={styles.textmodal}>San Jose (SJC)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setToDes("Memphis (MEM)"); dispatch(updateToDestination({ toDestination: toDes }));}}>
                <Text style={styles.textmodal}>Memphis (MEM)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setToDes("San Diego (SAN)"); dispatch(updateToDestination({ toDestination: toDes }));}}>
                <Text style={styles.textmodal}>San Diego (SAN)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setToDes("San Francisco (SFO)"); dispatch(updateToDestination({ toDestination: toDes }));}}>
                <Text style={styles.textmodal}>San Francisco (SFO)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setToDes("Denver (DEN)"); dispatch(updateToDestination({ toDestination: toDes }));}}>
                <Text style={styles.textmodal}>Denver (DEN)</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal visible={openModal3} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DateTimePicker
              testID="dateDepTimePicker"
              value={dep}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleDepDateChange}
            />
          </View>
        </View>
      </Modal>

      <Modal visible={openModal4} animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DateTimePicker
              testID="dateRetTimePicker"
              value={ret}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleRetDateChange}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  fields2: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  arrowsIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  button: {
    top: 38,
    left: 271,
    borderRadius: Border.br_xs,
    backgroundColor: Color.peach300,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_sm,
    flexDirection: "row",
    position: "absolute",
  },
  fields1: {
    height: 116,
    width: 343,
  },
  fields3: {
    marginTop: 16,
    flexDirection: "row",
    width: 343,
  },
  nameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyMRegular,
  },
  name: {
    fontSize: FontSize.bodySMedium_size,
    lineHeight: 16,
    color: Color.lightTextSecondary,
  },
  text: {
    fontSize: FontSize.bodyXLRegular_size,
    lineHeight: 22,
    color: Color.lightUIElementContrast,
    marginTop: 4,
  },
  typetitle: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.lightTextWhite,
    height: 54,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xs,
    paddingBottom: Padding.p_base,
  },
  textmodal: {
    textAlign: "left",
    fontFamily: FontFamily.bodyMRegular,
    fontSize: FontSize.bodyXLRegular_size,
    lineHeight: 22,
    color: Color.lightUIElementContrast,
    marginTop: 4,
  },
  choosingmodal: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.lightTextWhite,
    height: 54,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_9xs,
    paddingBottom: Padding.p_base,
    width: 320, 
    borderWidth: 1,
    marginTop: 8,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#080516",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});

export default Fields;
