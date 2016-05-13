const listItem = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                id: action.id,
                text: action.text,
            }
        default:
            return state
    }
}

// Returns new item plus original state (list of items)
const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                listItem(undefined, action)
            ]
        default:
            return state
    }
}

export default items
