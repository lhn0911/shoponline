
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);

  const handleToggleAuthForm = () => {
    setShowAuthForm(!showAuthForm);
  };

  return (
    <header>
      <a href="#">
        <img src="../src/assets/imgs/logo.png" className="shoplogo" alt="Logo1" />
        <img src="../src/assets/imgs/Screenshot_2024-03-11_114655-removebg-preview.png" className="logo" alt="Logo2" />
      </a>
      <div className="search-container">
        <input type="text" placeholder="search..." className="search-input square" />
        <a href="#" className="search-icon"><span className="material-symbols-outlined">search</span></a>
      </div>
      <nav>
        <ul>
          <li><a href="#">Trang chủ</a></li>
          <li><a id="adquanly" style={{ display: 'none' }} href="../pages/admin.html">Quản lý</a></li>
          <li><button onClick={handleToggleAuthForm}>Đăng ký</button></li>
          <li><button onClick={handleToggleAuthForm}>Đăng nhập</button></li>
          <li id="userLink" style={{ display: 'none', width: '50px', marginBottom: '-5px' }}><span id="firstname"></span></li>
          <li><a id="userlogout" style={{ display: 'none' }} href="#">Đăng xuất</a></li>
          <button onClick={() => shop()} id="shop" style={{ display: 'none', border: '0 px' }}><a href="#"><span className="material-symbols-outlined">shopping_cart</span></a></button>
        </ul>
      </nav>
     
    </header>
  );
};