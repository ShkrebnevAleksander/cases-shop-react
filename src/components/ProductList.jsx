import { ProductCard } from './ProductCard';

export const ProductList = ({ title, items }) => {
  return (
    <section className="product-section site-container" id="cases">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">Под вашу модель</p>
          <h2 id="cases-heading">{title}</h2>
        </div>
        <div className="model-picker">
          <button className="model-picker-button" type="button">
            iPhone 15 Pro <span aria-hidden="true">⌄</span>
          </button>
        </div>
      </div>

      <div className="results-line">
        <span>Найдено: {items.length} вариантов</span>
        <a href="#catalog">Смотреть весь каталог →</a>
      </div>

      {/* Рендер массива объектов через компонент карточки */}
      <div className="home-products-grid">
        {items.map((caseItem) => (
          <ProductCard key={caseItem.id} item={caseItem} />
        ))}
      </div>
    </section>
  );
};