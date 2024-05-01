import React, { createRef } from 'react';
import { Col, Row, Button, Image } from "react-bootstrap";
import { MapContainer, Marker, TileLayer, Popup, GeoJSON } from "react-leaflet";
import './map.scss'
import nyc from "../assets/nyc-map.json"
import PropTypes from 'prop-types'
import { Icon } from 'leaflet/src/layer/marker'
import { restaurantsData } from '../assets/resturants.js'
import bronxB from "../assets/br.png";
import brooklynB from "../assets/brooklyn.png";
import manhattanB from "../assets/manhattan.png";
import queensB from "../assets/queens.png";
import statenB from "../assets/staten.png";
import L from 'leaflet';
import ModalDonate from './modal-donate';
import { Chart } from "react-google-charts"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import ModalRestaurantPopup from "./modal-restaurant-popup";

var RestaurantLocations = restaurantsData;
var bronx, manhattan, queens, statenIsland, brooklyn, eventI;

if (typeof window !== 'undefined') {
    bronx = new Icon({
        iconUrl: bronxB,
        iconRetinaUrl: bronxB,
        iconSize: [65, 12]
    });
    manhattan = new Icon({
        iconUrl: manhattanB,
        iconRetinaUrl: manhattanB,
        iconSize: [70, 12]
    });
    brooklyn = new Icon({
        iconUrl: brooklynB,
        iconRetinaUrl: brooklynB,
        iconSize: [65, 12]
    });
    queens = new Icon({
        iconUrl: queensB,
        iconRetinaUrl: queensB,
        iconSize: [48, 12]
    });
    statenIsland = new Icon({
        iconUrl: statenB,
        iconRetinaUrl: statenB,
        iconSize: [44, 25]
    });
    eventI = new Icon({
        iconUrl: statenB,
        iconRetinaUrl: statenB,
        iconSize: [45, 45]
    });
}


class NewMap extends React.Component {
    constructor(props) {
        super(props)
        const mapRef = createRef();
        let filtered = nyc.features.filter(location => {
            return location.properties.name === 'Manhattan';
        })
        this.setState({ boroughFilteredStats: filtered })
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.state = {
            RestaurantFilteredLocations: RestaurantLocations,
            boroughFilteredStats: filtered,
            showModal: false,
            // show: false
        }
        // console.log(this.state.RestaurantFilteredLocations)

    }
    static propTypes = {
        /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
        position: PropTypes.array,
        /** Initial zoom level for the map (default 13) **/
        zoom: PropTypes.number,
        /** If set, will display a marker, which when clicked will display this text **/
        markerText: PropTypes.string
    }

    static defaultProps = {
        position: [40.754, -74.006],
        zoom: 13,
        markerText: ""
    }

    getIcon = (icon) => {
        const getIconUrl = require("../assets/mtam-page/" + icon + ".png")
        console.log(getIconUrl);
        return new Icon({
            iconUrl: getIconUrl,
            iconRetinaUrl: getIconUrl,
            iconSize: [40, 40],
            popupAnchor: [-0, -0]
        });
    }
    getImage = (image) => {
        const getImageUrl = require("../assets/restaurants/" + image + ".jpeg")
        return getImageUrl;
    }

    onEachBorough = (borough, layer) => {
        console.log(borough.properties.rate);
        let color;
        layer.feature.properties.rate > 17 ? color = '#a83b3b' :
            layer.feature.properties.rate > 13 ? color = '#d46d6d' :
                layer.feature.properties.rate > 9 ? color = '#e4a0a0' :
                    layer.feature.properties.rate > 5 ? color = '#f4cbcb' :
                        layer.feature.properties.rate > 0 ? color = '#fff0f0' :
                            color = '#000408';
        layer.options.fillColor = color;
        layer.on({
            mouseover: this.highlightFeature.bind(this),
            mouseout: this.resetHighlight.bind(this),
            // click: this.filterOnMapSelect.bind(this, borough)
            click: (event) => {

                const map = this.mapRef.current.leafletElement;
                // map.fitBounds(event.target._bounds, { padding: [90, 180] });
                this.filterByBorough((borough.properties.name));
                event.target.setStyle({
                    color: "#192534",
                    fillColor: "#192534",
                    opacity: 0.6
                })
            },
        });
    };


    filterOnMapSelect(event, borough) {

        const map = this.mapRef.current.leafletElement;
        // map.fitBounds(event.target._bounds, { padding: [90, 180] });
        this.filterByBorough((borough.properties.name));
        event.target.setStyle({
            color: "#192534",
            fillColor: "#192534",
            opacity: 0.6
        })
    }

