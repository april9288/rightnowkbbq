import React, { Component } from 'react';
import Header from './Header';
  //<Scroll /> contains both <Status /> and <CardHolder />
  import Scroll from './Scroll';
    import Status from './Status';
    import CardHolder from './CardHolder';
import Footer from './Footer';

import { connect } from 'react-redux';
import { actionGetRestaurants } from '../redux/actions';


const mapStateToProps = (state) => {
    return {
      data: state.reducerGetRestaurants.data,
      position: state.reducerGetRestaurants.position,
      status: state.reducerGetRestaurants.status
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      fireGetRestaurants: () => dispatch(actionGetRestaurants())
    }
  }


class App extends Component {

  componentDidMount() {
    this.props.fireGetRestaurants()
  }

  display = () => {
    if (this.props.status === "REQUEST_LOADING") {
      return <Status code={"loading"} />
    } else if (this.props.status === "REQUEST_DENIED") {
      return <Status code={"denied"} />
    } else if (this.props.status === "REQUEST_SUCCESS") {
      return <CardHolder data={this.props.data} position={this.props.position}/>
    } else {
      return <Status code={"bad"} />
    }
  }

  render() {
    return (
      <section className="App">

        <Header />
            <Scroll>
                {this.display()}
            </Scroll>
        <Footer />

      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
