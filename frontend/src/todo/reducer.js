const INITIAL_STATE = { description: '', option:'', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }

        case 'OPTION_CHANGED':
            return { ...state, option: action.payload }

        case 'TODO_CLEAR':
            return { ...state, description: '', option: '' }

        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        
        case 'TODO_FILTER':
            return { ...state, list: action.payload.data }
    
        default:
            return state
    }
}