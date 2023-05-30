import {ipcRenderer} from 'electron';

async function query(queryString: string) {
  const res = await ipcRenderer.invoke('db-query', queryString);
  return res;
}

async function prepare(queryString: string, index: readonly number[]) {
  console.log(index);
  const res = await ipcRenderer.invoke('db-prepare', queryString, index);
  return res;
}

export function getServers() {
  return query('SELECT rowid as id, * FROM Servers');
}

export function addReplaceServer(data: string) {
  return query(
    `INSERT OR REPLACE INTO Servers (name, ipAddress, status, directory) VALUES (${data})`,
  );
}

export function removeServers(index: readonly number[]) {
  return prepare('DELETE FROM Servers WHERE rowId=?', index);
}
