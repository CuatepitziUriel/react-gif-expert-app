import { useState } from "react";
import { AddCategory, GifGrid } from "./component";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["one punch men"]);

    const addCategory = (category) => {
        if (categories.includes(category)) return;
        setCategories([category, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                addCategory={addCategory}
            />
            {categories.map(category => (
                <GifGrid key={category} category={category}
                />)
            )}
        </>
    )
}
