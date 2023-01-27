function AdjustmentContainer ({ title, children }) {
  return (
    <section className='adjustment'>
      <h3 className='capitalize'>{title}</h3>
      <div>
        {children}
      </div>
    </section>
  );
}

export default AdjustmentContainer;
