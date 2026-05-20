import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ cartItemCount = 0 }) => {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col">
      <Header cartItemCount={cartItemCount} />
      <main className="flex-grow pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
