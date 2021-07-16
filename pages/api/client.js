export default function handler (req, res) {
  const data = {
    client: {
      first_name: 'Jane',
      last_name: 'Doe',
      id: '127651',
      covered_points: 1250,
    },
    personal_contact: {
      first_name: 'Liza',
      last_name: 'Rento',
      email: 'liza.rento@covered.com',
      phone: '31631788840',
      whatsapp: '31631788840',
      id: '3327',
      img: {
        s: 'https://i.pravatar.cc/200?u=janneke',
        m: 'https://i.pravatar.cc/400?u=janneke',
        l: 'https://i.pravatar.cc/800?u=janneke',
      },
    },
    booking: {
      name: 'Casa Pacifica',
      maps_url: 'https://goo.gl/maps/uMjtTBf3SA4XVioQ6',
      date_start: '1630508400',
      date_end: '1631102400',
      link: 'https://www.onevillasibiza.co.uk/',
    },
    deals: [
      {
        id: '11234',
        title: 'Rent a boat',
        text: 'Spend a day on board with Dutch captain Erik. On his boat are many extras such as paddle boards, snorkeling gear and an inflatable donut. Erik is also a former chef and can prepare the most delicious lunches for you. ',
        more_info:
          'https://www.onevillasibiza.co.uk/services/boat-rental-ibiza/monterrey-ibiza-rental/',
        thumb:
          'https://website.onevillasibiza.co.uk/wp-content/uploads/2020/07/monterrey-overview.jpg',
      },
      {
        id: '11288',
        title: 'Picknick Ibiza',
        text: 'Enjoy a stylish and memorable picnic experience with delicious food in the beautiful surroundings of the island.',
        more_info:
          'https://www.onevillasibiza.co.uk/services/private-chef/picknick-ibiza/',
        thumb:
          'https://website.onevillasibiza.co.uk/wp-content/uploads/2021/06/picknick.jpg',
      },
      {
        id: '11254',
        title: 'Car rental Ibiza',
        text: 'Our cars are immediately available at the airport and are fully insured. Not always the cheapest but you get the best service in return (and no surprises!)',
        more_info: 'https://www.onevillasibiza.co.uk/car-rental/',
        thumb:
          'https://website.onevillasibiza.co.uk/wp-content/uploads/2020/02/auto-verhuur-ibiza-1.jpg',
      },
    ],
  }

  res.status(200).json(data)
}
