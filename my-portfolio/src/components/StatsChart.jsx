import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";  // Asegúrate de importar chart.js correctamente

const StatsChart = ({ experienceData }) => {
  const chartRef = useRef(null);  // Referencia al canvas del gráfico

  useEffect(() => {
    // Asegúrate de destruir cualquier gráfico previo antes de crear uno nuevo
    let chartInstance = null;

    if (chartRef.current) {
      chartInstance = new Chart(chartRef.current, {
        type: 'bar',  // O el tipo de gráfico que estés usando
        data: {
          labels: ['1 year', '2 years', '3 years'],  // Ajusta las etiquetas de tus datos
          datasets: [
            {
              label: 'Experience',
              data: experienceData,  // Asegúrate de que experienceData tenga los datos correctos
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    }

    // Cleanup: destruye el gráfico cuando el componente se desmonte o se actualice
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [experienceData]);  // El gráfico se vuelve a crear cuando 'experienceData' cambia

  return <canvas ref={chartRef}></canvas>;
};

export default StatsChart;
