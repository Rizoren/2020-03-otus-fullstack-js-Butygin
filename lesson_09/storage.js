import { writable, get } from 'svelte/store';

export const store = writable([
    { id: 1, name: 'Add', typeValue: 1, value: 5000, date: new Date('2020-06-15') },
    { id: 2, name: 'Sub', typeValue: -1, value: 250, date: new Date('2020-06-25') },
    { id: 3, name: 'Add', typeValue: 1, value: 1000, date: new Date('2020-07-15') },
    { id: 4, name: 'Sub', typeValue: -1, value: 2000, date: new Date('2020-07-18') },
    { id: 5, name: 'Add', typeValue: 1, value: 3000, date: new Date('2020-07-25') },
    { id: 6, name: 'Sub', typeValue: -1, value: 1000, date: new Date('2020-08-15') },
    { id: 7, name: 'Sub', typeValue: -1, value: 1000, date: new Date('2020-08-18') },
    { id: 8, name: 'Add', typeValue: 1, value: 5000, date: new Date('2020-09-15')},
    { id: 9, name: 'Sub', typeValue: -1, value: 500, date: new Date('2020-09-15')},
    { id: 10, name: 'Add', typeValue: 1, value: 500, date: new Date('2020-10-15')},
]);

export const newId = get(store).reduce((a,b)=>a.id>b.id?a:b).id+1;
export const recById = (id) => id != 0 ? get(store).filter(i => i.id == id)[0]
    : {id: 0, name: '', typeValue: 1, value: 0, date: ''};

