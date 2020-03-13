import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyles =  {
    root: {
        background: '#c51162',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        minHeight: '100vh',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
    
};

class AddIdea extends Component{
    // the data of the stae that are going to be use
    state = {
        id: null,
        topic:null,
        isEditing:false
    }
    //calling addIdea in App.js for as to submited data and reset the input
    handleSubmit = (page) => {
        //this is to prevent our page to refresh and would let us see the update
        page.preventDefault();
        //the content will be handdle
        this.props.addIdea(this.state);
        //the iput of the page where our data came from will going to reset, removing the previous data because its already being handle  
        page.target.reset();
    }
    // updating the array after successfully put the data from the form
    updateState = (e) => {
        this.setState({
            //getting the name of the input which we declare topic and put it into array by setting the state its new value
            [e.target.name]:e.target.value,
        });
    }

    render(){
        const { classes } = this.props;

        return(
            <div className={classes.root} style={{textAlign: 'center'}}>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s4">
                        <textarea name="topic" autoComplete="off" rows="10" style={{width:'100%'}} placeholder="Tell us what you are thinking" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <Button variant="contained"  type="submit" color="primary">
                                    ADD NEW IDEA
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

// this is to read the useStyles as its prototype requirements
AddIdea.propTypes = {
    classes: PropTypes.object.isRequired,
  };
//returning the page with Style that has a name of useStyles and the class component name
export default  withStyles(useStyles)(AddIdea);