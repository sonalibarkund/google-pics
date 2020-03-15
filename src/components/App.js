import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

  state = { images: [] };

  // constructor(){
  //   super();
  // bind onserachsubmit with this class instance
  //   this.onSearchSubmit = this.onSearchSubmit.bind(this);
  // }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
        params: { query: term }
      });
      // .then((response) => {
      // we can use then method also to set response in state
      //   this.setState({ images: response.data.results });
      // })
      this.setState({ images: response.data.results });
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar searchText={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App;