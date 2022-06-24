/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URI_URL_GRAPHCMS: string
  readonly VITE_URI_API_ACCES_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}