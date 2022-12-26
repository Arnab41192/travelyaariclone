import React from 'react'

const PhotoGallery = () => {
  return (
    <div className='container p-3'>

        <div className="row p-2">
           
                <div className="col-md-3">
                    <img src={require('../images/gallery_1.jpg')} className="img-fluid" alt="" />
                </div>

                <div className="col-md-3">
                    <img src={require('../images/gallery_2.jpg')} className="img-fluid" alt="" />
                </div>

                <div className="col-md-3">
                    <img src={require('../images/gallery_3.jpg')} className="img-fluid"  alt="" />
                </div>

                <div className="col-md-3">
                    <img src={require('../images/gallery_4.jpg')} className="img-fluid" alt="" />
                </div>
         </div>


         <div className="row p-2">
           
           <div className="col-md-3">
               <img src={require('../images/gallery_5.jpg')} className="img-fluid" alt="" />
           </div>

           <div className="col-md-3">
               <img src={require('../images/gallery_6.jpg')} className="img-fluid" alt="" />
           </div>

           <div className="col-md-3">
               <img src={require('../images/gallery_7.jpg')} className="img-fluid"  alt="" />
           </div>

           <div className="col-md-3">
               <img src={require('../images/gallery_8.jpg')} className="img-fluid" alt="" />
           </div>
        </div>



       
    </div> 
  )
}

export default PhotoGallery