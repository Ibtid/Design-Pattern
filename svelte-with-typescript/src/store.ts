import { writable } from 'svelte/store';

type Store = {
  name: string;
  age: number;
  admin: boolean;
};

export const store = writable<Store>({
  name: 'John Doe',
  age: 22,
  admin: false,
});