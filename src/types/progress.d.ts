declare module 'react-sweet-progress' {
    import { FunctionComponent } from 'react';
    const Progress: FunctionComponent<{ percent: number; [key: string]: unknown }>;

    export { Progress };
}
