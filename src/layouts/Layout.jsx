import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen mt-25 mx-5">
      <Header />
      <main className="grow bg-red text-black mb-15">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;