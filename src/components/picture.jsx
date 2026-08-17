import defaultImg from '../assets/picture.jpg'; // Adjust name/extension if needed

function Picture({ src = defaultImg, alt = "Display Picture" }) {
  return (
    <div className="picture-container">
      <img 
        src={src} 
        alt={alt} 
        style={{ maxWidth: '100%', borderRadius: '8px' }} 
      />
    </div>
  );
}

export default Picture;