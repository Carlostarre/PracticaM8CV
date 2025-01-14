import { useState } from "react";
import "./CVForm.css";

function CVForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        profession: "",
        experience: "",
        email: ""
    });

    // Actualizar el estado del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Enviar datos del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Llamamos la función onSubmit con los datos del formulario
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Actualizar CV</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 mt-1 border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Profesión</label>
                    <input
                        type="text"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        className="w-full px-3 py-2 mt-1 border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Experiencia</label>
                    <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-3 py-2 mt-1 border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 mt-1 border rounded-md"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Guardar Cambios
                </button>
            </form>
        </div>
    );
}

export default CVForm;
