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

interface Product {
  name: string;
  image: string;
  description: string;
  uses: string[];
  nutritionalInfo: string;
}

const products: Record<string, Product> = {
  pastusa: {
    name: 'Papa Pastusa',
    image: pastusaI,
    description: `
      La <strong>papa pastusa</strong> es conocida por su versatilidad en la cocina. 
      Tiene una textura harinosa, ideal para platos que requieren papas suaves y que absorban bien los sabores. 
      Esta variedad es perfecta para freír, hornear y hacer purés, ya que se deshace fácilmente, 
      permitiendo una consistencia cremosa en las preparaciones. Es comúnmente utilizada en sopas 
      por su capacidad para espesar los caldos naturalmente.
    `,
    uses: ['Freír', 'Hornear', 'Puré', 'Sopas'],
    nutritionalInfo: `
      La papa pastusa es <strong>rica en carbohidratos</strong>, proporcionando una excelente fuente de energía. 
      También contiene una cantidad significativa de <strong>vitamina C</strong>, que apoya la función inmunológica, 
      y <strong>potasio</strong>, esencial para la salud cardiovascular y el funcionamiento de los músculos.
    `
  },
  criolla: {
    name: 'Papa Criolla',
    image: criollaI,
    description: `
      La <strong>papa criolla</strong> destaca por su color amarillo vibrante y su pequeño tamaño. 
      Tiene una textura cremosa y un sabor mantecoso que la hace perfecta como acompañamiento o en guisos. 
      Además, es ideal para ensaladas frías, donde su consistencia firme resalta. Esta variedad es apreciada por su capacidad 
      para mantener su forma durante la cocción, lo que la convierte en una excelente opción para preparaciones que requieren 
      papas enteras.
    `,
    uses: ['Guisos', 'Acompañamiento', 'Ensaladas'],
    nutritionalInfo: `
      La papa criolla es una excelente fuente de <strong>antioxidantes</strong>, que ayudan a combatir los radicales libres en el cuerpo. 
      También es rica en <strong>vitamina C</strong>, lo que contribuye al fortalecimiento del sistema inmunológico y mejora la absorción de hierro.
    `
  },
  tocarrena: {
    name: 'Papa Tocarreña',
    image: tocarrenaI,
    description: `
      La <strong>papa tocarreña</strong> es fácilmente reconocible por su piel rojiza y su carne blanca. 
      Es excelente para platos ligeros como ensaladas, ya que su textura firme permite que mantenga su forma tras la cocción. 
      También se utiliza comúnmente al vapor o asada, resaltando su sabor natural. Su uso en asados le da una textura crujiente por fuera 
      y suave por dentro, lo que la convierte en una opción preferida para platos saludables y sencillos.
    `,
    uses: ['Ensaladas', 'Cocción al vapor', 'Asada'],
    nutritionalInfo: `
      Esta variedad ofrece una buena cantidad de <strong>fibra dietética</strong>, ayudando a mantener un sistema digestivo saludable. 
      Además, es una fuente de <strong>vitaminas del complejo B</strong>, que son cruciales para el metabolismo energético 
      y el funcionamiento del sistema nervioso.
    `
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