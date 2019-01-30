import React from "react";
import { connect } from "react-redux";
import { getChars } from "../actions/";
import { CharacterList } from "../components";
import Loader from "react-loader-spinner";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getChars();
  }

  render() {
    return (
      <div>
        {this.props.isLoading && (
          <div>
            <Loader
              type="Ball-Triangle"
              color="#00BFFF"
              height="90"
              width="60"
            />
          </div>
        )}

        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  { getChars }
)(CharacterListView);
