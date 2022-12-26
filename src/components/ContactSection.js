import React from 'react'
import '../App.css'

export const ContactSection = () => {
  return (
    <div className='container p-3'>

        <div className="row">
            
            <div className="col-md-6">

                <div className="card bg-teal">
                    <div className="card-body bg-teal text-center text-white">

                        <i className="fa fa-envelope fa-4x">

                        </i>
                        <h2>Contact for booking</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum commodi necessitatibus dolore magni nobis quam, dicta ea ullam labore delectus voluptates, tempore aliquam illum eius temporibus ipsum natus possimus! Laboriosam magni, magnam impedit optio illo temporibus quo officiis tempora.</p>

                        <ul className="list-group text-start">
                            <li className="list-group-item">
                                <h3>Locations</h3>
                            </li>
                            <li className="list-group-item">
                                Travel Yaari
                            </li>
                            <li className="list-group-item">
                                Jubilee Hills
                            </li>
                            <li className="list-group-item">
                                Telangana India
                            </li>
                        </ul>

                    </div>
                </div>
            </div>




            <div className="col-md-6">
                <div className="card">
                   <div className="bg-teal p-3 text-white text-center">
                    <h3>Contact Us</h3>
                   </div>

                   <div className="card-body p-3">
                     <form>
                        <div className="form-group p-2">
                            <input type="text" className="form-control" placeholder='Name' />
                        </div>
                        <div className="form-group p-2">
                            <input type="email" className="form-control" placeholder='Email' />
                        </div>
                        <div className="form-group p-2">
                            <input type="number" className="form-control" placeholder='Mobile Nubmer' />
                        </div>
                        <div className="form-group p-2">
                            <input type="text" className="form-control" placeholder='Fav Destination' />
                        </div>
                        <div className="form-group p-2">
                            <textarea className='form-control' name="" id="" cols="30" rows="4" placeholder='Your destination'></textarea>
                        </div>
                     </form>
                   </div>

                </div>
            </div>
        </div>


    </div>
  )
}
