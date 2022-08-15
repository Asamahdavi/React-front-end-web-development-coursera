import React , {useState} from 'react'
import { Media, NavItem } from 'reactstrap';
import data from "../data/dish.json"
const MenuComponent =({})=>{
   const [dish,setDish]= useState(data)
    const menu = dish.map((item)=>
<>
<div key={item.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={item.image} alt={item.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{item.name}</Media>
                    <p>{item.description}</p>
                  </Media>
                </Media>
              </div>
</>
    );

    return(
        <>
        <div className='container'>
            <div className='row'>
                <Media list>
                    {menu}
                    </Media>
            </div>
         </div>
        </>
    )
}
export default MenuComponent;