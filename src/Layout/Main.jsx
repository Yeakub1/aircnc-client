import React from 'react';
import Navbar from '../components/Shard/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shard/Footer/Footer';

const Main = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="pt-28 pb-20">
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default Main;