import React, { useState } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import firebase from "firebase";
import "./EditForm"
import "./Delete"
import $ from "jquery"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "./AuthContext"
import { Link, useHistory } from "react-router-dom"
import { debounce } from "throttle-debounce";

export default function Navbar() {
    var funct = 0;
    var totalRating = 0;
    var totalDifficulty = 0;
    var heroes = 0;
    var averageRating = 0;
    var averageDifficulty = 0;
    const [value, setValue] = useState('');
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }
    var top100Films = [
         
    ]
    const data_3 = [
        {
         name: '',
         courseCode_2: '',
         newdate: '',
         attendance: '',
         difficulty: '',
         grade: '',
         rating: '',
         retake: '',
         specifics: '',
         textbook: '',
         email: '',
         description: {},
         id: '',
        },
    ]
    const ref = firebase.database().ref('Professors');
    const ref_2 = firebase.database().ref('Locations');

    function getLocation() {
        if (funct === 0 && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
    } else if (funct === 1) {
        console.log("yeet");
    }}
    
    function showPosition(position) {
        funct = 1;
        var string = Math.round((position.coords.latitude + Number.EPSILON) * 10) / 10 + 
        ","    + Math.round((position.coords.longitude + Number.EPSILON) * 10) / 10
        ref_2.push(string);
        var new_string = "Your approximate current location is: " + string;
        $('#mn').replaceWith(new_string);
    }
    ref.on('value', gotData)
    function gotData(data) {
        var data_2 = data.val();
        var keys = Object.keys(data_2);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var name = data_2[k].firstName + " " + data_2[k].lastName;
            var obj = {}
            obj["name"] = name;
            obj["attendance"] = data_2[k].attendance;
            obj["courseCode_2"] = data_2[k].courseCode;
            obj["newdate"] = data_2[k].newdate;
            obj["difficulty"] = data_2[k].difficulty;
            obj["grade"] = data_2[k].grade;
            obj["rating"] = data_2[k].rating;
            obj["retake"] = data_2[k].retake;
            obj["specifics"] = data_2[k].specifics;
            obj["textbook"] = data_2[k].textbook;
            obj["description"] = data_2[k].description;
            obj["email"] = data_2[k].email;
            obj["id"] = k;
            data_3.push(obj)
            top100Films.push(name);
            let uniqueChars = [...new Set(top100Films)];
        top100Films = uniqueChars;
        }
    }

    function render(newValue) {
        var new_data = [];
        var erase_data = [];
        for (var i = 0; i < data_3.length; i++) {
            if (data_3[i].name === newValue) {
                new_data.push(data_3[i])
            }
        }

        if (new_data.length > 0) {
            let cards = $('<div class="hello columns is-multiline is-centered is-mobile" />');
            for (let i = 0; i < new_data.length; i++) {
                    cards.append(renderHeroCard(new_data[i]));
                    if (i === new_data.length - 1) {
                        $("#r").replaceWith(`<div id = "r" class = "insane"><p class="avg">Average Rating: ${averageRating}/5</p></div>`)
                        $("#h").replaceWith(`<div id = "h" class = "insane2"><p class="avg">Average Difficulty: ${averageDifficulty}/5</p></div>`)
                    }
            }
        
            // Append the hero cards to the $root element
            
            $(".hello").addClass('container hero-body').replaceWith(cards);
        }
     new_data = erase_data;
    }
    
    const renderHeroCard = function(hero) {
    
        totalRating += parseInt(hero.rating);
        totalDifficulty += parseInt(hero.difficulty);
        heroes += 1;
        averageRating = totalRating / heroes;
        averageDifficulty = totalDifficulty / heroes;
        var hero_qualities = "";
        if (hero.description.caring !== "") {
            hero_qualities += "Caring        "}
        if (hero.description.engage !== "") {
            hero_qualities += "Engaging        "}
        if (hero.description.fail !== "") {
            hero_qualities += "Attend or Fail        "}
        if (hero.description.few !== "") {
            hero_qualities += "Few Grades        "}
        if (hero.description.heavy !== "") {
            hero_qualities += "Paper Heavy        "}
        if (hero.description.respect !== "") {
            hero_qualities += "Respectful        "}
        if (hero.email === currentUser.email) {
            return (`
            <div class="wrapper">
        <div class="main_card">
            <div class="card_left">
                <div class="card_datails">
                    <h1>Name: ${hero.name}</h1>
                    <div class="card_cat">
                        <div class="rankings">
                            <div class="quality">
                                Quality:
                                <p class="PG">${hero.rating}</p>
                            </div>
                            <div class="difficulty">
                                Difficulty:
                                <p class="PG">${hero.difficulty}</p>
                            </div>
                        </div>
                        <div class="content">
                            <div class="codeTime">
                                <p class="genre">Course Code: ${hero.courseCode_2}</p>
                                <p class = "year">Date: ${hero.newdate}</p>
                            </div>
                            <div class="qualities">
                                <p class="year">Attendance Required: ${hero.attendance}</p>
                                <p class="time">Textbook needed? ${hero.textbook}</p>
                                <p class = "year">Would Retake? ${hero.retake}</p>
                                <p class="time">Grade Received: ${hero.grade}</p>
                            </div>
                            <div class="body">
                                <p class="disc">Description: ${hero.specifics}</p>
                                <p class = "year">Qualities: ${hero_qualities}</p>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <button class = "buttons" id = "${hero.id}" onClick=${() => {
                firebase.database().ref('Professors/' + hero.id).remove();
                document.getElementById(hero.id).parentNode.remove();
            }} >Delete</button>
        </div>`)
    }
        return `<div class="wrapper">
        <div class="main_card">
            <div class="card_left">
                <div class="card_datails">
                    <h1>Name: ${hero.name}</h1>
                    <div class="card_cat">
                        <div class="rankings">
                            <div class="quality">
                                Quality:
                                <p class="PG">${hero.rating}</p>
                            </div>
                            <div class="difficulty">
                                Difficulty:
                                <p class="PG">${hero.difficulty}</p>
                            </div>
                        </div>
                        <div class="content">
                            <div class="codeTime">
                                <p class="genre">Course Code: ${hero.courseCode_2}</p>
                                <p class = "year">Date: ${hero.newdate}</p>
                            </div>
                            <div class="qualities">
                                <p class="year">Attendance Required: ${hero.attendance}</p>
                                <p class="time">Textbook needed? ${hero.textbook}</p>
                                <p class = "year">Would Retake? ${hero.retake}</p>
                                <p class="time">Grade Received: ${hero.grade}</p>
                            </div>
                            <div class="body">
                                <p class="disc">Description: ${hero.specifics}</p>
                                <p class = "year">Qualities: ${hero_qualities}</p>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        </div>`
};

        

        return (
            
            <div>
            <nav className="NavbarItems">
                <h2 className="nav-bar-logo">RateMyProfessorUNC<i className="fab fa-react"></i></h2>
                <p className="description">By UNC students, <br></br>For UNC students.<i className="fab fa-react"></i></p>
                <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    debounce(500, setValue(newValue), render(newValue)) 
                    

                }}
    id=""
    options={top100Films}
    getOptionLabel={(option) => option}
    style={{ width: 300, backgroundColor: "white"}}
    renderInput={(params) => <TextField {...params} placeholder = "Search professors here" variant="outlined" />}
/>
<div>
</div>
                <div className="menu-icon" >
                </div>
                <ul>             
                        <a className={MenuItems[1].cName} href={MenuItems[1].url}>
                            {MenuItems[1].title}</a>                
                </ul>
            </nav>
            <div id = "r"></div>
            <div id = "h"></div>
            <div class = "hello">
                <h1>Hit the X in the Search Bar to begin!</h1>
            </div>
            <>
            <Card id = "m">
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <Link to="/update-profile" className="btn btn-secondary w-100 mt-3">
                        Update Profile
                    </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={getLocation}>
                    Get Location
                </Button>
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
                <div id = "mn"></div>
            </div>
        </>
            </div>
        );
        }
