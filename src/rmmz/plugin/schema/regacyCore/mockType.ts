export interface Person {
  name: string;
  age: number;
}

export interface Family {
  father: Person;
  mother: Person;
}

export interface School {
  name: string;
  students: Person[];
}
