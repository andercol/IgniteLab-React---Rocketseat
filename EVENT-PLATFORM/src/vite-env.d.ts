/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_URI_ROCKETSEAT: string
    readonly VITE_URI_GRAPHCMS: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }