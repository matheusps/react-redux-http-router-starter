import axios from 'axios';
import { apiConfig as api } from './_api.config';

class NoteProvider{
    
    url = api.url + '/notes';

    get(){   
        return axios.get(this.url);
    }

    create(note){
        return axios.post(this.url, note);
    }

    edit(id, note){
        return axios.put(this.url + '/' + id, note);
    }

    delete(id){
        return axios.delete(this.url + '/' + id);
    }

}

export default new NoteProvider();