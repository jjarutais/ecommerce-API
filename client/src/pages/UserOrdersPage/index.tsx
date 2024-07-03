import React, { useState } from 'react';
import { NavBar } from '@/components/NavBar';
import Footer from '@/components/Footer';
import compraFinalizada from "@/assets/compra-finalizada.png";

const UserOrdersPage: React.FC = () => {
    const [orders] = useState<any[]>([]);

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <h2>Minhas Compras</h2>
                <img src={compraFinalizada} alt="Compra Finalizada" />
            </div>
            <Footer />
        </>
    );
};

export default UserOrdersPage;