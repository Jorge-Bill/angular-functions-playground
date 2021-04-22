export interface Hero {
  id: number;
  name: string;
  emotion?: string;
}

export const heroes: Hero[] = [
  { id: 1, name: 'Dr Nice',  emotion: 'happy'},
  { id: 2, name: 'Narco',     emotion: 'sad'},
  { id: 3, name: 'Windstorm', emotion: 'confused'},
  { id: 4, name: 'Magneto'},
  { id: 1, name:'Superman'},
  { id: 2, name:'Batman'},
  { id: 5, name:'BatGirl'},
  { id: 3, name:'Robin'},
  { id: 4, name:'Flash'}
];



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/