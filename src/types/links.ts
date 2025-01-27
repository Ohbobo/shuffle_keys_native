export type Mode = "classic" | "random" | "blind";

export interface ModeState {
    value: Mode;
    timer: number;
    isRunning: boolean;
}

export interface LinksGroupProps {
    description: string;
    mode: Mode;
    path: string;
    time: number;
}

export interface LinksProps {
    links: LinksGroupProps[];
}