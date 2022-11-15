import { useGetGifs } from "../hook/useGetGifs"

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useGetGifs(category);

    return (
        <>
            { isLoading && (<h2>Cargando...</h2>)}
            <h3>{category}</h3>
            <div className="card-grid">
                {gifs.map(({ id, title, url }) => (
                    <div className="card" key={id}>
                        <img src={url} alt={title} />
                        <p>{title}</p>
                    </div>
                )
                )}
            </div>
        </>
    )
}
