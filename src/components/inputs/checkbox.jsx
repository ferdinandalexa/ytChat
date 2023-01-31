function Checkbox ({ title, label, property, type, ...props }) {
  return (
    <label className='checkbox'>
      <input
        type='checkbox'
        data-property={property}
        {...props}
      />
      <span>{label}</span>
    </label>

  );
}

export default Checkbox;
