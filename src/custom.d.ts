declare module '*.md' {
    const content: string;
    export default content;
  }
  
  declare module NodeJS {
    interface Require {
      context: (
        directory: string,
        useSubdirectories: boolean,
        regExp: RegExp,
      ) => {
        keys(): string[];
        (id: string): string;
        <T>(id: string): T;
        id: string;
        resolve(id: string): string;
      };
    }
  }