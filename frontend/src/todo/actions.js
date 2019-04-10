import axios from 'axios'

const URL = 'http://localhost:5000/todo/'

export const changeDescription = event => ({

    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value

})

export const changeOption = event => {

    return(dispatch) => {
        dispatch({type: 'OPTION_CHANGED',payload: event.target.value})
        dispatch(search())
    }
}

export const search = () => {
    return(dispatch, getState) => {
    const option = getState().todo.option
    axios.get(`${URL}${option}`)
        .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp}))
    }
}

export const clear = () => {
    return {
        type: 'TODO_CLEAR'
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, {description})
        .then(resp => dispatch(clear()))
        .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}${todo.id}`, {...todo, status: true})
        .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}${todo.id}`, {...todo, status: false})
        .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}${todo.id}`)
        .then(resp => dispatch(search()))
    }
}
