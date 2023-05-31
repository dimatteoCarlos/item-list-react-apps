
function MenuItem({ item }) {
  const { title, category, price, img, desc } = item;

  return (
    <article className='menu-item'>
      <img src={img} alt={category} className='item-img' />
      <div className='menu-info'>
        <div className='head'>
          <h4 className='info-title'>{title}</h4>
          <h4 className='price'>{price}</h4>
        </div>
        <div>
          <p className='food-desc'>{desc}</p>
        </div>
      </div>
    </article>
  );
}
export default MenuItem;
