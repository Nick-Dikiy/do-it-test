import React, { Component } from 'react';
import SimpleMap from '../SimpleMap'
import axios from 'axios';
import {connect} from 'react-redux';
import {save, load, select,clearMarkers} from '../../actions/mapActions';

const items = [
    {
        type: "Ресторан",
        coordinates: [46.43116150659959, 30.763145685195926]
    },

    {
        type: "Школа",
        coordinates: [46.43298793931038, 30.72833061218262]
    },

    {
        type: "Аптека",
        coordinates: [46.429893319949116, 30.724173188209537]
    },

    {
        type: "Банк",
        coordinates: [46.44070708407118, 30.69787681102753]
    },

];

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            markers: [],
            value: 'disabled'
        };
    }

    saveMarkers =() =>{
            if (this.props.mapReducer.markers !== '' ){
                let markers = this.props.mapReducer;

                const token = localStorage.getItem('token');

                if ( token != null ) {

                    axios.interceptors.request.use(function (config) {
                        config.headers.Authorization = token;
                        return config;
                    },
                    function (err) {
                        return Promise.reject(err);
                    });
                    this.props.save(markers.markers);
                    axios.post('http://localhost:3000/saveMarkers', markers)
                }else{
                    this.props.history.push('./login')
                }

            }else{
                console.log('markers is empty')
            }
    };

    showMarkers =() =>{

        const token = localStorage.getItem('token');

        if ( token != null ) {

            axios.interceptors.request.use(function (config) {
                    config.headers.Authorization = token;
                    return config;
                },
                function (err) {
                    return Promise.reject(err);
                });

            axios.get('http://localhost:3000/showMarkers')
                .then(res =>{
                        let markers = res.data.markers;
                    this.setState({
                        markers: markers
                    })
                        this.props.load(markers)
                })
                .catch(err => {
                    console.log(err)
                })
        }else{
            this.props.history.push('./login')
        }
    };

    handleChange = (e) => {

        var elements = document.getElementsByClassName('dg-customization__marker');

        for(let i=0; i<elements.length; i++){
            if (elements[i].hasAttribute("id")){
                continue;
            }else{
                elements[i].parentNode.removeChild(elements[i]);
            }
        }

        this.props.select(e.target.value);
        let markers = [];
        let k=0;
        for (let i in items){
            if (items[i].type === e.target.value){
                markers[k] = items[i].coordinates;
                k++;
            }
        }
        this.setState({
            markers: markers,
            value: e.target.value
        });
        this.props.load(markers)
    };

    render(){

        return (
            <div id="main-page">
                <div className="container">
                    <div className="btn" onClick={this.showMarkers}>Show markers</div>

                    <select className="select" value={this.state.value} onChange={this.handleChange}>
                        <option disabled value="disabled">Type of objects</option>
                        <option value="Аптека">Pharmacies</option>
                        <option value="Школа">Schools</option>
                        <option value="Ресторан">Restaurants</option>
                        <option value="Банк">Banks</option>
                    </select>

                    <div className="btn" onClick={this.saveMarkers}>Save markers</div>
                </div>

                <SimpleMap />

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        mapReducer: state.mapReducer,
        authReducer: state.authReducer
    }
}

export default connect(mapStateToProps, {save, load, select, clearMarkers})(Main);