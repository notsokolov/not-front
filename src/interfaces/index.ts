// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type Slug = string | null | undefined;

export interface NavLinks  {
    activeRoute: string;
    activePath: string;
    href: string;
    title: string;
  }
