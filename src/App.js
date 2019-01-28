import React, { Component } from "react"
import { connect } from "react-redux"
import "./App.css"

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1977,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class ModelDetails extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Manufacturer: {this.props.manufacturer}</li>
          <li>Year: {this.props.year}</li>
          <li>Origin: {this.props.origin}</li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  state = { model: "" }

  updateSelection = event => {
    console.log(event.target.value)
    this.setState({
      model: event.target.value
    })
  }

  addModel = event => {
    this.props.dispatch({
      type: "ADD_MODEL",
      payload: Object.assign({ name: this.state.model }, data[this.state.model])
    })
  }

  render() {
    return (
      <div className="App">
        {this.props.items.map(item => <ModelDetails {...item} />)}
        <select value={this.state.model} onChange={this.updateSelection}>
          <option value="">-- pick a model ---</option>
          {Object.keys(data).map(name => (
            <option key={name} value={name}>
              {name} ({data[name].year})
            </option>
          ))}
        </select>
        <button onClick={this.addModel}>Add</button>
      </div>
    )
  }
}

export default connect(state => ({ items: state }))(App)
