export const initialDndData = {
    components: {
        'block-1': {id: 'block-1', content: 'Display'},
        'block-2': {id: 'block-2', content: 'Operations'},
        'block-3': {id: 'block-3', content: 'Buttons'},
        'block-4': {id: 'block-4', content: 'Equal'},
    },
    columns: {
        'constructor': {
            id: 'constructor',
            title: '',
            blockIds: ['block-1', 'block-2', 'block-3', 'block-4']
        },
        'calc': {
            id: 'calc',
            title: '',
            blockIds: []
        }
    },
    columnOrder: ['constructor', 'calc'],
}