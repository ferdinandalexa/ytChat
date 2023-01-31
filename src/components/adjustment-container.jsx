function AdjustmentContainer ({ title, layout = 'row', children }) {
  return (
    <section className='adjustment'>
      <h3 className='capitalize'>{title}</h3>
      <div className={layout}>
        {children}
      </div>
    </section>
  );
}

export default AdjustmentContainer;
