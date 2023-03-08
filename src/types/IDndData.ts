export interface IDndComponent {
    id: string;
    content: string;
}

export interface IDndColumn {
    id: string;
    title: string;
    blockIds: string[];
}

export interface IDndData {
    components: {
        [key: string]: IDndComponent;
    },
    columns: {
        [key: string]: IDndColumn;
    },
    columnOrder: string[]
}