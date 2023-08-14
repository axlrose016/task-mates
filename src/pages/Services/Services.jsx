import React from 'react';
import './Services.css';
import ServicesCard from '../../components/ServicesCard/ServicesCard';

function Services() {
  return (
    <div className='cards'>
      <h1>Check out our Services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ServicesCard
              src='images/img-10.jpg'
              text='The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.)'
              label='Adventure'
              path='/services'
            />
            <ServicesCard
              src='images/img-11.jpg'
              text='The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.'
              label='Friends'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <ServicesCard
              src='images/img-12.jpg'
              text='The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.'
              label='Collaborate'
              path='/services'
            />
            <ServicesCard
              src='images/img-13.jpg'
              text='One brave soul did take a stab at translating the almost-not-quite-Latin.'
              label='Work'
              path='/products'
            />
            <ServicesCard
              src='images/img-14.jpg'
              text='Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa.'
              label='Commitment'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
