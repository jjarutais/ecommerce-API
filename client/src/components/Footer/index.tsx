import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Jarustore</h5>
                        <p>Via do Conhecimento<br />Pato Branco - PR</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Contato</h5>
                        <p>Telefone: (46) 98765-4321<br />Email: exemplo@exemplo.com</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Siga-nos!</h5>
                        <a href="https://facebook.com" className="text-white me-2">
                            <i className="fab fa-facebook"></i> Facebook
                        </a><br />
                        <a href="https://twitter.com" className="text-white me-2">
                            <i className="fab fa-twitter"></i> Twitter
                        </a><br />
                        <a href="https://instagram.com" className="text-white me-2">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <small>&copy; {new Date().getFullYear()} Jarustore. Nenhum direito reservado.</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;