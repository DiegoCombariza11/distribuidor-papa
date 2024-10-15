import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import beneficios from '../images/blog/beneficios.png';
import recetas from '../images/blog/recetas.jpg';
import sostenible from '../images/blog/sostenible.jpg';

const blogPosts = {
    recetas: {
      title: '10 Recetas con Papa',
      image: recetas,
      content: `
        <p>Las papas son un ingrediente versátil que se puede usar en una variedad de platos deliciosos. Aquí te presentamos 10 recetas increíbles con papa:</p>
        <ol>
          <li>Papas gratinadas con queso y crema</li>
          <li>Ensalada de papa con mayonesa y hierbas frescas</li>
          <li>Puré de papa con ajo asado</li>
          <li>Papas rellenas de carne y vegetales</li>
          <li>Sopa de papa y puerro</li>
          <li>Tortilla española de papa</li>
          <li>Papas fritas caseras con especias</li>
          <li>Gnocchi de papa con salsa de tomate</li>
          <li>Croquetas de papa y queso</li>
          <li>Papas asadas con romero y ajo</li>
        </ol>
        <p>Cada una de estas recetas destaca el sabor único y la textura de nuestras papas de alta calidad. ¡Experimenta con estas ideas y descubre tu favorita!</p>
      `
    },
    beneficios: {
      title: 'Beneficios de la Papa',
      image: beneficios,
      content: `
        <p>La papa es un alimento nutritivo y versátil que ofrece numerosos beneficios para la salud:</p>
        <ul>
          <li><strong>Rica en nutrientes:</strong> Las papas son una excelente fuente de vitamina C, potasio, y vitamina B6.</li>
          <li><strong>Bajo en calorías:</strong> Contrario a la creencia popular, las papas son relativamente bajas en calorías, especialmente cuando se preparan de manera saludable.</li>
          <li><strong>Alta en fibra:</strong> La fibra en las papas ayuda a mantener un sistema digestivo saludable y promueve la sensación de saciedad.</li>
          <li><strong>Antioxidantes:</strong> Las papas contienen antioxidantes que pueden ayudar a prevenir enfermedades crónicas.</li>
          <li><strong>Libre de gluten:</strong> Es un alimento seguro para personas con intolerancia al gluten o enfermedad celíaca.</li>
          <li><strong>Versátil:</strong> Se puede preparar de muchas maneras diferentes, lo que la hace un alimento muy adaptable a diferentes dietas y preferencias culinarias.</li>
        </ul>
        <p>Incorporar papas en tu dieta de manera equilibrada puede contribuir a una alimentación saludable y nutritiva.</p>
      `
    },
    sostenible: {
      title: 'Cultivo Sostenible',
      image: sostenible,
      content: `
        <p>En nuestra distribuidora, nos comprometemos con prácticas de cultivo sostenible para garantizar la calidad de nuestras papas y proteger el medio ambiente:</p>
        <ul>
          <li><strong>Rotación de cultivos:</strong> Implementamos un sistema de rotación para mantener la salud del suelo y reducir la necesidad de pesticidas.</li>
          <li><strong>Conservación del agua:</strong> Utilizamos sistemas de riego eficientes para minimizar el desperdicio de agua.</li>
          <li><strong>Control biológico de plagas:</strong> Favorecemos el uso de métodos naturales para controlar plagas, reduciendo el uso de químicos.</li>
          <li><strong>Compostaje:</strong> Reciclamos los residuos orgánicos para crear compost y mejorar la calidad del suelo.</li>
          <li><strong>Energía renovable:</strong> Implementamos el uso de energía solar en nuestras instalaciones de almacenamiento y procesamiento.</li>
          <li><strong>Apoyo a la comunidad local:</strong> Trabajamos en estrecha colaboración con agricultores locales, promoviendo prácticas sostenibles y el desarrollo económico de la región.</li>
        </ul>
        <p>Nuestro compromiso con la sostenibilidad no solo beneficia al medio ambiente, sino que también resulta en papas de mejor calidad y sabor para nuestros clientes.</p>
      `
    }
  };

interface BlogPostProps {
    title: string;
    content: string;
    image: string;
  }

const Blog = () => {
  const { id } = useParams<{ id?: keyof typeof blogPosts }>();
  const post = id ? blogPosts[id] : undefined;

  if (!post) {
    return <div>Entrada de blog no encontrada</div>;
  }

  return <BlogPost title={(post as any).title} content={(post as any).content} image={(post as any).image} />;
};

export default Blog;