import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen mt-25 w-full">
      <Header />
      
      <main className="grow bg-red text-black mb-15 max-w-7xl w-full mx-auto px-5">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;