import React from 'react'
import '../styles/Popularplaces.css'

const PopularPlaces = () => {
  return (
    <div className='p-3'>
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Popular Places</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, magni?</p>
                </div>
            </div>


            <div className="row">

                <div className="col-md-4">
                    <div className="card">
                        <img src={require('../images/card_1.jpg')} alt="" className="img-fluid" />
                        <div className="card-body">
                            <h3 className="card-title">Munnar, Kerela</h3>
                            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellat obcaecati eaque odit, laudantium omnis deserunt dignissimos quia sunt dolorum ad veritatis fugit alias eius modi optio atque ea nihil!</p>
                            <button className='btn btn-teal btn-sm'>Read More</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src={require('../images/card_2.jpg')} alt="" className="img-fluid" />
                        <div className="card-body">
                            <h3 className="card-title">Alappuza, Kerela</h3>
                            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellat obcaecati eaque odit, laudantium omnis deserunt dignissimos quia sunt dolorum ad veritatis fugit alias eius modi optio atque ea nihil!</p>
                            <button className='btn btn-teal btn-sm'>Read More</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src={require('../images/card_3.jpg')} alt="" className="img-fluid" />
                        <div className="card-body">
                            <h3 className="card-title">Pondicherry</h3>
                            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto repellat obcaecati eaque odit, laudantium omnis deserunt dignissimos quia sunt dolorum ad veritatis fugit alias eius modi optio atque ea nihil!</p>
                            <button className='btn btn-teal btn-sm'>Read More</button>
                        </div>
                    </div>
                </div>

            </div>


            <div className="row">
                <div className="col text-center">
                    <button className='btn btn-dark btn-lg mt-3'>
                       <i className="fa fa-play"></i> Start Booking
                        </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default PopularPlaces