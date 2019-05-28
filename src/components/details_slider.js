import React, {Component} from 'react';
import '../css/pages/slider.css';

class DetailsSlider extends Component{
    render() {
        return(
            <div className='each-fade'>
                <img className='details-img' src={this.props.url1} alt=""/>
            </div>
        );
    }
}
export default DetailsSlider;