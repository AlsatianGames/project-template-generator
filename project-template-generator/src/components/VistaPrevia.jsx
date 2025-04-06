function VistaPrevia({ formData }) {
    const { nombreFuncion, titleEs, titleEn, descEs, descEn, image, blogLink, gallery } = formData;
  
    return (
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
        <h2 className="text-2xl font-bold mb-6 text-indigo-600">Vista Previa</h2>
  
        {nombreFuncion && (
          <div className="text-gray-700 space-y-4">
            <p><strong>Nombre función:</strong> {nombreFuncion}</p>
            <p><strong>Título (ES):</strong> {titleEs}</p>
            <p><strong>Título (EN):</strong> {titleEn}</p>
            <p><strong>Descripción (ES):</strong> {descEs}</p>
            <p><strong>Descripción (EN):</strong> {descEn}</p>
            <p><strong>Link del blog:</strong> {blogLink}</p>
  
            {image && (
              <div className="my-6">
                <p className="font-semibold mb-2">Imagen principal:</p>
                <img src={URL.createObjectURL(image)} alt="Principal" className="w-full max-h-60 object-contain rounded shadow" />
              </div>
            )}
  
            {gallery.length > 0 && (
              <div>
                <p className="font-semibold mt-6 mb-2">Galería:</p>
                <div className="grid grid-cols-2 gap-3">
                  {gallery.map((img, idx) => (
                    <img key={idx} src={URL.createObjectURL(img)} alt={`Gallery ${idx}`} className="w-full h-40 object-cover rounded shadow" />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
  
  export default VistaPrevia;
  