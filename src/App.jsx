import { shopData, casesList } from './data';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductList } from './components/ProductList';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';

// Главный компонент приложения (строго стрелочная функция)
const App = () => {
  return (
    <div className="home-page">
      {/* 1. Header: передаем название организации */}
      <Header orgName={shopData.orgName} />

      <main>
        {/* 2. Hero: передаем название организации, заголовок и описание */}
        <Hero 
          orgName={shopData.orgName} 
          title={shopData.mainTitle} 
          subtitle={shopData.subtitle} 
        />

        {/* 3. ProductList: передаем заголовок и массив объектов */}
        <ProductList 
          title="Чехлы для iPhone 15 Pro" 
          items={casesList} 
        />

        {/* 4. Reviews: отзывы покупателей */}
        <Reviews />
      </main>

      {/* 5. Footer: передаем название организации и город */}
      <Footer 
        orgName={shopData.orgName} 
        location={shopData.location} 
      />
    </div>
  );
};

export default App;