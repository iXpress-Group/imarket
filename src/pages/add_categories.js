import React, {Component} from 'react';
import axios from 'axios';
import '../css/pages/add_categories.css';
import Header from '../components/header';
import Footer from '../components/footer';

class AddCats extends Component {

    state = {
        check: true,
        name: '',
        slug: '',
        image: null,
        parent: '',
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
            [e.target.id]: e.target.selectedIndex
        })
    };

    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state + 'bullshit');
        let form_data = new FormData();
        form_data.append('name', this.state.name);
        form_data.append('slug', this.state.slug);
        form_data.append('parent', this.state.parent);
        form_data.append('image', this.state.image, this.state.image.name);

        let url = 'https://engineersticity.pythonanywhere.com/api/categories/';
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res.data);
                this.setState({
                    name: '',
                    slug: '',
                    image: null,
                    parent: ''
                });
            })
            .catch(err => console.log(err))
    };

    getCats = () => {
        axios
            .get("https://engineersticity.pythonanywhere.com/api/categories/")
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
            <div className="AddCategory">
                <Header/>
                <h1>Add a Category</h1>
                <div className='formcontainer'>
                    <form className='w3-container' onSubmit={this.handleSubmit}>
                        <div className="inner_container">
                            <div className='inner_inner_container'>
                                <p>
                                    <label htmlFor="name">Category Name </label>
                                    <input className='w3-input' type="text" placeholder='Name' id='name'
                                           value={this.state.name}
                                           onChange={this.handleChange} required/>

                                </p>
                                <p>
                                    <label htmlFor="slug">Category Slug: </label>
                                    <input className='w3-input' type="text" placeholder='Category Slug' id='slug'
                                           value={this.state.slug}
                                           onChange={this.handleChange} required/>

                                </p>
                                <p>
                                    <label htmlFor="parent">Parent Category: </label>
                                    <select className='w3-input' name="parent" id="parent"
                                            onChange={this.handleCatChange}
                                            required>
                                        <option value="none">This is a ROOT Category</option>
                                        {this.state.check ? this.getCats() : null}

                                        {this.renderTabList()}


                                        {this.renderCats()}
                                    </select>

                                </p>
                                <p>
                                    <label htmlFor="image">Category Image: </label>
                                    <input className='w3-input' type="file"
                                           id="image"
                                           accept="image/png, image/jpeg" onChange={this.handleImageChange} required/>
                                </p>
                            </div>
                        </div>
                        <div className="adminsubmitbuttoncat">
                            <input type="submit" value='Add Category'/>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AddCats;
