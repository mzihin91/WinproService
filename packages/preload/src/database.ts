import {ipcRenderer} from 'electron';

async function query(queryString: string) {
  const servers = await ipcRenderer.invoke('db-query', queryString);
  return servers;
}

export async function getServers() {
  return query('SELECT * FROM Servers');
}

export async function addServer() {
  // return query('SELECT * FROM Servers');
}
