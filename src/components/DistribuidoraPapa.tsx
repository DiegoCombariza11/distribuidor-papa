import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../images/logoClean.png';
import pastusa from '../images/pastusa.jpg';
import criolla from '../images/criolla.jpg';
import tocarrena from '../images/tocarreña.jpg';
import beneficios from '../images/blog/beneficios.png';
import recetas from '../images/blog/recetas.jpg';
import sostenible from '../images/blog/sostenible.jpg';

export default function Component() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData(prevState => ({ ...prevState, [name]: value }));
};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    
    //mentira, no los vamos a contactar nunca jasjajs

    alert('Gracias por contactarnos. Te responderemos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-white">
      {/* Encabezado */}
      <header className="bg-yellow-500 shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              <img src={logo} alt="Logo" className="h-20 w-20" />
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#start" className="text-white hover:text-yellow-200">Inicio</a>
              <a href="#main" className="text-white hover:text-yellow-200">Productos</a>
              <a href="#blog" className="text-white hover:text-yellow-200">Blog</a>
              <a href="#contacto" className="text-white hover:text-yellow-200">Contacto</a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
              </button>
            </div>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <a href="#start" className="block py-2 px-4 text-sm hover:bg-yellow-400 text-white">Inicio</a>
            <a href="#main" className="block py-2 px-4 text-sm hover:bg-yellow-400 text-white">Productos</a>
            <a href="#blog" className="block py-2 px-4 text-sm hover:bg-yellow-400 text-white">Blog</a>
            <a href="#contacto" className="block py-2 px-4 text-sm hover:bg-yellow-400 text-white">Contacto</a>
          </div>
        )}
      </header>

      {/* Hero Section con CTA */}
      <section id="start" className="bg-yellow-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-yellow-800">Distribuidora de Papa Premium</h1>
          <p className="text-xl mb-8 text-yellow-700">La mejor calidad para tu negocio</p>
          <a href="#contacto" className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300">
            Contáctanos Ahora
          </a>
        </div>
      </section>

      {/* Contenido Principal */}
      <section id="main" className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestros Productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={pastusa} alt="Papa Blanca" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Papa Pastusa</h3>
                <p className="text-gray-600">Perfecta para freír y hornear</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={criolla} alt="Papa Amarilla" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Papa Criolla</h3>
                <p className="text-gray-600">Ideal para purés y guisos</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={tocarrena} alt="Papa Roja" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Papa Tocarreña</h3>
                <p className="text-gray-600">Excelente para ensaladas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestro Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={recetas} alt="Blog 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2 text-gray-800">10 Recetas con Papa</h3>
                <p className="text-gray-600">Descubre deliciosas formas de preparar papa...</p>
                <a href="#" className="text-yellow-500 hover:text-yellow-600 mt-2 inline-block">Leer más</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={beneficios} alt="Blog 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Beneficios de la Papa</h3>
                <p className="text-gray-600">Conoce por qué la papa es un alimento esencial...</p>
                <a href="#" className="text-yellow-500 hover:text-yellow-600 mt-2 inline-block">Leer más</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={sostenible} alt="Blog 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2 text-gray-800">Cultivo Sostenible</h3>
                <p className="text-gray-600">Aprende sobre nuestras prácticas de cultivo...</p>
                <a href="#" className="text-yellow-500 hover:text-yellow-600 mt-2 inline-block">Leer más</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contáctanos</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Pie de Página */}
      <footer className="bg-yellow-500 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src={logo} alt="Logo" className="h-20 w-20" />
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <a href="#" className="hover:text-yellow-200">Términos y Condiciones</a>
              <a href="#" className="hover:text-yellow-200">Política de Privacidad</a>
              <a href="#" className="hover:text-yellow-200">FAQ</a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p>&copy; 2024 Distribuidora de Papa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}