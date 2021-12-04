import React from 'react';

import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Card from '../src/components/Card';

import cardData from './data';

const App = () => {

    const cardInfo =  cardData.map(card => {
        return (
            <Card
                key={card.id}
                {...card}
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