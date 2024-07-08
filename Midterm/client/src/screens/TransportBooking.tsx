import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import Fields from "../components/Fields";
import TypePrimaryLabelLabelSta from "../components/TypePrimaryLabelLabelSta";
import Facility from "../components/Facility";
import Tabbar1 from "../components/Tabbar1";
import { FontSize, FontFamily, Color, Padding, Border } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { useAppSelector } from "../reduxstore/hooks";

const TransportBooking = () => {
  const [openModal1, setOpenModal1] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const [openModal3, setOpenModal3] = React.useState(false);
  const [openModal4, setOpenModal4] = React.useState(false);

  
  const adults = useAppSelector((state) => state.ticket.adults);
  const babies = useAppSelector((state) => state.ticket.babies);
  const pets = useAppSelector((state) => state.ticket.pets);
  const luggages = useAppSelector((state) => state.ticket.luggages);

  const [adult, setAdult] = React.useState(adults);
  const [baby, setBaby] = React.useState(babies);
  const [pet, setPet] = React.useState(pets);
  const [luggage, setLuggage] = React.useState(luggages);

  const navigation = useNavigation<any>();

  function navigateBookingScreen() {
    navigation.navigate("Booking");
  }

  function navigateTransportFlightsScreen() {
    navigation.navigate("TransportFlights");
  }

  return (
    <View style={styles.transportBooking}>
      <TouchableOpacity style={styles.typearrow} onPress={navigateBookingScreen}>
        <Image
          style={styles.chevronIcon}
          contentFit="cover"
          source={require("../../assets/chevron.png")}
        />
        <Text style={styles.title}>Transport Booking</Text>
      </TouchableOpacity>
      
      <View style={styles.content}>
        <Fields />
        
        <View style={styles.passengerLuggage}>
          <Text style={styles.passengerLuggage1}>{`Passenger & Luggage`}</Text>

          <View style={styles.transportSpaceBlock}>
            <TouchableOpacity  onPress={() => setOpenModal1(true)}>
              <View style={styles.icon}>
                <Image
                  style={[styles.component2Icon, styles.component2IconLayout]}
                  contentFit="cover"
                  source={require("../../assets/component-2.png")}
                />
                <Text style={styles.text}>{adult}</Text>
              </View>
              <View style={[styles.line, styles.lineLayout]} />
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft: 24}} onPress={() => setOpenModal2(true)}>
              <View style={styles.icon}>
                <Image
                  style={[styles.component2Icon, styles.component2IconLayout]}
                  contentFit="cover"
                  source={require("../../assets/component-21.png")}
                />
                <Text style={styles.text}>{baby}</Text>
              </View>
              <View style={[styles.line, styles.lineLayout]} />
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft: 24}} onPress={() => setOpenModal3(true)}>
              <View style={styles.icon}>
                <Image
                  style={[styles.component2Icon, styles.component2IconLayout]}
                  contentFit="cover"
                  source={require("../../assets/component-22.png")}
                />
                <Text style={styles.text}>{pet}</Text>
              </View>
              <View style={[styles.line, styles.lineLayout]} />
            </TouchableOpacity>

            <TouchableOpacity style={{marginLeft: 24}} onPress={() => setOpenModal4(true)}>
              <View style={styles.icon}>
                <Image
                  style={[styles.component2Icon, styles.component2IconLayout]}
                  contentFit="cover"
                  source={require("../../assets/component-23.png")}
                />
                <Text style={styles.text}>{luggage}</Text>
              </View>
              <View style={[styles.line, styles.lineLayout]} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.passengerLuggage}>
          <Text style={styles.passengerLuggage1}>Class</Text>
          <View style={[styles.transport, styles.transportSpaceBlock]}>
            <TypePrimaryLabelLabelSta
              buttonText="Economy"
              typePrimaryLabelLabelStaPosition="unset"
              typePrimaryLabelLabelStaTop="unset"
              typePrimaryLabelLabelStaLeft="unset"
              typePrimaryLabelLabelStaWidth={98}
              typePrimaryLabelLabelStaAlignSelf="stretch"
              typePrimaryLabelLabelStaBackgroundColor="#fff"
              typePrimaryLabelLabelStaMarginTop="unset"
              typePrimaryLabelLabelStaBorderRadius={12}
              typePrimaryLabelLabelStaPaddingHorizontal="unset"
              typePrimaryLabelLabelStaPaddingVertical="unset"
              typePrimaryLabelLabelStaMarginLeft="unset"
              typePrimaryLabelLabelStaTextColor="#089083"
            />
            <TypePrimaryLabelLabelSta
              buttonText="Business"
              typePrimaryLabelLabelStaPosition="unset"
              typePrimaryLabelLabelStaTop="unset"
              typePrimaryLabelLabelStaLeft="unset"
              typePrimaryLabelLabelStaWidth={98}
              typePrimaryLabelLabelStaAlignSelf="stretch"
              typePrimaryLabelLabelStaBackgroundColor="#089083"
              typePrimaryLabelLabelStaMarginTop="unset"
              typePrimaryLabelLabelStaBorderRadius={12}
              typePrimaryLabelLabelStaPaddingHorizontal="unset"
              typePrimaryLabelLabelStaPaddingVertical="unset"
              typePrimaryLabelLabelStaMarginLeft={8}
              typePrimaryLabelLabelStaTextColor="#fff"
            />
          </View>
        </View>
        <Facility facility />
        <TypePrimaryLabelLabelSta
          buttonText="Search"
          typePrimaryLabelLabelStaPosition="unset"
          typePrimaryLabelLabelStaTop="unset"
          typePrimaryLabelLabelStaLeft="unset"
          typePrimaryLabelLabelStaWidth="unset"
          typePrimaryLabelLabelStaAlignSelf="stretch"
          typePrimaryLabelLabelStaBackgroundColor="#fea36b"
          typePrimaryLabelLabelStaMarginTop={32}
          typePrimaryLabelLabelStaBorderRadius={20}
          typePrimaryLabelLabelStaPaddingHorizontal="unset"
          typePrimaryLabelLabelStaPaddingVertical="unset"
          typePrimaryLabelLabelStaMarginLeft="unset"
          typePrimaryLabelLabelStaTextColor="#fff"
          onPress={navigateTransportFlightsScreen}
        />
      </View>
      <Tabbar1 />

      <Modal visible={openModal1} animationType="slide" transparent={true}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{backgroundColor: "white", padding: 15, width: '95%', height: 300, borderRadius: 10}}>
            <ScrollView>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal1(false); setAdult(1)}}>
                <Text style={styles.textmodal}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal1(false); setAdult(2)}}>
                <Text style={styles.textmodal}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal1(false); setAdult(3)}}>
                <Text style={styles.textmodal}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal1(false); setAdult(4)}}>
                <Text style={styles.textmodal}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal1(false); setAdult(5)}}>
                <Text style={styles.textmodal}>5</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal visible={openModal2} animationType="slide" transparent={true}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{backgroundColor: "white", padding: 15, width: '95%', height: 300, borderRadius: 10}}>
            <ScrollView>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setBaby(0)}}>
                <Text style={styles.textmodal}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setBaby(1)}}>
                <Text style={styles.textmodal}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setBaby(2)}}>
                <Text style={styles.textmodal}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setBaby(3)}}>
                <Text style={styles.textmodal}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setBaby(4)}}>
                <Text style={styles.textmodal}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal2(false); setBaby(5)}}>
                <Text style={styles.textmodal}>5</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal visible={openModal3} animationType="slide" transparent={true}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{backgroundColor: "white", padding: 15, width: '95%', height: 300, borderRadius: 10}}>
            <ScrollView>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal3(false); setPet(0)}}>
                <Text style={styles.textmodal}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal3(false); setPet(1)}}>
                <Text style={styles.textmodal}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal3(false); setPet(2)}}>
                <Text style={styles.textmodal}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal3(false); setPet(3)}}>
                <Text style={styles.textmodal}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal3(false); setPet(4)}}>
                <Text style={styles.textmodal}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal3(false); setPet(5)}}>
                <Text style={styles.textmodal}>5</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal visible={openModal4} animationType="slide" transparent={true}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{backgroundColor: "white", padding: 15, width: '95%', height: 300, borderRadius: 10}}>
            <ScrollView>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal4(false); setLuggage(0)}}>
                <Text style={styles.textmodal}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal4(false); setLuggage(1)}}>
                <Text style={styles.textmodal}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal4(false); setLuggage(2)}}>
                <Text style={styles.textmodal}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal4(false); setLuggage(3)}}>
                <Text style={styles.textmodal}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal4(false); setLuggage(4)}}>
                <Text style={styles.textmodal}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choosingmodal} onPress={() => {setOpenModal4(false); setLuggage(5)}}>
                <Text style={styles.textmodal}>5</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  component2IconLayout: {
    height: 24,
    width: 24,
  },
  lineLayout: {
    marginTop: 4,
    height: 1,
    width: 57,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  transportSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  passengerLuggage1: {
    fontSize: FontSize.bodyLSemiBold_size,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    color: Color.lightTextSecondary,
    textAlign: "left",
  },
  component2Icon: {
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.bodyXLRegular_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.bodySMedium,
    color: Color.green700,
    marginLeft: 4,
    width: 24,
    textAlign: "center",
  },
  icon: {
    width: 56,
    alignItems: "center",
    flexDirection: "row",
  },
  line: {
    borderColor: Color.green700,
  },
  line1: {
    borderColor: Color.lightTextSecondary,
  },
  passenger1: {
    marginLeft: 24,
  },
  passengerLuggage: {
    marginTop: 32,
  },
  transport: {
    width: 343,
  },
  content: {
    position: "absolute",
    top: 114,
    left: 0,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
  transportBooking: {
    backgroundColor: Color.lightBackgroundScreen,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
  title: {
    flex: 1,
    fontSize: FontSize.headingH4_size,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.headingH4,
    color: Color.lightUIElementContrast,
    textAlign: "center",
  },
  chevronIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  typearrow: {
    width: 375,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_21xl,
    top: 62,
    left: 0,
    position: "absolute",
  },
  textmodal: {
    textAlign: "center",
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
  }
});

export default TransportBooking;
