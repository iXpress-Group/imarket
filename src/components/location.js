import React from "react";
import { geolocated } from "react-geolocated";
// const distance = require('google-distance');
// distance.get(
//     {
//         index: 1,
//         origin: '37.772886,-122.423771',
//         destination: '37.871601,-122.269104'
//     },
//     function(err, data) {
//         if (err) return console.log(err);
//         console.log(data);
//     });
const distance = require('google-distance-matrix');

const origins = ['San Francisco CA'];
const destinations = ['New York NY', '41.8337329,-87.7321554'];

distance.matrix(origins, destinations, function (err, distances) {
    if (!err)
        console.log(distances);
});
class Demo extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <table>
                <tbody>
                <tr>
                    <td>latitude</td>
                    <td>{this.props.coords.latitude}</td>
                </tr>
                <tr>
                    <td>longitude</td>
                    <td>{this.props.coords.longitude}</td>
                </tr>
                </tbody>
            </table>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(Demo);