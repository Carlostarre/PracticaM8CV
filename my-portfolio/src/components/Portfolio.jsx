import { useEffect, useState } from "react";

function Portfolio() {
    const [cvData, setCvData] = useState(null);

    useEffect(() => {
        fetch("http://localhost/cv/api.php")
            .then((response) => response.json())
            .then((data) => setCvData(data));
    }, []);

    if (!cvData) return <p>Loading...</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{cvData.name}</h1>
            <p>{cvData.profession}</p>
            <p>{cvData.experience}</p>
            <p>{cvData.email}</p>
        </div>
    );
}

export default Portfolio;
