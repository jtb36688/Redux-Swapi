import React, { Component } from "react";
import { getChars } from "./actions/"

import { CharacterListView } from "./views";
import "./styles/App.css";
import { connect } from "net";

class App extends Component {
  componentDidMount() {


  }

  render() {
    return <CharacterListView />;
  }
}

const mapStateToProps = state => ({
  characters: state.characters.characters,
  error: state.error,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  { getChars }(App);
