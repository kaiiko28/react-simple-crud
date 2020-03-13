import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';

class Ideas extends Component{
    // calling updateIdea (App.js)
    handleUpdate = () => {
        //getting the ID and Topic value that going to pass
        this.props.updateIdea(this.idNum, this.topic.value);
    }

    render(){
        //declaring variable for much cleaner coading
        const {allIdeas, editBtn, deleteBtn} = this.props;

        //creating condition for update
        const IdeasList = allIdeas.map((Idea, id) => {

            // if editBtn in click edit input with prev value will be executed and ideas are now can be update
            return Idea.isEditing === true ? (
                
                <TableRow  key={Idea.id}>
                    <TableCell>
                        <textarea
                                style={
                                    {
                                        width: '100%',
                                        border: 'none',
                                        borderBottom: '1px solid #000',
                                        padding: '10px'
                                    }
                                }
                                placeholder="Topic"
                                type="text" rows="4" name="topic" ref={(val) => {this.topic = val}} required defaultValue={Idea.topic}/></TableCell>
                                
                                
                                <TableCell>
                                <Button variant="outlined" color="primary" onClick={this.handleUpdate} ref={() => {this.idNum = id}}>
                                            UPDATE
                                </Button>
                        </TableCell>
                </TableRow>  

            ) : (
                // this is otherwise or the default view of the system where you can see the data
                
                    <TableRow  key={Idea.id}>
                    <TableCell>{Idea.topic}</TableCell>
                    <TableCell>
                        {/* once edit button is click the id will be passed on editBtn method to process the condition above */}
                        <Button variant="outlined" color="primary" onClick={() => editBtn(id)}>
                            EDIT DATA
                        </Button>
                    </TableCell>
                    <TableCell>
                        {/* otherwise when user click delete tha id will be passed on deleteBtn method for it to process the deletion */}
                        <Button variant="outlined" color="secondary" onClick={()=>deleteBtn(id)}>
                            DELETE DATA
                        </Button>
                    </TableCell>


                    
                </TableRow>

                
                
                


            );
        });

        return(
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{width: "60%"}}><h3 style={{textAlign: 'center'}}>Ideas</h3></TableCell>
                            <TableCell colSpan='2'><h3 style={{textAlign: 'center'}}>Action</h3></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{borderBottom:'1px solid #000'}}>
                        {/* calling the ideaslist method where the condition is being created. when first load this will render the default data because the isEditing component of the array is in false   */}
                        {IdeasList}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default Ideas;