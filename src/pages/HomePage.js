import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes, createNote } from '../actions/note.actions';

class HomePage extends Component{

    constructor(props){
        super(props);

        this.state = {
            note: {
                title: '',
                content: ''
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){
        this.props.dispatch(fetchNotes())
    }

    handleSubmit(event){
        event.preventDefault();
        const { note } = this.state;
        const { dispatch } = this.props;
        if(note.title && note.content){
            dispatch(createNote(note));
        }
    }

    handleChange(event){
        event.preventDefault();
        const { name, value } = event.target;
        const { note } = this.state;
        this.setState({
            note: {
                ...note,
                [name]: value
            }
        })
    }

    render(){
        
        const { notes } = this.props;
        const { note } = this.state;

        return(
            <div>
                <h1>Home Page</h1>
                <br />
                <h2>Notes</h2>
                
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="add your title..." name="title" value={note.title} onChange={this.handleChange}/>
                    <br /> <br />
                    <input type="text" placeholder="add your content..." name="content" value={note.content} onChange={this.handleChange} />
                    <br /> <br />
                    <button type="submit">create note</button>
                </form>

                
                

            </div>
            
        );
    }
}


const mapStateToProps = state => ({
    notes: state.notes
})

export default connect(mapStateToProps)(HomePage);