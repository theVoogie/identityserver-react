// import { fromJS } from 'immutable';
import { FETCH_PERSONS_SUCCEEDED, PersonActionTypes } from './action-types';
import { Person } from '../../../types';

// const initialState = fromJS({
//   id: 1,
//   firstName: 'Kalle',
//   lastName: 'Person',
//   healthStatus: 'valid',
//   healthStatusText: 'Gyldig t.o.m. 12.12.2021'
// });

const initialState: Person = {
  id: 1,
  firstName: 'Kalle',
  lastName: 'Person',
  norwegianId: '14027244850',
  dob: '12.12.78',
  address: 'Slottsplassen 1, 0001 Oslo',
  phone: '+47 123 55 122',
  email: 'kalle.person@gmail.com',
  healthStatus: 'valid',
  healthStatusText: 'Gyldig t.o.m. 12.12.2022',
  certificates: [
    {
      id: 1,
      status: 'valid',
      title: 'DEKKSOFFISER Klasse 3',
      statusText: 'Til saksbehandling'
    },
    {
      id: 2,
      status: 'valid',
      title: 'DEKKSOFFISER Klasse 3',
      statusText: 'Gyldig t.o.m. 01.08.2019'
    },
    {
      id: 3,
      status: 'valid',
      title: 'DEKKSOFFISER Klasse 3',
      statusText: 'Gyldig t.o.m. 01.08.2019'
    },
    {
      id: 4,
      status: 'valid',
      title: 'DEKKSOFFISER Klasse 3',
      statusText: 'Gyldig t.o.m. 01.08.2019'
    }
  ],
  seagoing: [
    {
      id: 1,
      employer: 'Farstad Shipping',
      role: '2nd Mate',
      vessel: {
        name: 'Far Symphony',
        url: '/vessels/1234567890'
      },
      totalDays: 67,
      time: [
        {
          id: 1,
          dateFromTo: '28.06.16 - 13.07.16',
          days: 16
        },
        {
          id: 2,
          dateFromTo: '13.07.16 - 02.08.16',
          days: 21
        },
        {
          id: 3,
          dateFromTo: '28.08.16 - 26.08.16',
          days: 30
        }
      ]
    },
    {
      id: 2,
      employer: 'Haugesund Shipping',
      role: '3rd Mate',
      vessel: {
        name: 'Far Melody',
        url: '/vessels/1234567891'
      },
      totalDays: 114,
      time: [
        {
          id: 1,
          dateFromTo: '28.06.16 - 13.07.16',
          days: 16
        },
        {
          id: 2,
          dateFromTo: '13.07.16 - 02.08.16',
          days: 21
        },
        {
          id: 3,
          dateFromTo: '28.08.16 - 26.08.16',
          days: 30
        }
      ]
    },
    {
      id: 3,
      employer: 'Oslo Shipping',
      role: '3rd Mate',
      vessel: {
        name: 'Far Philharmonic',
        url: '/vessels/1234567891'
      },
      totalDays: 84,
      time: [
        {
          id: 1,
          dateFromTo: '28.06.16 - 13.07.16',
          days: 16
        },
        {
          id: 2,
          dateFromTo: '13.07.16 - 02.08.16',
          days: 21
        },
        {
          id: 3,
          dateFromTo: '28.08.16 - 26.08.16',
          days: 30
        }
      ]
    }
  ],
  education: [
    {
      id: 1,
      status: true,
      type: 'Utdanning',
      title: 'Gyldig...'
    },
    {
      id: 2,
      status: true,
      type: 'Utdanning',
      title: 'Gyldig...'
    },
    {
      id: 3,
      status: true,
      type: 'Utdanning',
      title: 'Gyldig...'
    },
    {
      id: 4,
      status: true,
      type: 'Utdanning',
      title: 'Gyldig...'
    }
  ]
};

export default function reducer(
  state = initialState,
  action: PersonActionTypes // Actions<typeof actions>
) {
  switch (action.type) {
    case FETCH_PERSONS_SUCCEEDED:
      console.log('action.payload: ' + JSON.stringify(action.payload, null, 2)); // eslint-disable-line
      return action.payload.person;
    default:
      return state;
  }
}
