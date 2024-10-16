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
      <h2>Descubre nuevas formas de disfrutar la papa</h2>
      <p>
        Las papas son uno de los ingredientes más versátiles que podemos encontrar en la cocina.
        Su textura, sabor y capacidad de adaptarse a diferentes tipos de cocción las hacen ideales 
        para una infinidad de recetas. A continuación, te presentamos diez recetas con papa que te 
        harán disfrutar de este increíble tubérculo en formas que tal vez no habías considerado.
      </p>

      <h3>1. Papas gratinadas con queso y crema</h3>
      <p>
        Este plato clásico combina capas de papas finamente cortadas, crema y queso fundido, logrando 
        una textura suave por dentro y crujiente por fuera. Es el acompañamiento perfecto para carnes 
        o como plato principal en cualquier ocasión especial.
      </p>

      <h3>2. Ensalada de papa con mayonesa y hierbas frescas</h3>
      <p>
        Una opción refrescante, ideal para acompañar asados o platos a la parrilla. La combinación de 
        mayonesa con hierbas frescas como el perejil y el eneldo crea un equilibrio perfecto de 
        cremosidad y frescura.
      </p>

      <h3>3. Puré de papa con ajo asado</h3>
      <p>
        Para los amantes de los sabores más intensos, el puré de papa con ajo asado es una excelente 
        opción. El ajo asado aporta un toque especial al puré tradicional, haciéndolo más sabroso y 
        aromático.
      </p>

      <h3>4. Papas rellenas de carne y vegetales</h3>
      <p>
        Una receta más elaborada que te sorprenderá. Las papas se vacían y se rellenan con una mezcla 
        de carne picada, vegetales y especias, para luego hornearlas hasta que estén doradas por fuera 
        y jugosas por dentro.
      </p>

      <h3>5. Sopa de papa y puerro</h3>
      <p>
        Nada mejor que una sopa reconfortante en los días fríos. La combinación del puerro con las 
        papas crea una textura suave y un sabor delicado que encantará a toda la familia.
      </p>

      <h3>6. Tortilla española de papa</h3>
      <p>
        Este plato icónico de la gastronomía española es una opción simple pero deliciosa. La combinación 
        de papas y huevo, cocinada lentamente, crea una textura suave y jugosa en su interior.
      </p>

      <h3>7. Papas fritas caseras con especias</h3>
      <p>
        Una opción sencilla pero siempre apetecible. Al prepararlas en casa, puedes experimentar con 
        diferentes especias como pimentón, ajo en polvo o romero para darle un toque único.
      </p>

      <h3>8. Gnocchi de papa con salsa de tomate</h3>
      <p>
        Este plato más refinado es ideal para los amantes de la pasta. Los gnocchi suaves y esponjosos 
        combinan perfectamente con una salsa de tomate fresca y aromática.
      </p>

      <h3>9. Croquetas de papa y queso</h3>
      <p>
        Crujientes por fuera y suaves por dentro, estas croquetas son perfectas como aperitivo o 
        acompañamiento. El queso fundido en su interior es irresistible.
      </p>

      <h3>10. Papas asadas con romero y ajo</h3>
      <p>
        El acompañamiento perfecto para carnes o pescados. El romero y el ajo aportan un sabor 
        delicioso, mientras que las papas se cocinan hasta obtener una textura crujiente por fuera 
        y suave por dentro.
      </p>

      <p>
        <strong>¡Experimenta con estas ideas y descubre tu favorita!</strong> 
        Cada una de estas recetas resalta el sabor único y la textura de nuestras papas de alta calidad.
      </p>
    `
  },
  beneficios: {
    title: 'Beneficios de la Papa',
    image: beneficios,
    content: `
      <h2>¿Por qué deberías incluir más papas en tu dieta?</h2>
      <p>
        La papa es mucho más que un simple acompañamiento. Este tubérculo ha sido un pilar en la 
        alimentación de muchas culturas alrededor del mundo, y no es de sorprender que sea tan popular, 
        considerando todos los beneficios que ofrece.
      </p>

      <h3>Rica en nutrientes</h3>
      <p>
        Las papas son una excelente fuente de <strong>vitamina C</strong>, <strong>potasio</strong> 
        y <strong>vitamina B6</strong>, esenciales para el buen funcionamiento del organismo. 
        Además, son una buena fuente de carbohidratos complejos, que proporcionan energía duradera.
      </p>

      <h3>Bajo en calorías</h3>
      <p>
        Contrario a lo que muchos piensan, las papas son un alimento <strong>bajo en calorías</strong> 
        si se preparan de manera saludable. Hornearlas o cocerlas al vapor ayuda a conservar sus 
        nutrientes sin agregar grasas innecesarias.
      </p>

      <h3>Alta en fibra</h3>
      <p>
        El contenido de <strong>fibra</strong> de las papas, especialmente cuando se consumen con piel, 
        es ideal para mantener un sistema digestivo saludable y proporcionar una sensación de saciedad 
        prolongada.
      </p>

      <h3>Antioxidantes</h3>
      <p>
        Las papas contienen antioxidantes que ayudan a combatir los radicales libres, lo que puede reducir 
        el riesgo de enfermedades crónicas. Son un complemento excelente para una dieta balanceada.
      </p>

      <h3>Libre de gluten</h3>
      <p>
        Las papas son <strong>naturalmente libres de gluten</strong>, lo que las convierte en una opción 
        segura para personas con intolerancia al gluten o enfermedad celíaca. Además, su versatilidad las 
        hace ideales para incluirlas en cualquier tipo de dieta.
      </p>

      <p>
        Incorporar papas en tu dieta de manera equilibrada puede contribuir significativamente a una 
        alimentación saludable, variada y rica en nutrientes.
      </p>
    `
  },
  sostenible: {
    title: 'Cultivo Sostenible',
    image: sostenible,
    content: `
      <h2>Nuestro compromiso con el medio ambiente</h2>
      <p>
        En nuestra distribuidora, nos enorgullece ofrecer productos de alta calidad de una manera que 
        respete el medio ambiente. El cultivo sostenible es una parte integral de nuestra filosofía de 
        trabajo, y cada paso que damos en el proceso de producción está enfocado en minimizar el impacto 
        ambiental.
      </p>

      <h3>Rotación de cultivos</h3>
      <p>
        La <strong>rotación de cultivos</strong> es fundamental para mantener la salud del suelo. 
        Al alternar los tipos de plantas que cultivamos, logramos mejorar la calidad de nuestras papas 
        y reducir la necesidad de pesticidas.
      </p>

      <h3>Conservación del agua</h3>
      <p>
        Nos enfocamos en la <strong>conservación del agua</strong> utilizando sistemas de riego eficientes 
        que minimizan el uso de este recurso vital, garantizando que el agua no se desperdicie.
      </p>

      <h3>Control biológico de plagas</h3>
      <p>
        Favorecemos el uso de <strong>métodos biológicos</strong> para el control de plagas. Esto reduce 
        el uso de químicos dañinos y permite que nuestras papas crezcan en un entorno más natural y saludable.
      </p>

      <h3>Compostaje</h3>
      <p>
        El <strong>compostaje</strong> es otra práctica que implementamos para enriquecer el suelo de manera 
        natural. Reciclamos los residuos orgánicos para mejorar la fertilidad del suelo y reducir el desperdicio.
      </p>

      <h3>Energía renovable</h3>
      <p>
        Estamos comprometidos con el uso de <strong>energía renovable</strong>. En nuestras instalaciones, 
        utilizamos energía solar para reducir nuestra huella de carbono y promover un futuro más sostenible.
      </p>

      <h3>Apoyo a la comunidad local</h3>
      <p>
        Trabajamos de cerca con agricultores locales, fomentando <strong>prácticas sostenibles</strong> y 
        apoyando el desarrollo económico de la región. Creemos que nuestro éxito está ligado al bienestar de 
        las comunidades que nos rodean.
      </p>

      <p>
        <strong>Nuestro compromiso con el cultivo sostenible</strong> no solo beneficia al medio ambiente, 
        sino que también se refleja en la calidad de las papas que ofrecemos. Queremos que nuestros clientes 
        disfruten de productos frescos, saludables y cultivados de manera responsable.
      </p>
    `
  }
}
;



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