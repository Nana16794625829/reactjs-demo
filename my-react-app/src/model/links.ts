export interface LinkItem {
    link: string;
    label: string;
}

export interface Link {
    link: string;
    label: string;
    child?: LinkItem[];
}
