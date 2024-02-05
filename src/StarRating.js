const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const starContainerStyle = {
  gap: '4px',
  display: 'flex',
};

const textStyle = {
  lineHeight: '1',
  margin: '0',
};

export default function StarRating({ maxRating = 5 }) {
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={textStyle}>{maxRating}</p>
    </div>
  );
}
