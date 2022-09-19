const PORT_START = 8800;
const APPs = ["Souffl3", "ANS", "WAV3", "Mobius", "Explorer"];

export const AppConfig = APPs.reduce(
  (prev, current, index) => [
    ...prev,
    {
      name: current,
      port: PORT_START + index + 1,
    },
  ],
  []
);
