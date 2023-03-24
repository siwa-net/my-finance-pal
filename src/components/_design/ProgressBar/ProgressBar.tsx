import { FunctionComponent } from 'react';
import { Progress } from 'react-sweet-progress';

export interface ProgressBarProps {
    readonly percentage: number;
}

export const ProgressBar: FunctionComponent<ProgressBarProps> = ({ percentage }) => (
    <Progress percent={percentage} theme={{ active: { color: '#84844c' } }} />
);
