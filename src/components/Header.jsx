export const Header = ({ orgName }) => {
  return (
    <header className="site-header">
      <div className="site-container header-main">
        <a className="brand-logo" href="/" aria-label={`${orgName} — главная`}>
          <img src="/logomain.png" alt={orgName} />
        </a>

        <form className="header-search" role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="Поиск по товарам..."
            aria-label="Поиск по товарам"
          />
          <button type="submit" aria-label="Найти">
            <img src="/edit-search.svg" alt="" />
          </button>
        </form>

        <div className="header-actions">
          <a className="icon-action count-action" href="#cases" aria-label="Избранное">
            <img src="/basic-heart-outline.svg" alt="" />
            <span className="header-counter">0</span>
          </a>
          <a className="icon-action count-action" href="#cart" aria-label="Корзина">
            <img src="/shopping-cart-1-11.svg" alt="" />
            <span className="header-counter">0</span>
          </a>
          <button className="profile-action" type="button">
            <img src="/user-user-circle.svg" alt="" />
            <span>Войти</span>
          </button>
        </div>
      </div>

      <nav className="site-nav" aria-label="Основная навигация">
        <div className="site-container nav-inner">
          <a href="#" aria-current="page">Главная</a>
          <a href="#cases">Каталог</a>
          <a href="#custom">Конструктор чехла</a>
          <a href="#cart">Корзина</a>
          <a className="site-account-link" href="#auth">Войти</a>
        </div>
      </nav>
    </header>
  );
};