import { useParams, Link } from 'react-router-dom';
import pastusa from '../images/pastusa.jpg';
import criolla from '../images/criolla.jpg';
import tocarrena from '../images/tocarreña.jpg';

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
    image: pastusa,
    description: 'La papa pastusa es una variedad versátil, perfecta para freír y hornear. Su textura harinosa la hace ideal para purés y sopas.',
    uses: ['Freír', 'Hornear', 'Puré', 'Sopas'],
    nutritionalInfo: 'Rica en carbohidratos, vitamina C y potasio.'
  },
  criolla: {
    name: 'Papa  Criolla',
    image: criolla,
    description: 'La papa criolla es pequeña y de color amarillo intenso. Su sabor es suave y mantecoso, ideal para guisos y como acompañamiento.',
    uses: ['Guisos', 'Acompañamiento', 'Ensaladas'],
    nutritionalInfo: 'Alta en antioxidantes y vitamina C.'
  },
  tocarrena: {
    name: 'Papa Tocarreña',
    image: tocarrena,
    description: 'La papa tocarreña tiene una piel rojiza y carne blanca. Es excelente para ensaladas y cocción al vapor.',
    uses: ['Ensaladas', 'Cocción al vapor', 'Asada'],
    nutritionalInfo: 'Buena fuente de fibra y vitaminas del complejo B.'
  }
};

const Product = () => {
  const { id } = useParams<{ id?: keyof typeof products }>();
  const product = id ? products[id] : undefined;

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-yellow-500 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="text-white text-2xl font-bold">Distribuidora de Papa</Link>
        </div>
      </header>
      <main className="container mx-auto px-6 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Usos recomendados:</h2>
            <ul className="list-disc list-inside mb-4">
              {product.uses.map((use: string, index: number) => (
                <li key={index} className="text-gray-600">{use}</li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Información nutricional:</h2>
            <p className="text-gray-600">{product.nutritionalInfo}</p>
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

export default Product;