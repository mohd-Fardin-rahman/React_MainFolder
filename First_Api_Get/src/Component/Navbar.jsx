import React, { useState, useRef, useEffect } from "react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]); // State to store category data
  const cardsRef = useRef(null);

  useEffect(() => {
    // Fetch categories from API
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/NavCatogary");
        const data = await response.json();
        setCategories(data); // Store the response data in state
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []); // Run once on component mount

  useEffect(() => {
    let interval;

    if (isOpen && categories.length > 0) {
      interval = setInterval(() => {
        if (cardsRef.current) {
          const containerWidth = cardsRef.current.offsetWidth;
          const cardWidth = containerWidth / categories.length;

          cardsRef.current.style.transition = "transform 0.5s ease-in-out";
          cardsRef.current.style.transform = `translateX(-${cardWidth}px)`;

          const firstCard = cardsRef.current.firstChild;
          setTimeout(() => {
            cardsRef.current.style.transition = "none";
            cardsRef.current.appendChild(firstCard);
            cardsRef.current.style.transform = `translateX(0px)`;
          }, 400);
        }
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isOpen, categories]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#222] text-white">
      <div className="container mx-auto h-[50px] flex justify-between items-center py-4 px-6">
        <a href="/" className="text-xl font-bold text-[#ffff00]">Ashu Nx</a>
        <button className="lg:hidden text-white focus:outline-none">☰</button>
        <div className="hidden lg:flex space-x-6">
          <a href="/" className="hover:text-gray-300"  >Home</a>
          <a href="/products" className="hover:text-gray-300">Products</a>

          {/* Dropdown */}
          <div className="w-full">
            <button
              onClick={toggleDropdown}
              className="hover:text-gray-300 w-full text-left py-2 px-4"
            >
              Categories ▼
            </button>
            {isOpen && (
              <div
                className="absolute left-0 w-full text-white z-50 shadow-lg mt-[2px]"
                style={{ background: "rgba(0,0,0,.85)" }}
              >
                {/* Carousel for scrolling through cards */}
                <div className="relative">
                  <div ref={cardsRef} className="flex overflow-hidden space-x-4 p-4">
                    {categories.map((category, index) => (
                      <a
                        key={index}
                        href={`/${category.title}`} // Assuming name is the category URL
                        className="category-card w-64 bg-gray-700 rounded-lg overflow-hidden"
                      >
                        <div className="relative">
                          <img
                            src={category.image_url} // API should return valid image URL
                            alt={category.name}
                            className="object-cover w-full h-32"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                            {category.title}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
