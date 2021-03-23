import React from 'react';
import FRIENDS_DATA from './detailsdata'
import Items from '../../components/Items/Items.components'

class DetailsPage extends React.Component {
 constructor(props) {
     super(props);
    
     this.state = {

        collections: FRIENDS_DATA[this.props.match.params.id].details_sections
     }
 }
 render() {
     const {collections} = this.state;
     return (<div className="detailspage">
         {
             collections.map(({id,title,imageUrl})=>(
                 <Items key={id} title={title} imageUrl={imageUrl}></Items>
             ))
         }
     </div>)
 }
};
export default DetailsPage;