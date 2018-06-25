import { noteActionTypes } from './note.action.types';
import NoteProvider from '../providers/note.provider';

export const fetchNotes = () => {
    
    return dispatch => {
        const request = () => ({ type: noteActionTypes.FETCH_REQUEST});
        const success = (notes) => ({type: noteActionTypes.FETCH_SUCCESS, notes});
        const failure = (error) => ({type: noteActionTypes.FETCH_FAILURE, error});

        dispatch(request());

        NoteProvider.get().then(
            notes => {
                dispatch(success(notes.data))
            },
            error => {
                dispatch(failure(error.toString()))
            }
        )
    }
}

export const createNote = (note) => {
    return dispatch => {
        const request = (note) => ({ type: noteActionTypes.CREATE_REQUEST, note});
        const success = (note) => ({type: noteActionTypes.CREATE_SUCCESS, note});
        const failure = (error) => ({type: noteActionTypes.CREATE_FAILURE, error});

        dispatch(request(note));

        NoteProvider.create(note).then(
            note => {
                dispatch(success(note.data))
            },
            error => {
                dispatch(failure(error))
            }
        )
    }
}

export const editNote = (id, note) => {
    return dispatch => {
        const request = (id, note) => ({ type: noteActionTypes.CREATE_REQUEST, id, note});
        const success = (note) => ({type: noteActionTypes.CREATE_SUCCESS, note});
        const failure = (error) => ({type: noteActionTypes.CREATE_FAILURE, error});

        dispatch(request(id, note));

        NoteProvider.edit(id, note).then(
            note => {
                dispatch(success(note.data))
            },
            error => {
                dispatch(failure(error))
            }
        )
    }
}

export const deleteNote = (id) => {
    return dispatch => {
        const request = (id) => ({ type: noteActionTypes.CREATE_REQUEST, id});
        const success = (note) => ({type: noteActionTypes.CREATE_SUCCESS, note});
        const failure = (error) => ({type: noteActionTypes.CREATE_FAILURE, error});

        dispatch(request(id));

        NoteProvider.delete(id).then(
            note => {
                dispatch(success(note.data))
            },
            error => {
                dispatch(failure(error))
            }
        )
    }
}