import React from 'react';
import jsPDF from "jspdf";
import "jspdf-autotable";

//HOLA TETE

function CVPreview({ cvData }) {

    // Verifica que cvData tenga los datos correctos
    console.log("cvData en CVPreview:", cvData);

    // Función para generar el PDF
    const generatePDF = () => {
        const doc = new jsPDF();
    
        // Estilos personalizados
        const primaryColor = [40, 116, 240]; // Azul moderno
        const textColor = [0, 0, 0]; // Negro
        const lightGray = [200, 200, 200]; // Gris claro
    
        // Título
        doc.setFillColor(...primaryColor);
        doc.rect(0, 0, 210, 30, 'F'); // Fondo azul para el encabezado
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(20);
        doc.setTextColor(255, 255, 255); // Blanco
        doc.text("Curriculum Vitae", 10, 20);
    
        // Información personal
        doc.setFont("Helvetica", "normal");
        doc.setFontSize(12);
        doc.setTextColor(...textColor);
        doc.text(`Nombre: ${cvData.name}`, 10, 40);
        doc.text(`Profesión: ${cvData.profession}`, 10, 50);
        doc.text(`Experiencia: ${cvData.experience}`, 10, 60);
        doc.text(`Correo Electrónico: ${cvData.email}`, 10, 70);
    
        // Línea separadora
        doc.setDrawColor(...lightGray);
        doc.line(10, 75, 200, 75);
    
        // Estilo de la tabla de estadísticas
        const tableData = [
            ["Año 1", "5 años de experiencia"],
            ["Año 2", "8 años de experiencia"],
            ["Año 3", "10 años de experiencia"],
        ];
    
        // Título de la sección de estadísticas
        doc.setFontSize(14);
        doc.setTextColor(...primaryColor);
        doc.text("Estadísticas de Experiencia", 10, 90);
    
        // Crear la tabla
        doc.autoTable({
            head: [["Año", "Descripción"]],
            body: tableData,
            startY: 95,
            theme: "striped",  // Estilo "striped" para filas alternadas
            headStyles: { fillColor: primaryColor }, // Color de fondo de los encabezados
            styles: { fontSize: 10 },
        });
    
        // Pie de página
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text("Generado automáticamente con React + jsPDF", 10, 290);
    
        // Guardar el documento como 'cv.pdf'
        doc.save("cv.pdf");
    };
    
    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Vista Previa del CV</h2>
            <div>
                <p className="text-lg font-medium">Nombre: <span className="font-normal">{cvData.name}</span></p>
                <p className="text-lg font-medium">Profesión: <span className="font-normal">{cvData.profession}</span></p>
                <p className="text-lg font-medium">Experiencia: <span className="font-normal">{cvData.experience}</span></p>
                <p className="text-lg font-medium">Correo Electrónico: <span className="font-normal">{cvData.email}</span></p>
            </div>
    
            {/* Botón para generar el PDF */}
            <button
                onClick={generatePDF}
                className="mt-6 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
                Descargar como PDF
            </button>
        </div>
    );
    
    
}

export default CVPreview;
