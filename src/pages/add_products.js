import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/pages/add_product.css';


class AddProduct extends Component {
    render() {
        return (
            <div className='NewProduct'>
                <Header/>
                <div className='addproductContainer'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid fugit sint tempora. Ab
                        accusantium dicta, dignissimos doloribus eos illo magni minus, natus nobis rerum sed soluta sunt
                        tenetur totam vitae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores
                        beatae consequatur deleniti deserunt dolorum harum id ipsam nobis numquam omnis placeat
                        praesentium quas quia, recusandae rerum soluta vel veniam.</p>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AddProduct;