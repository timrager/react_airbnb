import React from 'react';

import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Card from '../src/components/Card';

import cardData from './data';

const App = () => {

    const cardInfo =  cardData.map(card => {
        return (
            <Card
                img={card.coverImg}
                rating={card.stats.rating}
                reviewCount={card.stats.reviewCount}
                location={card.location}
                title={card.title}
                price={card.price}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardInfo}
            </section>
        </div>
    )
}



export default App;