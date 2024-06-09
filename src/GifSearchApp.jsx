import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

// UGYmSQWvqzjtSEmkYfKGqHZpoZY5eix2

export const GifSearchApp = () => {
  const [categories, setCategories] = useState([""]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, 'Valorant'])
  };

  return (
    <>
      <h1>GifSearchApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifSearchApp;
