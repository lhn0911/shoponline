import React, { useEffect, useState } from 'react';

interface Product {
    image: string;
    name: string;
    price: string;
    id: number;
    sale: string;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [showAuthForm, setShowAuthForm] = useState(false);

    useEffect(() => {
        const storedProducts: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
        setProducts(storedProducts);
    }, []);

    const addToCart = (productId: number) => {
        let cart: { [key: number]: { quantity: number, discountCode: string } } = JSON.parse(localStorage.getItem('cart') || '{}');

        if (cart[productId]) {
            cart[productId].quantity += 1;
        } else {
            cart[productId] = {
                quantity: 1,
                discountCode: ""
            };
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        alert("Sản phẩm đã được thêm vào giỏ hàng.");
    };

    const showProductDetail = (productId: number) => {
        // Hiển thị chi tiết sản phẩm khi được click
        console.log("Show product detail for product id: ", productId);
    };

    const handleToggleAuthForm = () => {
        setShowAuthForm(!showAuthForm);
    };

    return (
        <div className="container">
            {showAuthForm && (
                <div className="auth-form">
                    <h2>Đăng ký / Đăng nhập</h2>
                    <form>
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Mật khẩu" />
                        <button type="submit">Đăng ký / Đăng nhập</button>
                    </form>
                </div>
            )}
            {products.map((product) => (
                <div className="sanpham" key={product.id}>
                    <img className="img" src={product.image} alt={product.name} />
                    <div className="sale">{product.sale}</div>
                    <span className="detail"><button onClick={() => showProductDetail(product.id)}>Chi tiết</button></span>
                    <div className="thongtin">
                        <p>Loại</p>
                        <b>{product.name}</b>
                    </div>
                    <div className="thongtin">
                        <p>Giá</p>
                        <b>{product.price}</b>
                    </div>
                    <div className="thongtin">
                        <p>Thêm</p>
                        <button onClick={() => addToCart(product.id)}>
                            <span className="material-symbols-outlined">
                                add_shopping_cart
                            </span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;