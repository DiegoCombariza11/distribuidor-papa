import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  content: string;
  image: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content, image }) => {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-yellow-500 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="text-white text-2xl font-bold">Distribuidora de Papa</Link>
        </div>
      </header>
      <main className="container mx-auto px-6 py-8">
        <article className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-64 object-contain" />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }}></div>
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

export default BlogPost;