import React from 'react';
import {About, Contact, Hero, Hotel, Question} from './dependencies';

let aboutContent = {
  string_1: "Welcome to our website built on React. This is a Hotel Booking Website consisting of 25 hotels around. Enjoy cheap hotel deals for any destination with great savings.",
  string_2: "Pet Friendly",
  string_3: "Due to the huge influx of tourists in India, EaseMyTrip offers a wide range of luxury, deluxe and budget hotels to them. Choose to stay in luxury and comfort with greatest discounts available on hotels bookings.",
  video_1: "https://youtu.be/Scxs7L0vhZ4",
  string_4: "Classiest Budget Hotels",
  string_5: "We list classiest budget hotels on our site along with some of the prominent international hotel chains of India including Oberoi Group, ITC Group, Taj Group, Le Meridian Group and many others. Ranging from class hotels to luxury beach resorts, each hotel on our site gives you a memorable staying experience. Along with deluxe, budget and luxury hotels, Hotelfix also displays a number of heritage hotels for offering you a royal stay."
};

let heroContent = {
  slideName : "HotelFix",
  slideName_2 : "Book Worldwide...",
  slideName_3 : "Luxarious and Safe stay",
  slide_1 : "Starting from 2020, our website has more than over 100 hotels around India. We provide the best hotels possibilities around the country.",
  slide_2 : "Best hotels available for different destinations to offer you a stay of lifetime.",
  slide_3 : "All our hotels have good ratings on Trip Advisor and recommended by users. Enjoy hotel bookings with best offers and discount and make your stay unforgettable."
};

let contactContent = {
  address : "13/2 Action Area III, Kolkata 700028, India",
  email_1 : "hotelfix@hotelfix.com",
  email_2 : "worldwidehotelfix@hotelfix.com", 
  number_1 : "+9162913688",
  number_2 : "+91891754632"
};

let questionContent = {
  question_1 : "How can I Save while Booking Hotels ?",
  question_2 : "Can I Book a Hotel With a Local ID?",
  question_3 : "How can I Get Early Check-in or Late Check-out in a Hotel?",
  question_4 : "How can Unmarried Couples Book Hotels in India?",
  question_5 : "How can I Book Cheap Hotel Rooms in 5 Star Hotels?",
  answer_1 : "To save on your hotel reservation, you should try to book them in advance by comparing the best deals on various websites. One important thing that every traveler should know is that hotels in India have different GST rates depending on their tariff. The GST rate of the hotels with a tariff between Rs 1,001 and RS 7,500 per night is 12% and GST rate for hotels with tariff equal to or above Rs 7,501 per night is 18%. So, you can create a great difference here.",
  answer_2 : "There is no law that allows hotel authorities to prohibit the local couples from spending time with each other in a hotel room. Earlier hoteliers used to deny the local couples as they wanted to give preference to the guests who traveled from far as they usually occupy the room for more days but local couples hardly book a room for one day. However, due to the growing number of startups in the hotel industry, local couples can also book a hotel room.",
  answer_3 : "Early check-ins or late checkouts in hotels are subject to availability and customers have to ask about this directly from the hotels. If a hotel reception is accommodating, they can provide their guests both Early Check-in and Late Check-out or at least any of these. However, it also depends if rooms are available in the hotel or not. Usually, guests can enjoy free early check-in or late check-out of up to 2 hours.",
  answer_4 : "No law denies the stay of unmarried couples from booking and staying in a hotel. However, it solely depends on the hotel authority to allow the check-ins in such hotels. Choosing to stay together is a personal choice, which can’t be restricted. Unmarried couples should always try to book their hotels online for 2 persons by checking earlier if the hotel provides them entry or not. Here is a tip, unmarried couples or any couple shouldn’t indulge into activities that unnecessarily draw the attention of people. Generally, hotel reception checks the id proofs and then allows the guests to check-in without making any fuss about if they are unmarried or married.",
  answer_5 : "There are several 5 star hotels in various cities that are available at cheaper rates. To book cheap hotel rooms in 5 start hotels, one of the most important things that you can do is to be flexible about your dates. If you are not planning to travel during weekends, stay can be booked at very cheaper rates.",
};

function LandingPage() {
  return (
    <React.Fragment>
      <Hero heroContent = {heroContent}/>
      <About content = {aboutContent} />
      <Hotel />
      <Question questionContent = {questionContent} />
      <Contact content = {contactContent}/>
    </React.Fragment>
  );
}

export default LandingPage;
