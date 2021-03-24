import React from 'react';
import FRIENDS_DATA from './detailsdata'
import Items from '../../components/Items/Items.components'

class DetailsPage extends React.Component {


  
    constructor(props) {
     
        super(props);
      
        this.state = {
            collections: FRIENDS_DATA[this.props.match.params.id].details_section
        }
    
    }
    render()
    {
        const {collections} = this.state;
       
        return(  
        <div className="users" >    
       
            {
        collections.map(({id,name,gender,state,country,email,phone,age,city,occupation,father,mother,imageUrl})=>(
            <Items 
            key={id} 
            name={name} 
            gender= {gender}
            city={city}
            country={country}
            state={state} 
            email={email}
            phone={phone}
            age={age}
            occupation={occupation}
            father={father}
            mother={mother}
            imageUrl={imageUrl}>
           
                </Items>
                
               
        ))

           
            }   
        </div>
        )
    }
}
export default DetailsPage;