import React from 'react';

import Friends from '../friends/friends.components'
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [
        {
          title: 'Janique Costa',
          imageUrl: 'https://randomuser.me/api/portraits/med/men/42.jpg',
          id: 1,
        
        },
        {
          title: 'Khaled Børresen',
          imageUrl:'https://randomuser.me/api/portraits/med/men/25.jpg',
          id: 2,
        },
        {
          title: 'Maja Kristense',
          imageUrl:'https://randomuser.me/api/portraits/med/women/12.jpg',
          id: 3,
          
        },
        {
        title: 'Latife Çevik',
          id: 4,
          imageUrl:'https://randomuser.me/api/portraits/med/women/4.jpg'
      },
      
  {
  title: 'Sayenne Leendertse',
    id: 5,
    imageUrl: 'https://randomuser.me/api/portraits/med/women/20.jpg'
},
{
title: 'Niklas Hamalainen',
  id: 6,
  imageUrl: 'https://randomuser.me/api/portraits/med/women/53.jpg'
},
{
  title: 'Friedlinde Würfel',
    
    id: 7,
imageUrl:'https://randomuser.me/api/portraits/med/men/98.jpg'  },
{
title: 'Freja Madsen',
  
  id: 8,
imageUrl:'https://randomuser.me/api/portraits/med/men/14.jpg'
},
{
title: 'Florence Harris',
  id: 9,
imageUrl:'https://randomuser.me/api/portraits/med/women/35.jpg'
},
{
title: 'Monsieur Reto Chevalier',
  id: 10,
imageUrl:'https://randomuser.me/api/portraits/med/women/44.jpg'
},
{
  title: 'Stenan Dufour',
  imageUrl: 'https://st3.depositphotos.com/12985790/16875/i/600/depositphotos_168751754-stock-photo-man-buttoning-up-shirt.jpg',

    id: 11,
    
  },
{
title: 'Mohamed Santos',
imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCogB5Hd9JblmBc1a8vbNgkzdW5l6dvzV3Q&usqp=CAU',
  id: 12,
 
},
{
title: 'Jonathan Hansen',
  imageUrl: 'https://st3.depositphotos.com/10654668/14328/i/600/depositphotos_143284773-stock-photo-businessman-with-cup-of-coffee.jpg',
  id: 13,
 
},
{
  title: 'Henna Penner',
    imageUrl: 'https://us.123rf.com/450wm/vadymvdrobot/vadymvdrobot1903/vadymvdrobot190306154/119989030-portrait-of-a-beautiful-pensive-young-woman-casualy-dressed-standing-isolated-over-white-background.jpg?ver=6',
    id: 14,
 
  },

{
title: 'Linda Rogers',
  imageUrl: 'https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg',
  id: 15,
 
},
{
title: 'Miss Doreen Krull',
  
  id: 16,
  imageUrl: 'https://assets.entrepreneur.com/content/3x2/2000/20161214164224-GettyImages-533978993.jpeg'
},

{
title: 'Elke Wölk',
  id: 17,
imageUrl:'https://thumbs.dreamstime.com/b/close-up-portrait-rejoicing-surprised-asian-woman-glasses-happy-person-hear-great-awesome-news-realise-something-close-178164807.jpg'
},
{
title: 'Logan Hamilton',
  imageUrl: 'https://content.api.news/v3/images/bin/a6923adbc7bece73803221613f410782',
  id: 18,
  
},
{
  title: 'Ms Latif Naha',
    imageUrl: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_143919450_970647970450097_58844.jpg',
    id: 19,
    
  },
  {
    title: 'Anna Jørgensen',
      imageUrl: ' https://ak.picdn.net/shutterstock/videos/4634066/thumb/6.jpg',
      id: 20,
     
    }
       
      ]
    };
  }

  render()
  {
      return(
          <div className="container">
               <div className="row">
               {this.state.items.map(({ id,imageUrl,title }) => (
          <Friends  id={id} key={id} imageUrl={imageUrl} title={title} />
        ))}
              </div>
          </div>
      )
  }
}

export default Directory;
