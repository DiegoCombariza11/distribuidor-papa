// import React from 'react';
import { useParams, Link } from 'react-router-dom';
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

const Blog = () => {
  const { id } = useParams<{ id: keyof typeof blogPosts }>() as { id: keyof typeof blogPosts };
  const post = blogPosts[id];

  if (!post) {
    return <div>Entrada de blog no encontrada</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-yellow-500 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="text-white text-2xl font-bold">Distribuidora de Papa</Link>
        </div>
      </header>
      <main className="container mx-auto px-6 py-8">
        <article className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
        </article>
      </main>
      <footer className="bg-yellow-500 text-white mt-8">
        <div className="container mx-auto px-6 py-4 text-center">
          <p>&copy; 2024 Distribuidora de Papa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;