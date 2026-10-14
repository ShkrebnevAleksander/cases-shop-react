export const ProductCard = ({ item }) => {
  return (
    <article className="home-product-card">
      {item.discount && <span className="discount-label">{item.discount}</span>}
      <button className="favorite-toggle" type="button" aria-label="Добавить в избранное">
        ♡
      </button>
      
      <a className="home-product-image-link" href="#product">
        <img className="home-product-image" src={item.image} alt={item.title} />
      </a>

      <div className="home-product-body">
        <p className="home-product-brand">{item.brand}</p>
        <h3 className="home-product-title">{item.title}</h3>
        <div className="home-product-rating">{item.rating}</div>
        
        <div className="home-product-price">
          <strong>{item.price} ₽</strong>
          {item.oldPrice && <del>{item.oldPrice} ₽</del>}
        </div>

        <div className="home-product-actions">
          <a className="constructor-button" href="#custom">В конструктор</a>
          <button className="cart-icon-button" type="button" aria-label="Добавить в корзину">
            <img src="/shopping-cart-1-11.svg" alt="" />
          </button>
        </div>
      </div>
    </article>
  );
};