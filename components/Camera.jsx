import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';


const Camera = ({ onScore, onSubmission }) => {
  const [image, setImage] = useState(null);
  const [disposalType, setDisposalType] = useState(1); 

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  const handleDisposalChange = (e) => {
    setDisposalType(Number(e.target.value));
  };

  const handleSubmit = () => {
    if (image) {
      const points = disposalType;
      
      onSubmission(image, disposalType);
      onScore(points);

      setImage(null);
      setDisposalType(1);
    }
  };

  return (
    <div>
            <FaTrashAlt className="waste-bin" />

      <input type="file" accept="image/*" onChange={handleImageChange} />
      <select value={disposalType} onChange={handleDisposalChange}>
        <option value={1}>Trash Bin</option>
        <option value={2}>Recycling Center</option>
        <option value={3}>Upcycling Center</option>
        <option value={4}>Self-Recycling</option>
        <option value={5}>Self-Upcycling</option>
      </select>
      <button onClick={handleSubmit}>Submit</button>
      {image && <img src={image} alt="Trash" style={{ maxWidth: '300px' }} />}
    </div>
  );
};

Camera.propTypes = {
  onScore: PropTypes.func.isRequired,
  onSubmission: PropTypes.func.isRequired,
};

export default Camera;