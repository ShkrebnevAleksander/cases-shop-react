export const Reviews = () => {
  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="site-container">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Отзывы</p>
            <h2 id="reviews-title">Что о нас пишут клиенты</h2>
          </div>
        </div>
        <div className="reviews-grid">
          <article className="review-card">
            <img src="/review-1.png" alt="Отзыв 1" loading="lazy" />
          </article>
          <article className="review-card">
            <img src="/review-2.png" alt="Отзыв 2" loading="lazy" />
          </article>
          <article className="review-card">
            <img src="/review-3.png" alt="Отзыв 3" loading="lazy" />
          </article>
        </div>
      </div>
    </section>
  );
};