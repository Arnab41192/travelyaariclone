import React from "react";

const SearchSection = () => {
  return (
    <div className="bg-teal text-white p-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Search Your Destination.</h2>

            <p className="h6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              nisi quo voluptatum qui deserunt expedita.
            </p>

            <div className="row pt-4">
                <div className="col-md-4">
                    <form>
                        <div className="form-group">
                            <input type="search" className="form-control" />
                        </div>
                    </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
