import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const UpdateProducts = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const url = `http://localhost:5000/allproducts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  //update change name
  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedfullProduct = {
      name: updatedName,
      price: product?.price,
      stock: product?.stock,
      description: product?.description,
      img: product?.img,
    };
    setProduct(updatedfullProduct);
  };
  const handlePriceChange = (e) => {
    const updatedPrice = e.target.value;
    const updatedfullProduct = {
      name: product?.name,
      price: updatedPrice,
      stock: product?.stock,
      description: product?.description,
      img: product?.img,
    };
    setProduct(updatedfullProduct);
  };
  const handleStockChange = (e) => {
    const updatedStock = e.target.value;
    const updatedfullProduct = {
      name: product?.name,
      price: product?.price,
      stock: updatedStock,
      description: product?.description,
      img: product?.img,
    };
    setProduct(updatedfullProduct);
  };
  const handleDescriptionChange = (e) => {
    const updatedDescription = e.target.value;
    const updatedfullProduct = {
      name: product?.name,
      price: product?.price,
      stock: product?.stock,
      description: updatedDescription,
      img: product?.img,
    };
    setProduct(updatedfullProduct);
  };
  const handleImageChange = (e) => {
    const updatedImage = e.target.value;
    const updatedfullProduct = {
      name: product?.name,
      price: product?.price,
      stock: product?.stock,
      description: product?.description,
      img: updatedImage,
    };
    setProduct(updatedfullProduct);
  };
  //setting changed
  const handleUpdateProduct = (e) => {
    const url = `http://localhost:5000/allproducts/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          alert('Hye!! your Product is updated Successfylly');
          history.push('/dashboard');
          setProduct({});
        }
      });

    e.preventDefault();
  };
  return (
    <div className='container px-5'>
      <div className='px-2 py-4 px-md-4 py-md-3 bg-white shadow rounded'>
        <div className='row pb-5'>
          <div className='col-md-6'>
            <p className='mt-2 fw-bold'>Update Product</p>
            <hr />

            <form className='mb-5' onSubmit={handleUpdateProduct}>
              <div className='form-floating mb-3'>
                <input
                  className='form-control'
                  onChange={handleNameChange}
                  value={product?.name || ''}
                  placeholder={'Name'}
                  required
                  maxLength='60'
                />
                <label>Product Name</label>
              </div>
              <div className='form-floating mb-3'>
                <input
                  className='form-control'
                  onChange={handlePriceChange}
                  value={product?.price || ''}
                  placeholder='Price'
                  required
                  type='number'
                />
                <label>Price</label>
              </div>
              <div className='form-floating mb-3'>
                <input
                  className='form-control'
                  onChange={handleStockChange}
                  value={product?.stock || ''}
                  placeholder='Stock'
                  required
                  // type='number'
                />
                <label>Stock</label>
              </div>

              <div className='form-floating mb-3'>
                <textarea
                  className='form-control'
                  onChange={handleDescriptionChange}
                  value={product?.description || ''}
                  placeholder='Description'
                  maxLength='500'
                  required
                />
                <label>Description</label>
              </div>

              <div className='form-floating mb-3'>
                <input
                  className='form-control'
                  onChange={handleImageChange}
                  value={product?.img || ''}
                  placeholder='Image'
                  required
                />
                <label>Product Image</label>
                {/* <p className='text-secondary'>
                <small>
                  * Copy any image url from internet and paste it here.
                  <br />
                  example: https://i.ibb.co/qJGVFzG/teeshirt6.jpg
                </small>
              </p> */}
              </div>

              <button
                type='submit'
                className='btn custom-black-btn'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                Update Product
              </button>
            </form>
          </div>
          <div className='col-md-6'>
            <p className='fw-bold'>Actual Product</p>
            <div className='card mb-3' style={{ maxWidth: 540 }}>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <img
                    src={product?.img}
                    className='img-fluid rounded-start'
                    alt='...'
                  />
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <p className='card-title fw-bold'>{product?.name}</p>
                    <p className='card-text'>$ {product?.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
