import React from "react";
import './FeaturedMovie.css';

export default () => {
    
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push (item.genres[i].name)
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: center,
            backgroundImage: `url(https://image.tmbdb.org/t/p/original${item.backgrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{featured.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporadas{item.number_of_seasons != 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featurewd--buttons">
                    <a href={`/watch/${item.id}`} className="featured--watchbutton">Assistir</a>
                    <a href={`/list/add/${item.id}` className="featured--mylistbutton"}>+ Minhas Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros</strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    )
}