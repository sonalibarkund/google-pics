import React from 'react';

class ImageList extends React.Component {
  // console.log(` Hi I fetched images : ${props.images}`)
  render() {
    return <ul>{this.props.images.map(image => <li> <img src={image.urls.small} alt={image.name}/></li> ) }</ul>
  }
}

export default ImageList;