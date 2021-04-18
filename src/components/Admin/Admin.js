import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import AddService from '../AddService/AddService';

const Admin = () => {
    return (
        <div className="d-flex justify-content-center mt-5 row">
            <div className="col-md-6">
                <h2 className="text-center">Add Service</h2>
                <AddService />
            </div>
            <div className="col-md-6">
                <h2 className="text-center">Add Product</h2>
                <AddProduct />
            </div>
        </div>
    );
};

export default Admin;