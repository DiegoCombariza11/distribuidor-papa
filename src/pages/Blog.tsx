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
      <p>Las papas son un ingrediente versátil que se puede usar en una variedad de platos deliciosos. Aquí te presentamos 10 recetas increíbles con papa, con explicaciones para que puedas experimentar con nuevos sabores y técnicas de cocina.</p>
      <ol>
        <li>
          <p><strong>Papas gratinadas con queso y crema:</strong> Este clásico plato de papas gratinadas combina capas de papas finamente cortadas, con una mezcla rica de crema, queso y especias. Se hornea hasta obtener una textura cremosa en el centro y un dorado crujiente en la parte superior. Ideal como acompañamiento o plato principal.</p>
        </li>
        <li>
          <p><strong>Ensalada de papa con mayonesa y hierbas frescas:</strong> La ensalada de papa es una receta fresca y deliciosa, perfecta para días cálidos. Las papas cocidas se combinan con una cremosa mayonesa, mostaza, cebolla picada y una mezcla de hierbas frescas como el perejil y el eneldo. Se sirve fría, y es ideal para acompañar carnes a la parrilla o sandwiches.</p>
        </li>
        <li>
          <p><strong>Puré de papa con ajo asado:</strong> Para darle un toque gourmet a tu puré de papa tradicional, agrega ajo asado. El ajo asado se vuelve suave y dulce, y cuando se mezcla con el puré de papa, aporta un sabor profundo y delicioso. Este puré es perfecto para acompañar carnes, especialmente pollo o cerdo.</p>
        </li>
        <li>
          <p><strong>Papas rellenas de carne y vegetales:</strong> Las papas rellenas son una opción versátil y completa. Las papas se hornean, se les extrae la pulpa y luego se rellenan con una mezcla de carne picada, verduras salteadas y queso. Una vez rellenas, se gratinan en el horno para un resultado crujiente por fuera y cremoso por dentro.</p>
        </li>
        <li>
          <p><strong>Sopa de papa y puerro:</strong> Esta sopa cremosa es un verdadero placer en días fríos. El puerro le aporta un sabor suave y ligeramente dulce que combina perfectamente con la papa. Es una sopa reconfortante que se puede servir con un poco de crema agria y crutones crujientes.</p>
        </li>
        <li>
          <p><strong>Tortilla española de papa:</strong> Un clásico de la cocina española. La tortilla de papas se prepara con papas fritas lentamente en aceite de oliva, junto con cebolla y huevos batidos. El resultado es una tortilla jugosa y suave por dentro, perfecta para servir tanto caliente como fría, y que puede acompañarse con pan o una ensalada.</p>
        </li>
        <li>
          <p><strong>Papas fritas caseras con especias:</strong> Las papas fritas no necesitan mucha presentación, pero puedes elevarlas a otro nivel añadiendo tus especias favoritas. Prueba con una mezcla de pimentón, ajo en polvo y orégano para darle un toque especial. Sirve con tus salsas favoritas.</p>
        </li>
        <li>
          <p><strong>Gnocchi de papa con salsa de tomate:</strong> El gnocchi es una pasta suave hecha con puré de papa. Se cocina rápidamente y combina perfectamente con salsas simples como una de tomate fresco y albahaca, o una salsa de mantequilla y salvia. Es una receta fácil y deliciosa que puedes hacer desde cero.</p>
        </li>
        <li>
          <p><strong>Croquetas de papa y queso:</strong> Estas croquetas son crujientes por fuera y suaves por dentro. Se hacen con puré de papa mezclado con queso rallado, se forman pequeñas bolitas que se empanizan y se fríen. Son ideales como aperitivo o guarnición.</p>
        </li>
        <li>
          <p><strong>Papas asadas con romero y ajo:</strong> Las papas asadas con romero y ajo son un acompañamiento sencillo pero lleno de sabor. Las papas se cortan en trozos grandes, se mezclan con aceite de oliva, ajo picado y romero fresco, y se asan hasta que estén doradas y crujientes.</p>
        </li>
      </ol>
      <p>Cada una de estas recetas destaca el sabor único y la textura de nuestras papas de alta calidad. ¡Experimenta con estas ideas y descubre tu favorita!</p>
    `
  },
  beneficios: {
    title: 'Beneficios de la Papa',
    image: beneficios,
    content: `
      <p>La papa no solo es deliciosa, sino que también ofrece una serie de beneficios nutricionales que la convierten en un alimento esencial en cualquier dieta equilibrada. A continuación, te explicamos algunos de sus principales beneficios:</p>
      <ul>
        <li>
          <p><strong>Rica en nutrientes:</strong> Las papas son una excelente fuente de vitaminas y minerales esenciales, como la vitamina C, el potasio y la vitamina B6. Estos nutrientes son importantes para mantener el sistema inmunológico fuerte, regular la presión arterial y promover el metabolismo energético.</p>
        </li>
        <li>
          <p><strong>Bajo en calorías:</strong> Contrario a la creencia popular, las papas son relativamente bajas en calorías, siempre que se preparen de manera saludable, como al horno o hervidas. Esto las convierte en una excelente opción para quienes buscan controlar su peso sin renunciar a comidas sabrosas.</p>
        </li>
        <li>
          <p><strong>Alta en fibra:</strong> La papa, especialmente si se consume con la piel, es una buena fuente de fibra dietética. La fibra ayuda a mantener la salud digestiva, previniendo el estreñimiento, y también contribuye a una mayor sensación de saciedad, lo que puede ser útil para el control del apetito.</p>
        </li>
        <li>
          <p><strong>Antioxidantes:</strong> Las papas contienen antioxidantes, como los flavonoides y carotenoides, que pueden ayudar a reducir el riesgo de desarrollar enfermedades crónicas al neutralizar los radicales libres en el cuerpo.</p>
        </li>
        <li>
          <p><strong>Libre de gluten:</strong> Las papas son naturalmente libres de gluten, lo que las convierte en una opción segura y nutritiva para personas con enfermedad celíaca o sensibilidad al gluten.</p>
        </li>
        <li>
          <p><strong>Versatilidad culinaria:</strong> Las papas pueden ser cocinadas de muchas maneras diferentes, desde asadas, fritas, en puré, hasta en sopas. Esta versatilidad las hace ideales para adaptarse a cualquier tipo de dieta o preferencia alimentaria.</p>
        </li>
      </ul>
      <p>Incorporar papas en tu dieta de manera equilibrada puede contribuir a una alimentación saludable y nutritiva. ¡Añade papas a tus platos diarios y disfruta de sus beneficios!</p>
    `
  },
  sostenible: {
    title: 'Cultivo Sostenible',
    image: sostenible,
    content: `
      <p>En nuestra distribuidora, nos comprometemos no solo a ofrecer productos de calidad, sino también a cuidar el medio ambiente mediante prácticas de cultivo sostenible. A continuación, explicamos algunos de los métodos que utilizamos para garantizar que nuestras papas sean tanto nutritivas como respetuosas con el entorno:</p>
      <ul>
        <li>
          <p><strong>Rotación de cultivos:</strong> Implementamos la rotación de cultivos para preservar la salud del suelo, lo que permite evitar el agotamiento de nutrientes y reducir la necesidad de pesticidas químicos. Esta técnica también mejora la biodiversidad del terreno.</p>
        </li>
        <li>
          <p><strong>Conservación del agua:</strong> Utilizamos sistemas de riego por goteo que permiten reducir el desperdicio de agua al dirigir el recurso exactamente donde se necesita. Este método es eficiente y sostenible, especialmente en regiones donde el agua es escasa.</p>
        </li>
        <li>
          <p><strong>Control biológico de plagas:</strong> Para evitar el uso excesivo de pesticidas, favorecemos el control biológico utilizando depredadores naturales de las plagas. Esto no solo protege la salud de nuestras papas, sino también del ecosistema circundante.</p>
        </li>
        <li>
          <p><strong>Compostaje:</strong> Los residuos orgánicos de nuestras operaciones se reciclan para crear compost natural, que luego es utilizado para enriquecer el suelo. De esta manera, reducimos el uso de fertilizantes sintéticos.</p>
        </li>
        <li>
          <p><strong>Energía renovable:</strong> Nuestras instalaciones cuentan con paneles solares, lo que nos permite reducir significativamente nuestra huella de carbono. Esta energía limpia alimenta nuestros sistemas de almacenamiento y procesamiento de papas.</p>
        </li>
        <li>
          <p><strong>Reducir el desperdicio de alimentos:</strong> Trabajamos en conjunto con bancos de alimentos y organizaciones locales para donar papas y otros productos que no cumplen con los estándares estéticos pero que siguen siendo perfectamente comestibles.</p>
        </li>
      </ul>
      <p>Creemos firmemente en un futuro sostenible, y cada pequeño paso cuenta para proteger nuestro planeta. Al elegir nuestros productos, también estás apoyando un enfoque responsable hacia el cultivo de alimentos.</p>
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