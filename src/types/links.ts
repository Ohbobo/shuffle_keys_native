export type Mode = "classic" | "random" | "blind";

export interface ModeState {
    value: Mode;
    timer: number;
    isRunning: boolean;
}

export interface LinksGroupProps {
    title: string;
    mode: Mode;
    path?: string;
    time: number;
    description: string;
}

export interface LinksProps {
    links: LinksGroupProps[];
}