function PropertySet ({ name, children }) {
  return (
    <details className='set'>
      <summary>
        <h2 className='capitalize'>{name}</h2>
      </summary>
      {children}
    </details>
  );
}

export default PropertySet;
