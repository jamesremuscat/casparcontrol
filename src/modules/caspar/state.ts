import { CasparCG } from 'casparcg-connection';

export interface State {
  connected: boolean,
  setConnected: (connected: boolean) => void,
  connect: ({ host, port }: ConnectParams) => void,
  disconnect: () => void,
  connection: CasparCG | null,

  media: MediaItem[],
  refreshMedia: () => void,

  play: (params: PlayParams) => void
}

export interface PlayParams {
  channel: number,
  layer: number,
  clip: string
}

export interface ConnectParams {
  host?: string,
  port?: number
}

export enum MediaType {
  AUDIO = 'AUDIO',
  MOVIE = 'MOVIE',
  STILL = 'STILL'
}

export interface MediaItem {
  clip: string,
  datetime: string,
  framerate: string,
  frames: string,
  size: string,
  type: MediaType
}
