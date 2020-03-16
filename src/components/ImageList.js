import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
  // console.log(` Hi I fetched images : ${props.images}`)
  render() {
    const images = this.props.images.map(image => { return <ImageCard key={image.id}  image={image}/> })
    return <div className="image-list">{images}</div>
  }
}

export default ImageList;