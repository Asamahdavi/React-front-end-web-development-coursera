import React, { useState }  from 'react'
import { Card,CardImg, CardText,CardBody,CardTitle } from 'reactstrap';

const DishdetailComponent =({selectedDish})=>{
const cm = selectedDish.comments




   
    return(
        <>
         <div className='row'> 
               {selectedDish ? <Card>
                <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card> : <div></div>}

            {
               selectedDish.comments ? <>
               <h4> Comments </h4>
                <div className='col-12 col-md-5 m-1'>
                
                <ul lassName='list-unstyled' >

                {selectedDish.comments.map((person)=>(
                <p key={person.id}>
                <br/>{person.comment}<br/><br/>
                --{person.author}, {`${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(person.date)))}`}
                </p>
              ))}
                    
                    
                </ul>

            </div>


               </> : <div> </div>
            }
            </div>
        </>
    )
}
export default DishdetailComponent