import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Body from './components/Body';
import Status from './components/Status';
import './App.css';

class App extends Component {
  state={
    status: null,
    data: null,
    position: []
  }

  componentDidMount() {
    const getRestaurants = async () => {
      const locationPromise = new Promise((res, rej) => {
        window.navigator.geolocation.getCurrentPosition(res,rej)
      })
      let locationResult
      try{
        locationResult = await locationPromise
      }catch(e){
        return this.setState({status: "denied"});
      }
      let latitude = locationResult.coords.latitude
      let longitude = locationResult.coords.longitude
      let yelpResult
      try{
        if (process.env.NODE_ENV === "development") {
          yelpResult = await axios.get(`https://rightnowkbbq.herokuapp.com/mock`)
        } else {
          yelpResult = await axios.get(`https://rightnowkbbq.herokuapp.com/yelp?lat=${latitude}&lon=${longitude}`)
        }        
        this.setState({status: yelpResult.status, data: yelpResult.data, position: [latitude,longitude]});
      }catch(e){
        this.setState({status: e.response.status});
      }
    } 
    getRestaurants()
  }

  display = () => {
    if (this.state.status === null) {
      return <Status code={"loading"} />
    } else if (this.state.status === "denied") {
      return <Status code={"denied"} />
    } else if (this.state.status === 200 && this.state.data !== null) {
      return <Body data={this.state.data} position={this.state.position}/>
    } else {
      return <Status code={"bad"} />
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        {this.display()}
      </div>
    );
  }
}

export default App;
