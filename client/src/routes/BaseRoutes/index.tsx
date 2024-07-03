import { Route, Routes } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { UserSignupPage } from "@/pages/UserSignupPage";
import { HomePage } from "@/pages/HomePage";
import { ProductDetailsPage } from "@/pages/ProductDetailsPage";
import { ProductsPage } from "@/pages/ProductsPage";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import UserOrdersPage from "@/pages/UserOrdersPage";

export function BaseRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<UserSignupPage />} />

                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:productId" element={<ProductDetailsPage />} />

                <Route path="/cart" element={<CartPage />} />

                <Route path="/checkout" element={<CheckoutPage />} />

                <Route path="/orders" element={<UserOrdersPage />} />
            </Routes>
        </>
    );
}