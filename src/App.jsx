import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FrequentlyQues from './components/FrequentlyQues';
import ReviewSection from './components/ReviewSection';
import InternCardList from './components/InternCardList';

function App() {
  return (
    <>
      <Navbar />
      <InternCardList />
      <FrequentlyQues/>
      <ReviewSection />
      <Footer />
    </>
  );
}

export default App;
