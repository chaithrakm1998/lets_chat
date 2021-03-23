import React from 'react';

import Friends from '../friends/friends.components'
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Mr Janique Costa',
          imageUrl: 'https://randomuser.me/api/portraits/med/men/42.jpg',
          id: 1,
          linkUrl: ''
        },
        {
          title: 'Mr Khaled Borresen',
          imageUrl: 'https://randomuser.me/api/portraits/med/men/25.jpg',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'Miss Maja Kristensen',
          imageUrl: 'https://randomuser.me/api/portraits/med/women/12.jpg',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'Mrs Latife Cevik',
          imageUrl: 'https://randomuser.me/api/portraits/med/women/4.jpg',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'Mrs Sayenne Leendertse',
          imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg',
          id: 5,
          linkUrl: ''
        },
        {
            title: 'Mr Niklas Hamalainen',
            imageUrl: "https://randomuser.me/api/portraits/med/men/98.jpg",
            id: 6,
            linkUrl: ''
          },
          {
            title: 'Miss  Elke Wolk',
            imageUrl: "https://randomuser.me/api/portraits/med/women/47.jpg",
            id: 7,
            linkUrl: ''
          },
          {
            title: 'Mrs Friedlinde wurfel',
            imageUrl: "https://randomuser.me/api/portraits/med/women/62.jpg",
            id: 8,
            linkUrl: ''
          },
          {
            title: 'Mr Logan Hamilton',
            imageUrl: "https://randomuser.me/api/portraits/med/men/14.jpg",
            id: 9,
            linkUrl: ''
          },
          {
            title: 'Mrs Freja Madsen',
            imageUrl:"https://randomuser.me/api/portraits/med/women/35.jpg",
            id: 10,
            linkUrl: ''
          },
          {
            title: 'Mr Janique Costa',
            imageUrl: 'https://randomuser.me/api/portraits/med/men/42.jpg',
            id: 11,
            linkUrl: ''
          },
          {
            title: 'Mrs Anna jorgensen',
            imageUrl: "https://randomuser.me/api/portraits/med/women/44.jpg",
            id: 12,
            linkUrl: ''
          },
          {
            title: 'Miss Florence harris',
            imageUrl: "https://randomuser.me/api/portraits/med/women/15.jpg",
            id: 13,
            linkUrl: ''
          },
          {
            title: 'Ms Latif Naha',
            imageUrl: "https://randomuser.me/api/portraits/med/women/72.jpg",
            id: 14,
            linkUrl: ''
          },
          {
            title: 'Monsieur Reto Chevalier',
            imageUrl: "https://randomuser.me/api/portraits/med/men/65.jpg",
            id: 15,
            linkUrl: ''
          },
          {
              title: 'Mr mohamed santos',
              imageUrl: "https://randomuser.me/api/portraits/med/men/51.jpg",
              id: 16,
              linkUrl: ''
            },
            {
              title: 'Miss Doreen Krull',
              imageUrl: "https://randomuser.me/api/portraits/med/women/83.jpg",
              id: 17,
              linkUrl: ''
            },
            {
              title: 'Ms Stella Dufour',
              imageUrl: "https://randomuser.me/api/portraits/med/women/23.jpg",
              id: 18,
              linkUrl: ''
            },
            {
              title: 'Mr Jonathan Hansen',
              imageUrl: "https://randomuser.me/api/portraits/med/men/82.jpg",
              id: 19,
              linkUrl: ''
            },
            {
              title: 'Mr Henri Penner',
              imageUrl: "https://randomuser.me/api/portraits/med/men/73.jpg",
              id: 20,
              linkUrl: '20'
            }
      ]
    };
  }

  render()
  {
      return(
          <div className="container">
               <div className="row">
              {
                  
                  this.state.sections.map(({id,imageUrl,title,gender,Country}) =>(
                  <Friends key={id} id={id} imageUrl={imageUrl} title={title} gender={gender} Country={Country}/>
                  ) )
              }
              </div>
          </div>
      )
  }
}

export default Directory;
