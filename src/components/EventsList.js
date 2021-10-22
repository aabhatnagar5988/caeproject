import React, {useEffect} from 'react';
import {useEvents} from '../redux/hooks/useEvents';
import {
  View,
  Text,
  SectionList,
  SafeAreaView,
  StatusBar,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Style} from './styles';
import moment from 'moment';
export const EventsList = ({navigation}) => {
  const {fetchEvents, allEventsData, isLoadingData} = useEvents();

  useEffect(() => {
    fetchEvents();
  }, []);

  const getIcon = eventType => {
    let iconName = '';
    switch (eventType) {
      case 'FLT':
        iconName = 'plane';
        break;
      case 'DO':
        iconName = 'umbrella';
        break;
      case 'SBY':
        iconName = 'file';
        break;
      case 'OFD':
        iconName = 'suitcase';
        break;

      case 'POS':
        iconName = 'coffee';
        break;
    }
    return (
      <View style={Style.iconContainer}>
        <Icon name={iconName} size={30} color="#333" />
      </View>
    );
  };

  const getTitle = item => {
    let title = '';
    switch (item.DutyID) {
      case 'FLT':
      case 'POS':
        title = `${item.Departure} - ${item.Destination}`;
        break;
      case 'DO':
      case 'OFD':
      case 'SBY':
        title = item.DutyCode;
        break;
    }
    return title;
  };

  const getTimings = item => {
    let title = '';
    const departDate = moment(item.Time_Depart, 'HH:mm:ss');
    const arrivalDate = moment(item.Time_Arrive, 'HH:mm:ss');
    const differenceHours = parseInt(
      moment.duration(arrivalDate.diff(departDate)).asHours(),
    );

    switch (item.DutyID) {
      case 'FLT':
      case 'POS':
      case 'SBY':
        title = `${departDate.format('HH:mm')} - ${arrivalDate.format(
          'HH:mm',
        )}`;
        break;
      case 'OFD':
        title = `${differenceHours} Hours`;
        break;
    }
    return title;
  };

  const getSubTitle = item => {
    let title = '';
    switch (item.DutyID) {
      case 'POS':
      case 'DO':
        title = item.DutyID;
        break;
      case 'OFD':
        title = item.Destination;
        break;
      case 'SBY':
        title = `${item.DutyCode} (${item.Destination})`;
        break;
    }
    return title;
  };

  const Item = ({title}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EventDetailPage', {data: title});
        }}>
        <View style={Style.itemContainerStyle}>
          {getIcon(title.DutyID)}
          <View style={Style.textContainer}>
            <Text style={Style.itemTextStyle}>{getTitle(title)}</Text>
            <View style={Style.rowContainer}>
              <Text style={Style.subTitleText}>{getSubTitle(title)}</Text>
              <Text style={Style.dateText}>{getTimings(title)}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const Separator = () => <View style={Style.dividerStyle} />;

  return (
    <SafeAreaView style={Style.container}>
      {allEventsData && (
        <SectionList
          sections={allEventsData}
          refreshControl={
            <RefreshControl
              refreshing={isLoadingData}
              onRefresh={fetchEvents}
            />
          }
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item title={item} />}
          SectionSeparatorComponent={Separator}
          ItemSeparatorComponent={Separator}
          renderSectionHeader={({section: {title}}) => (
            <View style={Style.headerStyle}>
              <Text style={Style.headingTextStyle}>{title}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};
