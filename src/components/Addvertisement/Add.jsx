import React from 'react';

const Add = (props) => {
  return (
    <>
        {props.image && props.image.map((image_path, index) => {
            return (
                <div key={index} className='add-box'>
                    <img src={image_path} alt={image_path} />
                </div>
            );
        })}
    </>
  );
};

export default Add;
