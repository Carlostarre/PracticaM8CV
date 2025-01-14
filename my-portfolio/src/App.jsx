import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Portfolio from "./components/Portfolio"; // Asegúrate de tener esta ruta correcta
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import StatsChart from "./components/StatsChart";


function App() {
  const [cvData, setCvData] = useState(null); // Inicializa con null hasta obtener los datos de la API
  const [experienceStats, setExperienceStats] = useState([5, 8, 10]);

  // Obtener datos del CV desde la API
  useEffect(() => {
    const fetchCVData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api.php"); // Reemplaza con la URL correcta
        const data = await response.json();

        // Verifica que los datos se obtienen correctamente
        console.log("Datos recibidos:", data); // Verificar los datos en la consola

        setCvData(data); // Guardar los datos del CV en el estado
      } catch (error) {
        console.error("Error al obtener los datos del CV:", error);
      }
    };

    fetchCVData();
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  // Función que se llama al enviar el formulario para actualizar los datos
  const handleFormSubmit = (updatedData) => {
    setCvData(updatedData); // Actualiza los datos del CV con la nueva información del formulario
  };

  // Mostrar un mensaje de "Cargando..." mientras se obtienen los datos
  if (!cvData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Componente Portfolio */}
      <Portfolio />

      {/* Aquí va tu formulario de CV */}
      <div className="container mx-auto p-6">
        <CVForm onSubmit={handleFormSubmit} />
      </div>

      {/* Vista previa del CV */}
      <div className="container mx-auto p-6">
        <CVPreview cvData={cvData} />
      </div>

      {/* Gráfico de estadísticas */}
      <div className="container mx-auto p-6">
        <StatsChart experienceData={experienceStats} />
      </div>
    </div>
  );
}

export default App;
