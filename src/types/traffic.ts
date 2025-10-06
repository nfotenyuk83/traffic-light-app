export type LightColor = 'red' | 'yellow' | 'green';

export interface LightDurations {
  red: number;
  yellow: number;
  green: number;
}

export interface TrafficLightState {
  activeLight: LightColor;
  timer: number;
}
