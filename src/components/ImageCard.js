import React from 'react';

class ImageCard extends React.Component {

  render() {
  const { description, urls } = this.props.images;
    return (
      <div>
        <img src={urls.small} alt={description} />
      </div>
    )
  }

}

export default ImageCard