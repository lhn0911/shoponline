import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div>Công ty TNHH 1 thành viên HOANGNAM Việt Nam. Mã số DN: 000000000. Tòa nhà PTIT, km10,Hà Đông, Hà Nội</div>
      <p>&copy; 2024 Shop uy tín giá rẻ</p>
      <div className="hoidap">
        <a href="" className="lienhe">Chính sách bảo mật</a>
        <a href="" className="lienhe">Quy chế hoạt động</a>
        <a href="" className="lienhe">Chính sách vận chuyển</a>
        <a href="" className="lienhe">Chính sách trả hàng và hoàn tiền</a>
      </div>
      <a href="#">
        <div className="uytin">
          <img src="../src/assets/imgs/logoCCDV.png" width="90px" alt="Logo1" />
          <img src="../src/assets/imgs/logoCCDV.png" width="90px" alt="Logo2" />
        </div>
      </a>
      <div className="chitiet">
        <span className="material-symbols-outlined">undo</span><span className="vanchuyen">hoàn trả hàng miễn phí trong 7 ngày</span>
        <span className="material-symbols-outlined">check</span><span className="vanchuyen">Hàng chính hãng 100%</span>
        <span className="material-symbols-outlined">local_shipping</span><span className="vanchuyen">Miễn phí vận chuyển giao hàng miễn phí toàn quốc</span>
      </div>
      <div className="chamsoc">
        <h3>Chăm sóc khách hàng</h3>
        <h3>Về chúng tôi</h3>
        <h3>Theo dõi chúng tôi qua</h3>
        <h3>Đơn vị vận chuyển</h3>
      </div>
      <div className="hotrokh">
        <a href="" style={{ color: 'white' }}>Trung tâm trợ giúp</a>
        <a href="" style={{ color: 'white' }}>Hướng dẫn mua hàng</a>
        <a href="" style={{ color: 'white' }}>Hướng dẫn bán hàng</a>
        <a href="" style={{ color: 'white' }}>trả hàng & hoàn tiền</a>
        <a href="" style={{ color: 'white' }}>vận chuyển</a>
        <a href="" style={{ color: 'white' }}>chăm sóc khách hàng</a>
        <a href="" style={{ color: 'white' }}>chính sách bảo hàng</a>
      </div>
      <div className="hotrokh1">
        <a href="" style={{ color: 'white' }}>Điều khoản</a>
        <a href="" style={{ color: 'white' }}>Chính sách bảo mật</a>
        <a href="" style={{ color: 'white' }}>Chính hãng</a>
        <a href="" style={{ color: 'white' }}>Kênh người bán</a>
        <a href="" style={{ color: 'white' }}>Liên hệ với truyền thông</a>
      </div>
      <div className="hotrokh2">
        <button style={{ backgroundColor: 'orangered', color: 'white', border: '0' }}><i className="fa-brands fa-facebook"> facebook</i></button>
        <button style={{ backgroundColor: 'orangered', color: 'white', border: '0' }}><i className="fa-brands fa-tiktok"> tiktok</i></button>
        <button style={{ backgroundColor: 'orangered', color: 'white', border: '0' }}><i className="fa-brands fa-instagram"> instagram</i></button>
        <button style={{ backgroundColor: 'orangered', color: 'white', border: '0' }}><i className="fa-brands fa-twitter"> twitter</i></button>
      </div>
      <div className="hotrokh3">
        <span className="material-symbols-outlined">two_wheeler <span style={{ fontSize: '10px' }}>Moto Ship</span></span>
        <span className="material-symbols-outlined">local_shipping <span style={{ fontSize: '10px' }}>Car Ship</span></span>
        <span className="material-symbols-outlined">flight_takeoff <span style={{ fontSize: '10px' }}>Fly ship</span></span>
        <span className="material-symbols-outlined">rocket_launch <span style={{ fontSize: '10px' }}>R0cket Ship</span></span>
        <span className="material-symbols-outlined">sailing <span style={{ fontSize: '10px' }}>Boat Ship</span></span>
      </div>
    </footer>
  );
};

export default Footer;
