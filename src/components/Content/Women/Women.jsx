import React from 'react'

function Women() {
    return (
        <div className="d-flex justify-content-center">
            <div className="row">
                <div className="row bg-success">
                    <div className="col">
                        <button  type="button" className="btn btn-success">Hide filters</button>
                        <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    </div>
                   
                   
                </div>
                <div className="col bg-info" >
                    Фільтр
                </div>
                <div className="col bg-secondary" >
                    Контент
                </div>
            </div>

        </div>
    )
}

export default Women
