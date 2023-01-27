function PropertyAdjustment ({ title, label, property, type, ...props }) {
  return (
    <label>
      <span>{label}</span>
      <input
        className='input'
        type={type}
        data-property={property}
        {...props}
      />
    </label>
  );
}

export default PropertyAdjustment;
