import {
  collection,
  getDocs,
  query,
  Timestamp,
  orderBy,
} from 'firebase/firestore';
import { auth, db } from '../firebaseConfig/firebase';
import { GeneralFlight } from '../../ClassObject/flightClass';

export async function fetchFlights() {
  if (auth.currentUser) {
    const flightsCollectionRef = collection(db, 'flights');
    const q = query(flightsCollectionRef);

    try {
      const querySnapshot = await getDocs(q);
      const flightsList: GeneralFlight[] = [];

      querySnapshot.forEach((doc) => {
        const { date, flightNumber, fromDestination, toDestination, price, time, seats } = doc.data();
        // Convert Firebase timestamp to JavaScript Date object
        const dateObj = date.toDate(); // Assuming date is a Firebase Timestamp

        flightsList.push({
          id: doc.id,
          date: dateObj,
          flightNumber,
          fromDestination,
          toDestination,
          price,
          time,
          seats,
        });
      });

      console.log('Flights List:', flightsList.length);
      return flightsList;
    } catch (error) {
      console.error('Error fetching flights:', error);
      throw error;
    }
  } else {
    console.error('User not authenticated.');
    throw new Error('User not authenticated.');
  }
}