    highlightFeature(e) {
        var layer = e.target;
        console.log(layer.feature); //layer.feature.properties.name
        layer.setStyle({
            color: "#14539c",
            fillColor: "#14539c",
            opacity: 0.6,
            weight: 1.5

        })
        let filtered = nyc.features.filter(location => {
            return location.properties.name === layer.feature.properties.name;
        })
        this.setState({ boroughFilteredStats: filtered })
    };
    resetHighlight(e) {
        var layer = e.target;
        let color;
        layer.feature.properties.rate > 17 ? color = '#a83b3b' :
            layer.feature.properties.rate > 13 ? color = '#d46d6d' :
                layer.feature.properties.rate > 9 ? color = '#e4a0a0' :
                    layer.feature.properties.rate > 5 ? color = '#f4cbcb' :
                        layer.feature.properties.rate > 0 ? color = '#fff0f0' :
                            color = '#000408';
        layer.setStyle({
            fillColor: color,
            color: color,
            opacity: 0.02
        })
    };

    mapRef = createRef();
    markerRef = createRef();

    filterByBorough = (borough) => {
        var filtered = RestaurantLocations.filter(location => {
            return location.borough === borough;
        })
        this.setState({ RestaurantFilteredLocations: filtered })
    }

    handleOnSearch = (searchInput, results) => {
        if (!searchInput.trim()) {
            console.log('EMPTY');
        }
        var filtered = RestaurantLocations.filter(location => {
            return location.name.toLowerCase().includes(searchInput.toLowerCase());
        })
        console.log(filtered)
        this.setState({ RestaurantFilteredLocations: filtered })

    }

    handleOnSelect = (item) => {
        var filtered = RestaurantLocations.filter(location => {
            return location.name.toLowerCase().includes(item.name.toLowerCase());
        })
        console.log(item)
        this.setState({ RestaurantFilteredLocations: filtered })
    }

    clearSearch = () => {
        this.setState({ RestaurantFilteredLocations: RestaurantLocations })
        const map = this.mapRef.current.leafletElement;
        map.setView([40.750, -73.960], 11)
    }

