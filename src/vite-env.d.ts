/// <reference types="vite/client" />

declare module '*.csv?raw' {
  const content: string;
  export default content;
}

declare module '@/assets/*.csv?raw' {
  const content: string;
  export default content;
}
