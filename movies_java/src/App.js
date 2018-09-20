import React, { Component } from 'react';
import logo from './logo.svg';
import {getTrending} from './service/service'

import './App.css';



class App extends Component {
  


  constructor(props) {
    super(props);
    this.state = {
      movieName: '',
      myDashboard: []
    };
  };

  handleMovieNameChange(e) {
    this.setState({
      movieName: e.target.value
    });
    console.log(this.state.movieName);
  }

  handleButtonClicked(e) {
    let myDashboard = this.state.myDashboard.filter((movie) => {
      let name = this.state.movieName;
      return movie.title.includes(name);
    });
    this.setState({ myDashboard: myDashboard });
  }


  componentDidMount() {
    getTrending().then((data) => {
      this.setState({
        myDashboard: data.results
      });
      console.log(this.state.myDashboard);
    }
    ).catch((err) => {
      console.error('err', err);
    });
    
  }

  render() {
    return (
      <div>
        <div className="form-inline">
          <div className="form-group">
            <input
              value={this.state.movieName}
              className="form-control" type="text" placeholder="Movie Name"  onChange={this.handleMovieNameChange.bind(this)}/>
            <button
              className="btn btn-primary" type="button" onClick={this.handleButtonClicked.bind(this)}> Search Movie </button>
          </div>
        </div>
        <table className="table table-hover table-responsive">
          <thead>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Description</th>
              <th>Cover</th>
            </tr>
          </thead>
          <tbody>
            {this.state.myDashboard && this.state.myDashboard.map((movie, i) => {
              return (
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>{movie.title}</td>
                  <td>{movie.rating}</td>
                  <td>{movie.movieDescription}</td>
                  <td><img src={`http://image.tmdb.org/t/p/w185${movie.backdrop_path}`} /></td>
                  <td>
                  </td>
                </tr>);
            })}
          </tbody>
        </table>
      </div>
      

    );
  }
}

export default App;
