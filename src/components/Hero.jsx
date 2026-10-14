export const Hero = ({ orgName, title, subtitle }) => {
  return (
    <section className="hero-section">
      <div className="site-container hero-content">
        <p className="hero-eyebrow">
          Печатаем в Могилёве · Доставляем по Беларуси
        </p>
        <h1>
          <span>{orgName}</span>
          <br />
          {title}
        </h1>
        <p className="hero-copy">{subtitle}</p>
        <a href="#custom" className="btn-hero-custom">
          Создать свой чехол <span aria-hidden="true">→</span>
        </a>
        <div className="hero-benefits">
          <span>От 650 ₽</span>
          <span>Печать от 1 дня</span>
          <span>Гарантия качества</span>
        </div>
      </div>

      <img
        className="hero-phone"
        src="/phone(3).png"
        alt={`${orgName} — чехол с индивидуальным дизайном`}
      />

      <div className="hero-socials" aria-label="Социальные сети">
        <a href="https://vk.com" target="_blank" rel="noopener" aria-label="ВКонтакте">
          <img src="/vk-1-11.svg" alt="" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
          <img src="/brand-facebook.svg" alt="" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
          <img src="/brand-instagram.svg" alt="" />
        </a>
        <a href="mailto:info@isharlotka.by" aria-label="Электронная почта">
          <img src="/basic-mail.svg" alt="" />
        </a>
      </div>
    </section>
  );
};