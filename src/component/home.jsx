import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css"
const Home = () => {
    const [data, setData] = useState(null);
    const [photos, setImage] = useState([]);
    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6723d209231e09f40801f98286b58db9&tags=landscape&format=json&nojsoncallback=1")
                setImage(response.data.photos.photo)
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        }
        fetchPhotos();
    }, [data])
    const callApi = async (event) => {
        event.preventDefault();
        await setData(event.target.value);
    }
    return (
        <>
            <section className="container">
                <h1 className="snapshot">SnapShot</h1>
                <input className="input" type="text" placeholder="Search" onChange={(e) => { setData(e.target.value) }} value={data} />
                <button className="btn" onClick={callApi}>Go</button>
                <div>
                    <button className="mountain" onClick={(e) => { setData('Mountain') }}>Mountain</button>
                    <button className="beaches" onClick={(e) => { setData('Beaches') }}>Beaches</button>
                    <button className="birds" onClick={(e) => { setData('Birds') }}>Birds</button>
                    <button className="foods" onClick={(e) => { setData('Foods') }}>Foods</button>
                </div>
                <div>
                    <h1 className="type">{data}</h1>
                    <ul>
                        <div className="gallery">
                            {photos.map((photo) => {
                                return (<>
                                    <div ><img className="images" key={photo.id} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title}/></div>
                                </>
                                )
                            })}
                        </div>
                    </ul>
                </div>
            </section>
        </>
    )
}
export default Home;