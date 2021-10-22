import {useSelector, useDispatch} from 'react-redux';
import {allEvents, isLoading} from '../selector/rootSelector';
import {getAllEvents, userDataReceived} from '../actions/useraction';
import axios from 'axios';
import moment from 'moment';

export const useEvents = () => {
  const dispatch = useDispatch();
  const isLoadingData = useSelector(isLoading);
  const allEventsData = useSelector(allEvents);

  const getEventsSectioned = allEventsList => {
    const sortedArr = allEventsList.sort((a, b) => {
      return moment(a.Date, 'DD/MM/YYYY') - moment(b.Date, 'DD/MM/YYYY');
    });

    let res = sortedArr.reduce((re, o) => {
      let existObj = re.find(
        obj =>
          obj.title === moment(o.Date, 'DD/MM/YYYY').format('dd D MMM. YYYY'),
      );

      if (existObj) {
        existObj.data.push(o);
      } else {
        re.push({
          title: moment(o.Date, 'DD/MM/YYYY').format('dd DD MMM. YYYY'),
          data: [o],
        });
      }
      return re;
    }, []);
    return res;
  };

  const fetchEvents = () => {
    dispatch(getAllEvents());
    axios
      .get('https://rosterbuster.aero/wp-content/uploads/dummy-response.json')
      .then(data => {
        dispatch(userDataReceived(getEventsSectioned(data.data)));
      });
  };

  return {
    isLoadingData,
    allEventsData,
    fetchEvents,
  };
};
