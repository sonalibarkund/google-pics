import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

  state = { images: [] };

  constructor(){
    super();
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: 'Client-ID FDUnZ-QH6pTW7-U08sd9vu1oozhE2Otx8FNAM6ChZSY'
        }
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