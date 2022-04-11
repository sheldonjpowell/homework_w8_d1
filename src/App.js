import React, { Component } from 'react';
import Button from './components/Button';
import Nav from "./components/Nav"
import ClassMateTable from './views/ClassMateTable';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      count: 0,
      classMates: []
    }
  }

  componentDidMount(){
      console.log('App Mounted')
      fetch('https://kekambas-bs.herokuapp.com/kekambas')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          let classMates = data
          this.setState({classMates})
        })

      
  }

  handleButtonClick = (step) => {
    let newCount = this.state.count + step;
    this.setState({
      count: newCount
    })
  }

  render() {
    return(
      <>
        <Nav />
        <div className='container my-5'>
          
          
          <ClassMateTable classMates= {this.state.classMates}/>


        </div>
      </>
    )
  }
}

