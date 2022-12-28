import { openDB } from 'idb';
// Initialize DB
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
//Put into database to edit rather than add
export const putDb = async (content) => {
  console.log('PUT into database');  

  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, content: content });
  const result = await request;
  console.log('Saved to DB', result);
};
// TODO: Add logic for a method that gets all the content from the database
// Get all items from DB
export const getDb = async () => {
  console.log('GET from database');

  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  console.log('result.vale', result);
  return result;
}


initdb();
