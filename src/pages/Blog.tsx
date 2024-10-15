import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import beneficios from '../images/blog/beneficios.png';
import recetas from '../images/blog/recetas.jpg';
import sostenible from '../images/blog/sostenible.jpg';

const blogPosts = {
  // ... (mantén el objeto blogPosts como estaba antes)
};

const Blog = () => {
  const { id } = useParams<{ id?: keyof typeof blogPosts }>();
  const post = id ? blogPosts[id] : undefined;

  if (!post) {
    return <div>Entrada de blog no encontrada</div>;
  }

  return <BlogPost title={(post as any).title} content={(post as any).content} image={(post as any).image} />;
};

export default Blog;