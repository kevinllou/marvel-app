import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ILayoutProps from '../interfaces/ILayoutProps';

function LayoutRoute({ children }: ILayoutProps) {
  return (
    <div className="App">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default LayoutRoute;
