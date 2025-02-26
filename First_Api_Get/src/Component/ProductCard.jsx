import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductCard = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div style={styles.container}>
            {loading ? (
                <h2 style={styles.loading}>Loading Products...</h2>
            ) : (
                products.map(product => (
                    <div key={product.id} style={styles.card} className="hover-card">
                        <div style={styles.imageContainer}>
                            <img src={product.image} alt={product.title} style={styles.image} className="hover-image" />
                        </div>
                        <div style={styles.content}>
                            <h3 style={styles.title}>{product.title}</h3>
                            <p style={styles.description}>{product.description.substring(0, 50)}...</p>
                            <p style={styles.price}><strong>Price:</strong> ${product.price}</p>
                        </div>
                        <button style={styles.button} className="hover-button">Buy Now</button>
                    </div>
                ))
            )}
        </div>
    );
};

const styles = {
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#000", 
    },
    loading: {
        textAlign: "center",
        fontSize: "24px",
        color: "#555",
    },
    
        card: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "15px",
            padding: "15px",
            textAlign: "center",
            background: "#222", // Dark Gray Background
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            height: "100%",
            cursor: "pointer",
        },
        imageContainer: {
            overflow: "hidden",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
        },
        image: {
            width: "100%",
            height: "180px",
            objectFit: "contain",
            transition: "transform 0.3s ease-in-out",
        },
        content: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 0",
        },
        title: {
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff", // White for better contrast
            marginBottom: "5px",
        },
        description: {
            color: "#bbb", // Light Gray for readability
            fontSize: "14px",
            marginBottom: "5px",
        },
        price: {
            fontWeight: "bold",
            color: "rgba(253, 237, 17, 0.91)", // Yellow for highlighting price
            fontSize: "16px",
            marginBottom: "10px",
        },
        button: {
            backgroundColor: "rgba(237, 222, 13, 0.91)",
            color: "#000",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "auto",
            transition: "all 0.3s ease",
        },
    
    
};

// CSS styles for hover effects
const hoverStyles = `
    .hover-button:hover {
        background-color: #e84118;
        transform: scale(1.05);
    }
    .hover-button:active {
        transform: scale(0.95);
    }
    .hover-card:hover {
        transform: scale(1.05);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }
    .hover-image:hover {
        transform: scale(1.1);
    }
`;

// Adding hover effects globally
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = hoverStyles;
document.head.appendChild(styleSheet);

export default ProductCard;