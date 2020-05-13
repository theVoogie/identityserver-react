export interface Person {
  id: number;
  firstName: string;
  lastName: string;
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
