import {ipcRenderer} from 'electron';

export async function startWinpro(ipAddress: string, directory: string) {
  const res = await ipcRenderer.invoke('spawnChild', 'WPSockClient.exe', [
    ipAddress,
    '1',
    directory,
  ]);
  return res;
}

export async function stopWinpro(ipAddress: string) {
  const res = await ipcRenderer.invoke('spawnChild', 'WPSockClient.exe', [ipAddress, '2']);
  return res;
}
