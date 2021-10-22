import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  dividerStyle: {width: '100%', height: 1, backgroundColor: '#888'},
  headerStyle: {
    paddingLeft: 10,
    backgroundColor: '#eee',
    paddingVertical: 3,
    width: '100%',
  },
  headingTextStyle: {fontWeight: 'bold', color: '#000', fontSize: 14},
  itemContainerStyle: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 10,
    paddingVertical: 3,
    alignItems: 'center',
  },
  itemTextStyle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  textContainer: {flex: 1, marginLeft: 10},
  rowContainer: {flexDirection: 'row', marginTop: 2},
  dateText: {flex: 1, textAlign: 'right', color: 'red'},
  subTitleText: {
    flex: 1,
    fontWeight: '500',
    color: '#888',
    fontSize: 16,
  },
  detailItemStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  valueTextStyle: {marginTop: 5, color: '#777'},
  rowStyle: {flexDirection: 'row'},
  verticalMarginStyle: {marginVertical: 10},
  removeBottomStyle: {
    flex: 1,
    borderBottomWidth: 0,
  },
});
