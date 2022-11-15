import { useState } from "react";

export const AddCategory = ({addCategory}) => {

    const [categoryName, setCategoryName] = useState("one pice");

    const handleChange = ({target}) => {
        setCategoryName(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(categoryName.trim().length<=1) return;
        addCategory(categoryName);
        setCategoryName("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name of Category:
                    <input type="text" value={categoryName} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}
