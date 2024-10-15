import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import pastusa from '../images/pastusa.jpg';
import criolla from '../images/criolla.jpg';
import tocarrena from '../images/tocarreña.jpg';

interface ProductType {
  name: string;
  image: string;
  description: string;
  uses: string[];
  nutritionalInfo: string;
}

const products = {
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
  const { id } = useParams<{ id: keyof typeof products }>();
  const product: ProductType | undefined = products[id as keyof typeof products];

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return <ProductDetail
    name={product.name}
    description={product.description}
    image={product.image}
    uses={product.uses}
    nutritionalInfo={product.nutritionalInfo}
  />;
};

export default Product;