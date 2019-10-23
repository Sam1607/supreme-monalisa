import React from 'react';

class AddData extends React.Component{
  constructor(props) {
      super(props);
        this.state={
          id:[],
         name:[]

        }
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);

   }

handleChange(e){
    this.setState({
      name:e.target.value

    })
  }

handleSubmit(e){
  e.preventDefault()
  this.props.addData(this.state);
}


render() {
  return (
    <div>
      <form onSubmit ={this.handleSubmit}>
        <label> Add employee </label>
        <input type="text" onChange ={this.handleChange} />
      <input type="submit" />
      </form>
    </div>
  )

}
}

export default AddData;
