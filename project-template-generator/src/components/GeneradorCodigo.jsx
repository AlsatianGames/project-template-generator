import { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

function GeneradorCodigo({ formData }) {
  const [codigoGenerado, setCodigoGenerado] = useState('');

  const generarCodigo = () => {
    if (!formData.nombreFuncion) {
      alert('Por favor, completa al menos el nombre de la función.');
      return;
    }
  
    const galleryItems = formData.gallery.map((file, idx) => ({
      src: `/assets/${file.name.replace(/\.[^/.]+$/, '.webp')}`,
      alt: `Imagen ${idx + 1}`
    }));
  
    const jsx = `
  import ProjectTemplate from '../../components/ProjectTemplate';
  
  export default function ${formData.nombreFuncion}() {
    return (
      <ProjectTemplate
        title={{
          es: "${formData.titleEs}",
          en: "${formData.titleEn}"
        }}
        description={{
          es: "${formData.descEs}",
          en: "${formData.descEn}"
        }}
        image="/assets/${formData.image?.name.replace(/\.[^/.]+$/, '.webp') || ''}"
        blogLink="${formData.blogLink}"
        galleryItems={[
          ${galleryItems.map(item => `{ src: '${item.src}', alt: '${item.alt}' }`).join(',\n        ')}
        ]}
      />
    );
  }
    `.trim();
  
    setCodigoGenerado(jsx);
  };

  const descargarImagenes = async () => {
    if (!formData.image && formData.gallery.length === 0) {
      alert('No hay imágenes para descargar.');
      return;
    }
  
    const zip = new JSZip();
    const assetsFolder = zip.folder('assets');
  
    const convertirAWebp = async (file) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          canvas.toBlob((blob) => {
            resolve(blob);
          }, 'image/webp', 0.8); // 0.8 = calidad
        };
      });
    };
  
    // Convertir y agregar imagen principal
    if (formData.image) {
      const webpBlob = await convertirAWebp(formData.image);
      assetsFolder.file(formData.image.name.replace(/\.[^/.]+$/, '.webp'), webpBlob);
    }
  
    // Convertir y agregar imágenes de la galería
    for (const file of formData.gallery) {
      const webpBlob = await convertirAWebp(file);
      assetsFolder.file(file.name.replace(/\.[^/.]+$/, '.webp'), webpBlob);
    }
  
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, `${formData.nombreFuncion || 'imagenes'}.zip`);
    });
  };

  const descargarArchivo = () => {
    if (!codigoGenerado) {
      alert('Primero genera el código.');
      return;
    }
    const blob = new Blob([codigoGenerado], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${formData.nombreFuncion || 'ProjectTemplate'}.jsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-center">Generar y Descargar Código</h2>

      <div className="flex flex-col items-center gap-4">
        <button
          onClick={generarCodigo}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded transition-all duration-300"
        >
          Generar JSX
        </button>

        {codigoGenerado && (
          <>
            <textarea
              className="w-full p-4 border rounded text-sm font-mono bg-gray-50"
              rows="15"
              value={codigoGenerado}
              readOnly
            />
            <button
              onClick={descargarArchivo}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-all duration-300"
            >
              Descargar JSX
            </button>
            <button
                onClick={descargarImagenes}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-all duration-300"
                >
                Descargar imágenes (.zip)
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default GeneradorCodigo;
