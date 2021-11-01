export type ReduxType = {
  person: StateType,
  saved: StateType | null,
}

export type StateType = {
  name: string;
  age: string;
  children: ChildType[];
};

export type ChildType = {
  name: string;
  age: string;
};