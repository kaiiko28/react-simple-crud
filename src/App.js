import React, { Component } from 'react';
import Ideas from './Ideas';
import AddIdea from './AddIdea';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

    
class App extends Component{

    // ARRAY of data that will be executed by default
    state = {

      ideas: [ 
        {
          id: 1,
          topic: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repudiandae architecto. Ullam cumque quae sunt quo, ipsam obcaecati. Sunt deleniti cupiditate possimus praesentium voluptas iusto quod recusandae unde quidem id!',
          
          isEditing:false

        },
        {
          id: 2,
          topic: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque nam tempora dolores ducimus, earum eaque. Optio, autem aperiam est, eveniet, expedita amet repellendus maxime quisquam a placeat veritatis libero ipsa!',
          
          isEditing:false
        }
      ]
      }
      // this is the method that AddIdea.js will call once the data is successfully updated
      addIdea = (newIdea) => {
            //  the variable ideas get all the value of the state and the newidea that we have entered
            let ideas = [...this.state.ideas, newIdea];
            //changing the state value
            this.setState({
                ideas
            });     
      }

      // when press edit button the data var will going to have the id of the clicked row, and procceed to ideaList that is going to exicute the first option
      editBtn = (data) => {
        // the variable ideas will get the value of the state
        let ideas = this.state.ideas;
        //finding the array id that has the same value of the row
        ideas[data].isEditing = true;
        //setting the new data of the state
        this.setState({
            ideas
        });
      }

      // updateId and the topic from ideas.js when the update button has been clicked
      updateIdea = (updateId, topic) => {
        // the variable ideas will get the value of the state
        let ideas = this.state.ideas;
        //finding the array id that has the same value of the row
        ideas[updateId].topic = topic;
        //returning the isEditing of the id into it default value
        ideas[updateId].isEditing = false;
        
        //updating the new data of the state
        this.setState({
            ideas
        });

      }
      // geting the Id from the delete button and insert in the variable of deleteId
      deleteBtn = (deleteId) => {
        //declaring data as the parameter the contains the description of the array and also the index
        let ideas = this.state.ideas.filter((data,index)=>{
            //filtering the data which is not equal to the declaire Id
            return index !== deleteId;
        });

        //after getting the filtered data, we are now going to update the state value
        this.setState({
            ideas
        });
      }

    render(){
        return(
            <Container maxWidth="lg">
              <Grid container spacing={3}>
                <Grid item md={4} xs={12} style={{ verticalAlign:'middle'}}>
                  <AddIdea addIdea={this.addIdea}/>
                </Grid>
                <Grid item md={8} xs={12}>
                <h1>IDEA LISTING 
                </h1>
                {/* passing the state value on the Ideas.js  */}
                <Ideas allIdeas={this.state.ideas} editBtn={this.editBtn} updateIdea={this.updateIdea} deleteBtn={this.deleteBtn} />
                </Grid>
              </Grid>
                
                
            </Container>
        );
    }
}

export default App;