import { useState } from 'react';
import Formulario from './components/Formulario';
import VistaPrevia from './components/VistaPrevia';
import GeneradorCodigo from './components/GeneradorCodigo'; // 👈 Nuevo

function App() {
  const [formData, setFormData] = useState({
    nombreFuncion: '',
    titleEs: '',
    titleEn: '',
    descEs: '',
    descEn: '',
    image: null,
    blogLink: '',
    gallery: []
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="container mx-auto max-w-screen-lg">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-700 drop-shadow-md">
          Generador de ProjectTemplate 🚀
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Formulario formData={formData} setFormData={setFormData} />
          <VistaPrevia formData={formData} />
        </div>
        <GeneradorCodigo formData={formData} /> {/* 👈 Aquí lo ponemos */}
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mt-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">¿Cómo funciona? 🚀</h2>
          <div className="text-gray-700 text-lg leading-relaxed text-justify space-y-4">
            <p><strong>1. Rellena el Formulario:</strong> Completa los campos de título, descripción e imágenes.</p>
            <p><strong>2. Previsualiza:</strong> Observa en vivo cómo quedará tu proyecto mientras editas.</p>
            <p><strong>3. Genera el Código JSX:</strong> Pulsa el botón para crear el archivo automáticamente.</p>
            <p><strong>4. Descarga tu JSX:</strong> Obtén el archivo listo para tu proyecto React.</p>
            <p><strong>5. Descarga las imágenes (.zip):</strong> Imágenes optimizadas en formato WebP listas para usar.</p>
            <p><strong>6. ¡Integra en tu proyecto!</strong> Copia el JSX y las imágenes a tu portfolio profesional.</p>
          </div>
        </div>
      </div>
      <footer className="mt-10 py-4 border-t text-center text-gray-600 text-sm">
        <p className="mb-1">© 2025 - Creado por <span className="font-semibold text-indigo-600">AlsatianGames - Taliex4</span></p>
        <p>Project Template Generator | Versión 1.0</p>
      </footer>
    </div>
  );
}

export default App;