    boroughStyle = {
        opacity: 0.02,
        fillOpacity: 0.5
    };
    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }



    zoomToMarker = center => e => {
        const map = this.mapRef.current.leafletElement;
        map.setView(center, 17)
        let r = 30;
        var circle = L.circle(center, {
            color: '#39ff14',
            fillColor: '#39ff14',
            opacity: 0.2,
            fillOpacity: 0.2,
            radius: r
        }).addTo(map);

        setTimeout(function () {
            circle.setRadius(150);
        }, 2000);
        setTimeout(function () {
            circle.remove();
        }, 300);
    }


    markerClicked = name => {
        // alert(name)
        // console.log("clicked" + name);
        let filtered = RestaurantLocations.filter(location => {
            return location.name === name;
        })
        this.setState({ RestaurantFilteredLocations: filtered })
    }

    render() {
        return (

            <div>
                <Row>
                    <Col sm={12} md={12}>
                        <Row className='m-0'>
                            <Col sm={12} md={9} className="map-container" style={{overflow:"hidden"}}>
                                {this.state.boroughFilteredStats?.map((stat) => (
                                    <div className="stats" >
                                        <Row className="stats-bg-md" style={{ backgroundColor:"#eef1f1"}}>
                                            <Col sm={4} md={5} className="stats-borough" style={{marginLeft:"5px"}}>
                                                <div className="stats-borough-txt">
                                                    <Row className='stats-div'>
                                                        <Col xs={6} sm={6} md={6}>
                                                            <h3>{stat.properties.name}</h3>
                                                        </Col>
                                                        <Col xs={6} sm={6} md={6}>
                                                            <ModalDonate campaign={stat.properties.campaign} />
                                                        </Col>
                                                    </Row>
                                                    <p>{stat.properties.description} </p>
                                                </div>
                                            </Col>
                                            <Col xs={0} sm={0} md={2} className="stat-col">
                                                <h6>FOOD INSECURE PEOPLE </h6>
                                                <h3> {(stat.properties.insecurePeople).toLocaleString()}</h3>
                                            </Col>
                                            <Col xs={0} sm={0} md={2} className="stat-col">
                                                <h6> FOOD INSECURITY RATE</h6>
                                                <h3 className="rate"> {(stat.properties.rate).toFixed(1)} %</h3>
                                                <Row className="chart-row">
                                                    <Chart
                                                        y={'-30px'}
                                                        width={'75px'}
                                                        height={'65px'}
                                                        className="chart"
                                                        chartType="PieChart"
                                                        loader={<div>Loading Chart</div>}
                                                        data={[
                                                            ['FOOD INSECURE PEOPLE', '%'],
                                                            ['Food Insecurity Rate (%)', parseInt(stat.properties.rate)],
                                                            ['', 100 - parseInt(stat.properties.rate)],
                                                        ]}
                                                        options={{
                                                            backgroundColor: 'transparent',
                                                            legend: 'none',
                                                            pieSliceText: 'none',
                                                            slices: {
                                                                1: { offset: 0.3, color:'#87b4a8'},
                                                                0: { color: '#192534' }
                                                            },
                                                        }}
                                                    />
                                                </Row>
                                            </Col>
                                            <Col sm={0} md={3} className="stat-col">
                                                <h6> not qualified for food assistance programs</h6>
                                                <h3> {(stat.properties.notQualifiedP).toFixed(1)} %</h3>
                                                <h3> {(stat.properties.notQualified).toLocaleString()} </h3>
                                                <p className="stat-attribution">Source: Feeding America</p>
                                            </Col>
                                        </Row>

                                        <Row className="rates-row">
                                            <Col xs={6} sm={6} md={2} className="rates">
                                                <p>Food Insecurity Rates</p>
                                            </Col>
                                            <Col xs={6} sm={6} md={2} className="colorCoding1 colorCoding rates">
                                                <p>0-5%</p>
                                            </Col>
                                            <Col xs={6} sm={6} md={2} className="colorCoding2 colorCoding rates">
                                                <p>5.1-9%</p>
                                            </Col>
                                            <Col xs={6} sm={6} md={2} className="colorCoding3 colorCoding rates">
                                                <p>9.1-13%</p>
                                            </Col>
                                            <Col xs={6} sm={6} md={2} className="colorCoding4 colorCoding rates">
                                                <p>13.1-17%</p>
                                            </Col>
                                            <Col xs={6} sm={6} md={2} className="colorCoding5 colorCoding rates">
                                                <p>17.1%+</p>
                                            </Col>
                                        </Row>

                                        <Row className="stats-bg-sm">
                                            <Col sm={12} md={12} className="stats-borough">
                                                <div className="stats-borough-txt">
                                                    <Row>
                                                        <Col xs={6} sm={6} md={6}>
                                                            <h3>{stat.properties.name}</h3>
                                                        </Col>
                                                        <Col xs={6} sm={6} md={6}>
                                                            <ModalDonate campaign={stat.properties.campaign} />
                                                        </Col>
                                                    </Row>
                                                    <p>{stat.properties.description} </p>
                                                </div>
                                            </Col>

                                            <Col sm={12} md={12} className="stat-cols-sm">
                                                <Row className="stat-col">
                                                    <Col xs={6} sm={6}>
                                                        <Row>
                                                            <h6>FOOD INSECURE PEOPLE: </h6>
                                                            <h3> {(stat.properties.insecurePeople).toLocaleString()}</h3>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={6} sm={6}>
                                                        <Row>
                                                            <h6> INSECURITY RATE:</h6>
                                                            <h3 className="rate"> {(stat.properties.rate).toFixed(1)} %</h3>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row sm={0} md={3} className="stat-col">
                                                    <Col xs={6} sm={6}>
                                                        <Row>
                                                            <h6> not qualified for food assistance programs:</h6>
                                                            <h3> {(stat.properties.notQualified).toLocaleString()} </h3>
                                                        </Row>
                                                    </Col>
                                                    <Col xs={6} sm={6}>
                                                        <Row>
                                                            <h6> rate: </h6>
                                                            <h3> {(stat.properties.notQualifiedP).toFixed(1)} %</h3>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row sm={0} md={3} className="stat-col">
                                                    <p className="stat-attribution">Source: Feeding America</p>
                                                </Row>
                                                <Row className="rates-row-sm">
                                                    <Col xs={6} sm={2} md={2} className="rates">
                                                        <p>Insecurity Rates</p>
                                                    </Col>
                                                    <Col xs={6} sm={2} md={2} className="colorCoding1 colorCoding rates">
                                                        <p>0-5%</p>
                                                    </Col>
                                                    <Col xs={6} sm={2} md={2} className="colorCoding2 colorCoding rates">
                                                        <p>5.1-9%</p>
                                                    </Col>
                                                    <Col xs={6} sm={2} md={2} className="colorCoding3 colorCoding rates">
                                                        <p>9.1-13%</p>
                                                    </Col>
                                                    <Col xs={6} sm={2} md={2} className="colorCoding4 colorCoding rates">
                                                        <p>13.1-17%</p>
                                                    </Col>
                                                    <Col xs={6} sm={2} md={2} className="colorCoding5 colorCoding rates">
                                                        <p>17.1%+</p>
                                                    </Col>
                                                </Row>
                                            </Col>

                                        </Row>
                                    </div>
                                ))}
                                <MapContainer
                                    center={this.props.position}
                                    zoom={this.props.zoom}
                                    scrollWheelZoom={false}
                                    ref={this.mapRef}
                                    zoomControl={true}
                                    className="map map-md"

                                >
                                    <TileLayer
                                        url="https://api.mapbox.com/styles/v1/feedforward/ckqcuyoom1jgl17qmivqiqv86/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZmVlZGZvcndhcmQiLCJhIjoiY2txY3Y1ejBsMWFldzJwbGNpemRsdXd5eSJ9.PWwG0mwYQ6afcWAIaDVpKw"
                                        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
                                    />
                                    <GeoJSON
                                        attribution=""
                                        style={this.boroughStyle}
                                        data={nyc.features}
                                        onEachFeature={this.onEachBorough}
                                    />
                                    {RestaurantLocations.map((location, idx) => (
                                        <Marker position={location.position} icon={this.getIcon(location.icon)} eventHandlers={{
                                            click: (e) => {
                                                this.markerClicked(location.name)
                                            },
                                        }} ref={this.markerRef}>
                                        </Marker>
                                    ))}

                                    <Marker position={[40.84592536756352, -73.86393878682405]} icon={bronx} className="marker-borough"></Marker>
                                    <Marker position={[40.63897368841071, -73.95487897295396]} icon={brooklyn}></Marker>
                                    <Marker position={[40.72776309912239, -73.79680376639982]} icon={queens}></Marker>
                                    <Marker position={[40.77141823660509, -73.97196940607988]} icon={manhattan}></Marker>
                                    <Marker position={[40.60106191798163, -74.12056768206745]} icon={statenIsland} className="marker-borough"></Marker>
                                    {/* <Marker position={[40.72475471168662, -73.93660493116839]} icon={eventI}>
                                    <Popup>
                                        <h6><b>Illumination</b><br /> Light brought to life</h6>
                                        <Image src={brooklyn} className="marker-popup-img"></Image>
                                        <a href={"https://www.google.com/maps/place/Under+the+%E2%80%98K%E2%80%99+Bridge+Park/@40.7246449,-73.9387829,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25945a62f1361:0xdcc0b0841b0623c0!8m2!3d40.7246409!4d-73.9365942?hl=en&authuser=0"}>
                                            <p class="marker-popup-location">The Arm at Van Dam St, Meeker Ave,<br /> Brooklyn, NY, 11222</p></a>
                                        <p class="marker-popup-description">The event’s mission is to unite people of all ages through light-based installations and technological wonders.</p>
                                    </Popup>
                                </Marker> */}
                                </MapContainer>
                                <MapContainer center={[40.735, -73.935]} zoom={10.8} scrollWheelZoom={false} ref={this.mapRef} zoomControl={true} className="map map-sm">

                                    <TileLayer
                                        url="https://api.mapbox.com/styles/v1/feedforward/ckqcuyoom1jgl17qmivqiqv86/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZmVlZGZvcndhcmQiLCJhIjoiY2txY3Y1ejBsMWFldzJwbGNpemRsdXd5eSJ9.PWwG0mwYQ6afcWAIaDVpKw"
                                        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
                                    />
                                    <GeoJSON
                                        attribution=""
                                        style={this.boroughStyle}
                                        data={nyc.features}
                                        onEachFeature={this.onEachBorough}
                                    />
                                    {RestaurantLocations.map((location, idx) => (
                                        <Marker position={location.position} icon={this.getIcon(location.icon)} onClick={() => alert("clicked")} ref={this.markerRef}>
                                            <Popup>
                                                <div>
                                                    <h6>{location.name}</h6>
                                                    <p className="cuisine">Cuisine: {location.cuisine}</p>
                                                    <p id="rest-description">{location.description}</p>
                                                </div>
                                            </Popup>
                                        </Marker>
                                    ))}
                                    <Marker position={[40.84592536756352, -73.86393878682405]} icon={bronx} className="marker-borough"></Marker>
                                    <Marker position={[40.63897368841071, -73.95487897295396]} icon={brooklyn}></Marker>
                                    <Marker position={[40.72776309912239, -73.79680376639982]} icon={queens}></Marker>
                                    <Marker position={[40.77141823660509, -73.97196940607988]} icon={manhattan}></Marker>
                                    <Marker position={[40.60106191798163, -74.12056768206745]} icon={statenIsland} className="marker-borough"></Marker>
                                    <Marker position={[40.72475471168662, -73.93660493116839]} icon={eventI}>
                                        <Popup>
                                            <h6><b>Illumination</b><br /> Light brought to life</h6>
                                            <Image src={brooklyn} className="marker-popup-img"></Image>
                                            <a href={"https://www.google.com/maps/place/Under+the+%E2%80%98K%E2%80%99+Bridge+Park/@40.7246449,-73.9387829,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25945a62f1361:0xdcc0b0841b0623c0!8m2!3d40.7246409!4d-73.9365942?hl=en&authuser=0"}>
                                                <p class="marker-popup-location">The Arm at Van Dam St, Meeker Ave,<br /> Brooklyn, NY, 11222</p></a>
                                            <p class="marker-popup-description">The event’s mission is to unite people of all ages through light-based installations and technological wonders.</p>
                                        </Popup>
                                    </Marker>
                                </MapContainer>

                            </Col>

                            <Col sm={12} md={3} className="info-block">
                                <div className="info-search">
                                    <ReactSearchAutocomplete
                                        items={RestaurantLocations}
                                        onSearch={this.handleOnSearch}
                                        onSelect={this.handleOnSelect}
                                        placeholder={'Search'}
                                        fuseOptions={{
                                            minMatchCharLength: 2,
                                            shouldSort: false,
                                            threshold: 0.5,
                                            location: 0,
                                            distance: 100,
                                            maxPatternLength: 32,
                                            keys: ["name", "description"],
                                            resultStringKeyName: "name"
                                        }}
                                        styling={{
                                            height: "42px"
                                        }}
                                    />
                                </div>
                                <Row className="info-button-div">
                                    <Col xs={12} sm={12} md={12} className="col-standard">
                                        <h6>Food Providers</h6>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} className="col-standard">
                                        <Button className="btn-custom btn-custom-small" onClick={this.clearSearch}>show all</Button>
                                    </Col>
                                </Row>

                                <div className="info-restaurants">
                                    {this.state.RestaurantFilteredLocations.map((location) => (
                                        <div className="restBox" onClick={this.zoomToMarker(location.position)}>
                                            <img src={this.getImage(location.image)} alt="restaurant image" />
                                            <Row>
                                                <Col sm={0} md={12} className="rest-txt col-standard">
                                                    <h6>{location.name}</h6>
                                                    <p className="cuisine">Cuisine: {location.cuisine}</p>
                                                </Col>
                                            </Row>

                                            <p id="rest-description">{location.description}</p>
                                            <Row className="rest-btns d-flex justify-content-center w-100">

                                                <Col xs={6} sm={6} md={12} lg={12} xl={6} className="rest-btns-col col-standard donate-std">
                                                    <ModalDonate campaign={location.campaign} />
                                                </Col>

                                                <Col xs={6} sm={6} md={12} lg={12} xl={6} className="rest-btns-col learn-more">
                                                    <ModalRestaurantPopup
                                                        class={"restpopup"}
                                                        name={location.name}
                                                        addressL1={location.addressL1}
                                                        addressL2={location.addressL2}
                                                        cuisine={location.cuisine}
                                                        owner={location.owner}
                                                        q1={location.q1}
                                                        q2={location.q2}
                                                        q3={location.q3}
                                                        q4={location.q4}
                                                        fulldescription1={location.fulldescription1}
                                                        fulldescription2={location.fulldescription2}
                                                        fulldescription3={location.fulldescription3}
                                                        fulldescription4={location.fulldescription4}
                                                        website={location.website}
                                                        slides={location.slides}
                                                        quote={location.quote}
                                                        instagram={location.instagram}
                                                        campaign={location.campaign}
                                                        position={location.position}
                                                        icon={this.getIcon(location.icon)}
                                                        est={location.est}
                                                        googleMapSRC={location.googleMapSRC}
                                                        googleMapURL={location.googleMapURL}
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                    ))}
                                </div>
                            </Col>

                        </Row>

                    </Col>
                </Row>
            </div>
        );

    }
}
export default NewMap