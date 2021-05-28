import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Bonuses from './components/Bonuses/Bonuses';
import HowWorks from './components/HowWorks/HowWorks';
import Loyalty from './components/Loyalty/Loyalty';
import SendGifts from './components/SendGifts/SendGifts';
import OrderForm from './components/OrderForm/OrderForm';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="main_container">
      {/* <Header /> */}
      <Banner />
      <Bonuses />
      <HowWorks />
      <Loyalty />
      <SendGifts />
      <OrderForm />
      <Footer />
    </div>
  );
}

export default App;
