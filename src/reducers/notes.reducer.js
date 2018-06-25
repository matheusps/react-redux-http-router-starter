import  { noteActionTypes }  from '../actions/note.action.types';

const notes = (state={ itens: [], loading: false }, action) => {
    switch(action.type){
        
        case noteActionTypes.FETCH_REQUEST:
            return { loading: true}
        
        case noteActionTypes.FETCH_SUCCESS:
            return { 
                ...state,
                loading: false,
                itens: action.notes
            }

        case noteActionTypes.FETCH_FAILURE:
            return { 
                ...state,
                loading: false,
                error: action.error
            }
        
        case noteActionTypes.CREATE_REQUEST:
            return { loading: true}
        
        case noteActionTypes.CREATE_SUCCESS:
            return {
                ...state,
                itens: state.itens.push(action.note)
            }
        
        case noteActionTypes.CREATE_FAILURE:
            return { error: action.error }
        
        
        default:
            return state
    }
}

export default notes;