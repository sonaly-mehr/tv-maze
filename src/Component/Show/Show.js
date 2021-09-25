import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Show.css'
// import ShowDetail from '../ShowDetail/ShowDetail'
// import facebook from '../../Facebook.png';
// import twitter from '../../Twitter.png';
// import youtube from '../../YouTube.png';


const Show = () => {
    const { showId } = useParams();
    const [shows, setShows] = useState([]);
    const [img, setImg] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const [genres, setGenres] =useState([]);

    useEffect(() => {
        const url = `https://api.tvmaze.com/shows/${showId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setShows(data))
    }, [showId])

    useEffect(() => {
        const url = `https://api.tvmaze.com/shows/${showId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setImg(data.image))
    }, [showId])
    useEffect(() => {
        const url = `https://api.tvmaze.com/shows/${showId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSchedule(data.schedule))
    }, [showId])
    useEffect(() => {
        const url = `https://api.tvmaze.com/shows/${showId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setGenres(data.genres))
    }, [showId])

    return (
        <div>
            <div className="show-background">
                <img src={img.original} alt="" />
                <div className="background_header">
                    <h2>TV</h2>
                    <h4>Maze</h4>
                </div>
            </div>
            <div className="show-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="show-img">
                                <h2 className="heading">{shows.name}</h2>
                                <img src={img.medium} alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="show-summary">
                                <p>{shows.summary}</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="show-info">
                                <h2>Show Info</h2>
                                <p>Schedule: <span>{schedule.days} at {schedule.time}</span></p>
                                <p>Status: <span>{shows.status}</span></p>
                                <p>Show Type: <span>{shows.type}</span></p>
                                <p>Genres: <span>{genres[0]} | {genres[1]}</span></p>
                                <p>Language: <span>{shows.language}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;