import {ipcRenderer} from 'electron';

export async function startWinpro(
  ipAddress: string,
  username: string,
  password: string,
  directory: string,
) {
  const res = await ipcRenderer.invoke('spawnChild', 'WPSockClient.exe', [
    ipAddress,
    '1',
    username,
    password,
    directory,
  ]);
  return res;
}

export async function stopWinpro(ipAddress: string, password: string) {
  const res = await ipcRenderer.invoke('spawnChild', 'WPSockClient.exe', [
    ipAddress,
    '2',
    password,
  ]);
  return res;
}
