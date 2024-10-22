// src/types.d.ts
declare module '*.md' {
  const content: string;
  export default content;
}

// webpack require.context
declare module NodeJS {
  interface RequireContext {
    keys(): string[];
    (id: string): any;
    <T>(id: string): T;
    resolve(id: string): string;
    /** The module id of the context module. This may be useful for module.hot.accept. */
    id: string;
  }
}

interface NodeRequire {
  context(
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp
  ): RequireContext;
}