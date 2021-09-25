import React, { useEffect, useState } from 'react';
import './Home.css';
import ShowCard from '../ShowCard/ShowCard';
import Banner from '../Banner/Banner';

const Home = () => {

    const [card, setCard] = useState([]);


    useEffect(() => {
        const url = `https://api.tvmaze.com/search/shows?q=all`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCard(data))

    }, [])


    return (
        <div>
            <Banner></Banner>
            <div className="show_wrap">
                <div className="show-container">
                    <div className="container">
                        <div className="row">
                            {
                                card.map(show => <ShowCard show={show.show}></ShowCard>)

                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;