import React from 'react';
import Todo from './Todo'
import AddData from './AddData';


class App extends React.Component {
  constructor(props) {
     super(props);

     this.state = {
       employees:
       [
          { id: 1, name: 'shubham',gender:'male',email:'shubham@gmail.com' },
          { id: 2, name: 'shyam',gender:'male',email:'shyam@gmail.com' },
          { id: 3, name: 'sunder',gender:'male',email:'sunder@gmail.com' },
        ]
     };
  this.deleteData = this.deleteData.bind(this);
  this.addData = this.addData.bind(this)

}

 deleteData(id){
   const del = this.state.employees.filter(todo => {
     return todo.id !==id
   })
     this.setState({
       employees:del
     })
 }

 addData(todo){
   const employees = [...this.state.employees,todo] ;
    this.setState({
      employees
    })
  }

  render() {
    return (
      <div>
        <h1 id='title'>Employees Table</h1>
          <table id='employees'>
            <tbody>
              <Todo data ={this.state.employees} deleteData ={this.deleteData}/>
              <AddData addData={this.addData}/>
            </tbody>
          </table>
      </div>
    )

  }
}


export default App;
