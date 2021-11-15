import React, {useState} from 'react';
import ImageModal from './ImageModal.jsx';

const ReviewPhoto = (props) => {
  const [showImageModal, setShowImageModal] = React.useState(false);

  return (
    <div>
      <img
        key={props.id}
        src={props.url}
        alt='This was supposed to be an image'
        width = '150'
        height= 'auto'
        onClick= {() => setShowImageModal(true)}
      />
      <ImageModal
      show={showImageModal}
      onHide={() => setShowImageModal(false)}
      url={props.url}
      />

    </div>
  )
}

export default ReviewPhoto