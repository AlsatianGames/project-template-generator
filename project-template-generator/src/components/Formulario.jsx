function Formulario({ formData, setFormData }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setFormData({ ...formData, image: file });
      }
    };
  
    const handleAddGalleryItem = (e) => {
      const file = e.target.files[0];
      if (file) {
        setFormData({
          ...formData,
          gallery: [...formData.gallery, file]
        });
      }
    };
  
    return (
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
        <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-center">Formulario</h2>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-4">
            <input
              type="text"
              name="nombreFuncion"
              placeholder="Nombre de la función"
              value={formData.nombreFuncion}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500"
            />
  
            <input
              type="text"
              name="titleEs"
              placeholder="Título (ES)"
              value={formData.titleEs}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500"
            />
  
            <input
              type="text"
              name="titleEn"
              placeholder="Título (EN)"
              value={formData.titleEn}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500"
            />
          </div>
  
          <div className="flex-1 space-y-4">
            <textarea
              name="descEs"
              placeholder="Descripción (ES)"
              value={formData.descEs}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 resize-none"
            />
  
            <textarea
              name="descEn"
              placeholder="Descripción (EN)"
              value={formData.descEn}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 resize-none"
            />
  
            <input
              type="text"
              name="blogLink"
              placeholder="Link del blog"
              value={formData.blogLink}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500"
            />
          </div>
        </div>
  
        <div className="mt-6 space-y-4">
          <div>
            <label className="block mb-2 font-semibold">Imagen principal:</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full p-2 border rounded"
            />
          </div>
  
          <div>
            <label className="block mb-2 font-semibold">Agregar imágenes a la galería:</label>
            <input
              type="file"
              onChange={handleAddGalleryItem}
              multiple
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Formulario;
  