// "use client";

// import { useState, useEffect } from "react";

// const useFavorites = () => {
//   const [favorites, setFavorites] = useState<number[]>([]);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(
//       localStorage.getItem("favorites") || "[]"
//     );
//     setFavorites(storedFavorites);
//   }, []);

//   const addFavorite = (id: number) => {
//     const updatedFavorites = [...favorites, id];
//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//     console.log(favorites);
//   };

//   const removeFavorite = (id: number) => {
//     if (id) {
//       const updatedFavorites = favorites.filter((fav) => fav !== id);
//       setFavorites(updatedFavorites);
//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

//       console.log(favorites);
//     }
//   };

//   return { favorites, addFavorite, removeFavorite };
// };

// export default useFavorites;
