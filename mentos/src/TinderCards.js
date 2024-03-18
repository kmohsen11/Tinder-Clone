import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import { collection, onSnapshot } from 'firebase/firestore';
import database from './firebase'; // This imports your Firestore instance correctly
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // Reference to the collection
    const peopleCollectionRef = collection(database, 'people');
    // Listen to collection updates
    const unsubscribe = onSnapshot(peopleCollectionRef, (snapshot) => {
      const peopleData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPeople(peopleData);
    });
    

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1> Cards </h1>

      <div className='TinderCards_cardContainer'>
        {people.map((person) => (
          <TinderCard className='swipe' key={person.id || person.name} preventSwipe={['up', 'down']}>
            <div style={{ backgroundImage: `url(${person.url})` }} className='card'>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
