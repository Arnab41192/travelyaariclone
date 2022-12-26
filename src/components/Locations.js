import React from 'react'

const Locations = () => {
  return (
    <div className='p-4'>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <i className="fa fa-location-arrow fa-4x text-teal"></i>
                            <p>Pick Location</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quasi neque reiciendis eligendi in cumque!</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <i className="fa fa-building fa-4x text-teal"></i>
                            <p>Shop and Travel</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quasi neque reiciendis eligendi in cumque!</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body">
                            <i className="fa fa-plane-departure fa-4x text-teal"></i>
                            <p>Fly Cheap</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quasi neque reiciendis eligendi in cumque!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Locations