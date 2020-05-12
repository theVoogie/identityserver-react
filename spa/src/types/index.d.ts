export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  norwegianId: string;
  dob: string;
  address: string;
  phone: string;
  email: string;
  healthStatus: string;
  healthStatusText: string;
  seagoing?: Seagoing[];
  certificates?: Certificate[];
  education?: Education[];
}

export interface Vessel {
  name: string;
  url: string;
}

export interface Seagoing {
  id: number;
  employer: string;
  role: string;
  vessel: Vessel;
  totalDays: number;
  time: object[];
}

export interface Education {
  id: number;
  status: boolean;
  type: string;
  title: string;
}

export interface Certificate {
  id: number;
  title: string;
  status: string;
  statusText: string;
}

export interface Persons {
  messages: Person[];
}

export interface PersonsState {
  person: Person;
}

export interface Message {
  text: string;
}

export interface TestState {
  messages: Message[];
}

export * from './common';
