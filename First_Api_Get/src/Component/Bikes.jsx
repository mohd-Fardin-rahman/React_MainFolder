import React, { useEffect, useState } from "react";
import axios from "axios";

const Bikes = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/bikes")
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div style={styles.container}>
            {products.map(product => (
                <div key={product.id} style={styles.card}>
                    <img src={product.image_url} alt={product.title} style={styles.image} />
                    <h3>{product.name}</h3>
                    <h3>{product.title}</h3>
                    {/* <p>{product.description.substring(0, 50)}...</p> */}
                    <p><strong>Price:</strong> ${product.price}</p>
                    <button style={styles.button}>Buy Now</button>
                </div>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px"
    },
    card: {
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
    },
    image: {
        width: "100%",
        height: "200px",
        objectFit: "contain",
        borderRadius: "5px"
    },
    button: {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "10px"
    }
};

export default Bikes;
