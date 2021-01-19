import logo from './logo.svg';
import './App.css';
import React from 'react';

function Header(props){
  return(
    <header>
      <h1>Welcome to Thing Creator App!</h1>
      <h3>Number of things: {props.count}</h3>
    </header>
    )
}

function Footer(props){
  return(
    <h1>Copy Right @Things_Creator</h1>
    )
}

function ListComponent(props){
  return(
    <>
      <ul className='ul'>
        {props.listThings.map(element => {
          return(
            <>
            <li>Thing: {element.title}</li>
            <li>Price: {element.price}</li>
            <br/>            </>
          )
        })}
      </ul>
    </>
  )
}


class ThingList extends React.Component{

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      thing : '',
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  };
 

  handleChange(event){
    console.log(event.target.value)
    this.setState({thing: event.target.value})
  }
  handleSubmit(event){
    event.preventDefault()
    // console.log(this.state.thing)
    this.props.createThing(this.state)
  }
  render(){return (
    <div >
        <h2>ThingList</h2>
        <ListComponent listThings ={this.props.list}/>
        <form onSubmit={this.handleSubmit}>
          <label>Add thing: <br/>
            <input type='text' onChange = {this.handleChange}/>
          </label>
          <br/><br/>
          <input className='submit' type='submit' value='Add'/>
        </form>
    </div>
    )
  };
}







class App extends React.Component{

  constructor(){
    super();
    this.state = {
      thingList : [
        {
          id: 1,
          title: 'chips',
          price: '1$'
        },
        {
          id: 2,
          title: 'chocolate',
          price: '3$'
        },
      ],
    };
  }

  createThingHandler(things){
    let updateThing = this.state.thingList;
    updateThing.push({id:3,title:things.thing,price:'10$'})
    this.setState({thingList : updateThing})
  }
  
  render(){
    return(
        <div className="App">
          <Header count={this.state.thingList.length}/>
          <ThingList list={this.state.thingList} createThing = {thing => this.createThingHandler(thing)}/>
          <Footer />
        </div>
    )
  };
}


export default App;
