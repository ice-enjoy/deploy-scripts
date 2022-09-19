const PORT_START = 8800;
const APPs = [
  "souffl3-aptos-vue",
  "aptos-store",
  "wav3-fe",
  "mobius-fe",
  "aptos-explorer",
];

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
