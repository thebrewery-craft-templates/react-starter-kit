/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Parse from 'parse';

export const PersonComponent = () => {
  // State variables
  const [person, setPerson] = useState(null);

  const names = ['Juan', 'Dory', 'Chris'];
  const emails = [
    'uno@thebrewery.app',
    'dos@thebrewery.app',
    'tres@thebrewery.app',
  ];

  async function addPerson() {
    try {
      const randomName = Math.floor(Math.random() * names.length);
      const randomEmail = Math.floor(Math.random() * emails.length);
      // create a new Parse Object instance
      const Person = new Parse.Object('Person');
      // define the attributes you want for your Object
      Person.set('name', names[randomName]);
      Person.set('email', emails[randomEmail]);
      // save it on Craft Data Store (check your Dashboard)
      await Person.save();
      alert(`Person [${Person.get('name')}, ${Person.get('email')}] saved!`);
    } catch (error) {
      alert(
        `Error saving new person: ${error}. Check browser console for more details.`,
      );
    }
  }

  async function fetchPerson() {
    // create your Parse Query using the Person Class you've created
    try {
      const randomName = Math.floor(Math.random() * names.length);
      const query = new Parse.Query('Person');
      // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
      query.equalTo('name', names[randomName]);
      // run the query
      const Person = await query.first();
      // access the Parse Object attributes
      console.log('person name: ', Person.get('name'));
      console.log('person email: ', Person.get('email'));
      console.log('person id: ', Person.id);
      setPerson(Person);
    } catch (error) {
      alert(
        `Error fetching person object: ${error}. Check browser console for more details.`,
      );
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <button onClick={addPerson}>Add Person</button>
        <button onClick={fetchPerson}>Fetch Person</button>
      </div>
      <div style={{ marginTop: '10px', position: 'relative' }}>
        {person !== null && (
          <div style={{ fontSize: '20px' }}>
            <p>{`{ name: ${person.get('name')}, email: ${person.get(
              'email',
            )} }`}</p>
          </div>
        )}
      </div>
    </div>
  );
};
