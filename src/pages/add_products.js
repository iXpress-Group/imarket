import React, {Component} from 'react';
import axios from 'axios';
import '../css/pages/add_product.css';
import Header from '../components/header';
import Footer from '../components/footer';

class AddProduct extends Component {

    state = {
        check: true,
        category: '',
        name: '',
        description: '',
        image: null,
        image_alt: null,
        former_price: '',
        discount: '',
        price: '',
        productTrackingNo: '',
        List: [],
        catsList: []
    };


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };
    handleCatChange = (e) => {
        this.setState({
            [e.target.id]: e.target.selectedIndex + 1
        })
    };

    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };
    handlealtImageChange = (e) => {
        this.setState({
            image_alt: e.target.files[0]
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state + 'bullshit');
        let form_data = new FormData();
        form_data.append('category', this.state.category);
        form_data.append('name', this.state.name);
        form_data.append('description', this.state.description);
        form_data.append('image', this.state.image);
        form_data.append('image_alt', this.state.image_alt);
        form_data.append('former_price', this.state.former_price);
        form_data.append('discount', this.state.discount);
        form_data.append('price', this.state.price);
        form_data.append('productTrackingNo', this.state.productTrackingNo);

        let url = 'https://benedict1.pythonanywhere.com/api/products/';
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res.data);
                this.setState({
                    category: '',
                    name: '',
                    description: '',
                    image: null,
                    image_alt: null,
                    former_price: '',
                    discount: '',
                    price: '',
                    productTrackingNo: '',
                });
            })
            .catch(err => console.log(err))
    };

    getCats = () => {
        axios
            .get("https://benedict1.pythonanywhere.com/api/categories/")
            .then(res => this.setState({catsList: res.data, check: false}))
            .catch(err => console.log(err));
    };

    renderTabList = () => {
        return (
            <div className="my-5 tab-list">

            </div>
        );
    };

    renderCats = () => {
        const {viewCompleted} = this.state;
        const newItems = this.state.catsList.filter(
            item => item.completed === viewCompleted
        );
        return newItems.map(item => (
            <option key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name}
            </option>
        ));
    };

    render() {
        return (
            <div className="AddProduct">
                <Header/>
                <h1>Add a Product</h1>
                <div className='formcontainer'>
                    <form className='w3-container' onSubmit={this.handleSubmit}>
                        <div className="w3-row admin_row">
                            <div className='w3-col s6 m6 l6'>
                                <div className="admin_col1">
                                    <p>
                                        <label htmlFor="category">Product Category: </label>
                                        <select className='w3-input' name="category" id="category"
                                                onChange={this.handleCatChange}
                                                required>
                                            {this.state.check ? this.getCats() : null}
                                            {this.renderTabList()}
                                            {this.renderCats()}
                                        </select>
                                    </p>
                                    <p>
                                        <label htmlFor="name">Product Name </label>
                                        <input className='w3-input' type="text" placeholder='Name' id='name'
                                               value={this.state.name}
                                               onChange={this.handleChange} required/>

                                    </p>
                                    <p>
                                        <label htmlFor="description">Product Description: </label>
                                        <textarea className='w3-input' placeholder='Description'
                                               id='description'
                                               value={this.state.description}
                                               onChange={this.handleChange} required/>

                                    </p>
                                    <p>
                                        <label htmlFor="image">Product Image: </label>
                                        <input className='w3-input' type="file"
                                               id="image"
                                               accept="image/png, image/jpeg, image/jpg" onChange={this.handleImageChange}
                                               required/>
                                    </p>
                                    <p>
                                        <label htmlFor="image_alt">Product Image2: </label>
                                        <input className='w3-input' type="file"
                                               id="image_alt"
                                               accept="image/png, image/jpeg, image/jpg" onChange={this.handlealtImageChange}
                                               required/>
                                    </p>
                                </div>
                            </div>
                            <div className='w3-col s6 m6 l6'>
                                <div className="admin_col2">
                                    <p>
                                        <label htmlFor="former_price">Undiscounted Price: </label>
                                        <input className='w3-input' type="text" placeholder='Former_price'
                                               id='former_price'
                                               value={this.state.former_price}
                                               onChange={this.handleChange} required/>

                                    </p>
                                    <p>
                                        <label htmlFor="discount">Discount on Product: </label>
                                        <input className='w3-input' type="text" placeholder='Discount %' id='discount'
                                               value={this.state.discount}
                                               onChange={this.handleChange} required/>

                                    </p>
                                    <p>
                                        <label htmlFor="price">Selling Price: </label>
                                        <input className='w3-input' type="text" placeholder='Selling Price' id='price'
                                               value={this.state.price}
                                               onChange={this.handleChange} required/>

                                    </p>
                                    <p>
                                        <label htmlFor="productTrackingNo">Product Tracking No.: </label>
                                        <input className='w3-input' type="text" placeholder='Product Tracking No.'
                                               id='productTrackingNo'
                                               value={this.state.productTrackingNo}
                                               onChange={this.handleChange} required/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="adminsubmitbutton">
                            <input type="submit" value='Add Product'/>
                        </div>

                    </form>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AddProduct;
