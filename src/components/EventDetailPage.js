import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Style} from './styles';
export const EventDetailPage = props => {
  const {
    Flightnr,
    Date,
    Tail,
    Departure,
    Destination,
    Time_Depart,
    Time_Arrive,
    DutyCode,
    Captain,
  } = props.route.params.data;

  const aircraftType = props.route.params.data['Aircraft Type'];
  const firstOfficer = props.route.params.data['First Officer'];
  const flightAttendant = props.route.params.data['Flight Attendant'];

  useEffect(() => {
    console.log(props.route.params.data);
  }, []);

  const detailItem = (title, value, style) => {
    return (
      <View style={[Style.detailItemStyle, style]}>
        <Text style={Style.itemTextStyle}>{title}</Text>
        <Text style={[Style.headingTextStyle, Style.valueTextStyle]}>
          {value.length ? value : 'NA'}
        </Text>
      </View>
    );
  };

  return (
    <View style={Style.container}>
      {detailItem('Date', Date)}
      {detailItem('Event Type', DutyCode, {borderBottomWidth: 0})}
      <View style={[Style.headerStyle, Style.verticalMarginStyle]}>
        <Text style={Style.itemTextStyle}>Flight Details</Text>
      </View>
      {detailItem('Flight Number', Flightnr)}
      <View style={Style.rowStyle}>
        {detailItem('Departure', Departure, {flex: 1})}
        {detailItem('Destination', Destination, {flex: 1})}
      </View>
      <View style={Style.rowStyle}>
        {detailItem('Departure Time', Time_Depart, Style.removeBottomStyle)}
        {detailItem('Arrival Time', Time_Arrive, Style.removeBottomStyle)}
      </View>
      <View style={[Style.headerStyle, Style.verticalMarginStyle]}>
        <Text style={Style.itemTextStyle}>Aircraft Details</Text>
      </View>
      <View style={Style.rowStyle}>
        {detailItem('Aircraft Type', aircraftType, Style.removeBottomStyle)}
        {detailItem('Tail', Tail, Style.removeBottomStyle)}
      </View>

      <View style={[Style.headerStyle, Style.verticalMarginStyle]}>
        <Text style={Style.itemTextStyle}>Crew Details</Text>
      </View>
      {detailItem('Captain', Captain)}
      {detailItem('First Officer', firstOfficer)}
      {detailItem('Flight Attendant', flightAttendant)}
    </View>
  );
};
