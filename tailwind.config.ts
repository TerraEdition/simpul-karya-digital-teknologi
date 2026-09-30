import type { Config } from "tailwindcss";
const config: Config = { content:["./src/**/*.{ts,tsx}"], theme:{extend:{colors:{surface:"#f9f9ff",primary:"#0b64bc",navy:"#151b2a",muted:"#596171",border:"#dfe4ef",soft:"#f1f3ff"},fontFamily:{sans:["Inter","Arial","sans-serif"]}}}, plugins:[] };
export default config;
