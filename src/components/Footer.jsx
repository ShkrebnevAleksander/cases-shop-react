export const Footer = ({ orgName }) => {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div>
          <a className="footer-logo" href="/">
            <img src="/logomain.png" alt={orgName} />
          </a>
          <p>Индивидуальные чехлы и аксессуары для смартфонов.</p>
          <button className="feedback-button" type="button">
            Обратная связь
          </button>
        </div>

        <nav className="footer-navigation" aria-label="Навигация в подвале">
          <h2>Навигация</h2>
          <a href="/">Главная</a>
          <a href="#cases">Каталог</a>
          <a href="#custom">Конструктор чехла</a>
          <a href="#cart">Корзина</a>
        </nav>

        <div>
          <h2>Получайте скидки</h2>
          <p>Подпишитесь на новости о принтах и новых моделях.</p>
          <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Введите E-mail" required />
            <button className="btn-subscribe" type="submit">Подписаться</button>
          </form>
          <div className="footer-payments" aria-label="Способы оплаты">
            <img src="/Visa1.svg" alt="Visa" />
            <img src="/MasterCard1.svg" alt="Mastercard" />
            <img src="/PayPal1.svg" alt="PayPal" />
            <img src="/Qiwi1.svg" alt="Qiwi" />
          </div>
        </div>
      </div>

      <div className="site-container footer-bottom">
        <span>© 2026 {orgName}</span>
        <span>Могилёв, Беларусь</span>
      </div>
    </footer>
  );
};