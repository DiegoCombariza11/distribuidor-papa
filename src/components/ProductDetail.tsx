import React from 'react';
import { Link } from 'react-router-dom';
import pastusaI from '../images/pastusa.jpg';
import criollaI from '../images/criolla.jpg';
import tocarrenaI from '../images/tocarreña.jpg';

interface Product {
  name: string;
  image: string;
  description: string;
  uses: string[];
  nutritionalInfo: string;
}

interface ProductDetailProps {
  name: string;
  description: string;
  image: string;
  uses: string[];
  nutritionalInfo: string;
}

const products: Record<string, Product> = {
  pastusa: {
    name: 'Papa Pastusa',
    image: pastusaI,
    description: 'La papa pastusa es una variedad versátil, perfecta para freír y hornear. Su textura harinosa la hace ideal para purés y sopas.',
    uses: ['Freír', 'Hornear', 'Puré', 'Sopas'],
    nutritionalInfo: 'Rica en carbohidratos, vitamina C y potasio.'
  },
  criolla: {
    name: 'Papa  Criolla',
    image: criollaI,
    description: 'La papa criolla es pequeña y de color amarillo intenso. Su sabor es suave y mantecoso, ideal para guisos y como acompañamiento.',
    uses: ['Guisos', 'Acompañamiento', 'Ensaladas'],
    nutritionalInfo: 'Alta en antioxidantes y vitamina C.'
  },
  tocarrena: {
    name: 'Papa Tocarreña',
    image: tocarrenaI,
    description: 'La papa tocarreña tiene una piel rojiza y carne blanca. Es excelente para ensaladas y cocción al vapor.',
    uses: ['Ensaladas', 'Cocción al vapor', 'Asada'],
    nutritionalInfo: 'Buena fuente de fibra y vitaminas del complejo B.'
  }
};

const ProductDetail: React.FC<ProductDetailProps> = ({ name, description, image, uses, nutritionalInfo }) => {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-yellow-500 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="text-white text-2xl font-bold">Distribuidora de Papa</Link>
        </div>
      </header>
      <main className="container mx-auto px-6 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={image} alt={name} className="w-full h-64 object-contain" />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>
            <p className="text-gray-600 mb-4">{description}</p>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Usos recomendados:</h2>
            <ul className="list-disc list-inside mb-4">
              {uses.map((use, index) => (
                <li key={index} className="text-gray-600">{use}</li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Información nutricional:</h2>
            <p className="text-gray-600">{nutritionalInfo}</p>
          </div>
        </div>
      </main>
      <footer className="bg-yellow-500 text-white mt-8">
        <div className="container mx-auto px-6 py-4 text-center">
          <p>&copy; 2024 Distribuidora de Papa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;