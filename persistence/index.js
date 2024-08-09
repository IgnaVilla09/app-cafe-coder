import * as ExpoSQLite from "expo-sqlite";

const db = ExpoSQLite.openDatabase("sesiones.db");

export const initSQliteDB = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS sesiones (
                    localId TEXT PRIMARY KEY NOT NULL,
                    email TEXT NOT NULL,
                    token TEXT NOT NULL
                )`,
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const insertSession = (session) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO sesiones (localId, email, token) VALUES (?, ?, ?)`,
        [session.localId, session.email, session.token],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const getSession = (session) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM sesiones`,
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  console.log("Obteniendo session");
  return promise;
};

export const deleteSession = (session) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM sesiones`,
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  console.log("Sesión terminada");
  return promise;
};
