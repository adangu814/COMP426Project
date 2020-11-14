import firebase from "firebase";
import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import { useAuth } from "./AuthContext"

export default function EditForm() {
    const { currentUser } = useAuth()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [rating, setRating] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [retake, setRetake] = useState('');
    const [textbook, setTextbook] = useState('');
    const [attendance, setAttendance] = useState('');
    const [grade, setGrade] = useState('');
    const [specifics, setSpecifics] = useState('');
    const [respect, setRespect] = useState('');
    const [engage, setEngage] = useState('');
    const [caring, setCaring] = useState('');
    const [few, setFew] = useState('');
    const [heavy, setHeavy] = useState('');
    const [fail, setFail] = useState('');
    const handleOnChange = (e) => {
        setFirstName(e.target.value);
    }
    const handleOnChange_2 = (e) => {
        setLastName(e.target.value);
    }
    const handleOnChange_3 = (e) => {
        setCourseCode(e.target.value);
    }
    const handleOnChange_4 = (e) => {
        setRating(e.target.value);
    }
    const handleOnChange_5 = (e) => {
        setDifficulty(e.target.value);
    }
    const handleOnChange_6 = (e) => {
        setRetake(e.target.value);
    }
    const handleOnChange_7 = (e) => {
        setTextbook(e.target.value);
    }
    const handleOnChange_8 = (e) => {
        setAttendance(e.target.value);
    }
    const handleOnChange_9 = (e) => {
        setGrade(e.target.value);
    }
    const handleOnChange_11 = (e) => {
        setSpecifics(e.target.value);
    }
    const handleOnChange_12 = (e) => {
        setRespect(e.target.value);
    }
    const handleOnChange_13 = (e) => {
        setEngage(e.target.value);
    }
    const handleOnChange_14 = (e) => {
        setCaring(e.target.value);
    }
    const handleOnChange_15 = (e) => {
        setFew(e.target.value);
    }
    const handleOnChange_16 = (e) => {
        setHeavy(e.target.value);
    }
    const handleOnChange_17 = (e) => {
        setFail(e.target.value);
    }
    const history = useHistory();
    const createTodo = () => {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1;
        var day = dateObj.getUTCDate() - 1;
        var year = dateObj.getUTCFullYear();
        var newdate = month + "/" + day + "/" + year;
        var email = currentUser.email;
        const professorref = firebase.database().ref('Professors');
        const todo = {
            firstName,
            lastName,
            courseCode,
            rating,
            difficulty,
            retake,
            textbook,
            attendance,
            grade,
            description: { respect, engage, caring, few, heavy, fail },
            specifics,
            newdate,
            email,
        }
        professorref.push(todo);
        let path = `/`;
        history.push(path);
    }

    return (
        <div style={{ columnWidth: 600, backgroundColor: '#62C6F2' }}>
            <p style={{ textAlign: 'center', fontSize: 50 }}>Add an Entry here!</p>
            <div>
                <div style={{ height: 600, width: 800 }}>
                    <form>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <label>Professor's First Name:</label>
                                        <div>
                                            <input type="text" id="professorFirst1" class="professorFirst input" onChange={handleOnChange} name="professorFirst" required />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label for="professorLast1" class="label">Professor's Last Name:</label>
                                        <div class="control">
                                            <input type="text" id="professorLast1" class="professorLast input" onChange={handleOnChange_2} name="professorLast" required />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label for="courseCode" class="label">Course Code: </label>
                                        <div class="control">
                                            <input type="text" class="input" onChange={handleOnChange_3} id="courseCode" name="courseCode" required />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="profButtons field is-grouped is-grouped-right">
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <div class="rating">
                                    <h4 class="label">How would you rate them?</h4>
                                    <div class="ratingButtons">
                                        <input type="radio" style={{ marginRight: 27.75 }} onChange={handleOnChange_4} id="rating1" name="rating" value="1" required />
                                        <input type="radio" style={{ marginRight: 27.75 }} onChange={handleOnChange_4} id="rating2" name="rating" value="2" />
                                        <input type="radio" style={{ marginRight: 27.75 }} onChange={handleOnChange_4} id="rating3" name="rating" value="3" />
                                        <input type="radio" style={{ marginRight: 27.75 }} onChange={handleOnChange_4} id="rating4" name="rating" value="4" />
                                        <input type="radio" style={{ marginRight: 27.75 }} onChange={handleOnChange_4} id="rating5" name="rating" value="5" />
                                    </div>
                                    <div class="ratinglabels">
                                        <label for="rating1" style={{ marginRight: 30, fontSize: 20 }}>1</label>
                                        <label for="rating2" style={{ marginRight: 30, fontSize: 20 }}>2</label>
                                        <label for="rating3" style={{ marginRight: 30, fontSize: 20 }}>3</label>
                                        <label for="rating4" style={{ marginRight: 30, fontSize: 20 }}>4</label>
                                        <label for="rating5" style={{ marginRight: 30, fontSize: 20 }}>5</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <div class="diff">
                                    <h4 class="label">How difficult was the class?</h4>
                                    <div class="diffButtons">
                                        <input type="radio" style={{ marginRight: 27.75 }} onChange={handleOnChange_5} id="diff1" name="diff" value="1" required />
                                        <input type="radio" style={{ marginRight: 27.75 }} onChange={handleOnChange_5} id="diff2" name="diff" value="2" />
                                        <input type="radio" style={{ marginRight: 27.75 }} onChange={handleOnChange_5} id="diff3" name="diff" value="3" />
                                        <input type="radio" style={{ marginRight: 27.75 }} onChange={handleOnChange_5} id="diff4" name="diff" value="4" />
                                        <input type="radio" style={{ marginRight: 27.75 }} onChange={handleOnChange_5} id="diff5" name="diff" value="5" />
                                    </div>
                                    <div class="difflabels">
                                        <label for="diff1" style={{ marginRight: 30, fontSize: 20 }}>1</label>
                                        <label for="diff2" style={{ marginRight: 30, fontSize: 20 }}>2</label>
                                        <label for="diff3" style={{ marginRight: 30, fontSize: 20 }}>3</label>
                                        <label for="diff4" style={{ marginRight: 30, fontSize: 20 }}>4</label>
                                        <label for="diff5" style={{ marginRight: 30, fontSize: 20 }}>5</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <div class="retake">
                                    <h4 class="label">Would you take them again?</h4>
                                    <div class="retakeButtons">
                                        <input type="radio" style={{ marginLeft: 7, marginRight: 35 }} onChange={handleOnChange_6} id="retakeYes" name="retake" value="Yes" required />
                                        <input type="radio" style={{ marginLeft: 7, marginRight: 35 }} onChange={handleOnChange_6} id="retakeNo" name="retake" value="No" />
                                    </div>
                                    <div class="retakelabels">
                                        <label for="retakeYes" style={{ marginRight: 30, fontSize: 20 }}>Yes</label>
                                        <label for="retakeNo" style={{ marginRight: 30, fontSize: 20 }}>No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <div class="book">
                                    <h4 class="label">Did the course require a textbook? <em class="has-text-grey-dark">(Optional)</em></h4>
                                    <div class="bookButtons">
                                        <input type="radio" style={{ marginLeft: 7, marginRight: 35 }} onChange={handleOnChange_7} id="bookYes" name="book" value="Yes" />
                                        <input type="radio" style={{ marginLeft: 7, marginRight: 35 }} onChange={handleOnChange_7} id="bookNo" name="book" value="No" />
                                    </div>
                                    <div class="bookLabels">
                                        <label for="bookYes" style={{ marginRight: 30, fontSize: 20 }}>Yes</label>
                                        <label for="bookNo" style={{ marginRight: 30, fontSize: 20 }}>No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <div class="attend">
                                    <h4 class="label">Was attendance required? <em class="has-text-grey-dark">(Optional)</em></h4>
                                    <div class="attendButtons">
                                        <input type="radio" style={{ marginLeft: 7, marginRight: 35 }} onChange={handleOnChange_8} id="attendYes" name="attend" value="Yes" />
                                        <input type="radio" style={{ marginLeft: 7, marginRight: 35 }} onChange={handleOnChange_8} id="attendNo" name="attend" value="No" />
                                    </div>
                                    <div class="attendLabels">
                                        <label for="attendYes" style={{ marginRight: 30, fontSize: 20 }}>Yes</label>
                                        <label for="attendNo" style={{ marginRight: 30, fontSize: 20 }}>No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <div class="grade">
                                    <h4 class="label">What grade did you recieve? <em class="has-text-grey-dark">(Optional)</em></h4>
                                    <div class="control">
                                        <div class="select">
                                            <select name="grade" onChange={handleOnChange_9}>
                                                <option class="gradeA" value="A">A</option>
                                                <option class="gradeA-" value="A-">A-</option>
                                                <option class="gradeB+" value="B+">B+</option>
                                                <option class="gradeB" value="B">B</option>
                                                <option class="gradeB-" value="B-">B-</option>
                                                <option class="gradeC+" value="C+">C+</option>
                                                <option class="gradeC" value="C">C</option>
                                                <option class="gradeC-" value="C-">C-</option>
                                                <option class="gradeD+" value="D+">D+</option>
                                                <option class="gradeD" value="D">D</option>
                                                <option class="gradeD-" value="D-">D-</option>
                                                <option class="gradeF" value="F">F</option>
                                                <option class="gradeWithdrawal" value="Withdrawal">Withdrawal</option>
                                                <option class="gradePass/Fail" value="Pass/Fail">Pass/Fail</option>
                                                <option class="gradeIncomplete" value="Incomplete">Incomplete</option>
                                                <option class="gradeNotSure" value="NotSure">Not Sure Yet</option>
                                                <option class="gradePreferNotToAnswer" value="PreferNotToAnswer">Prefer Not To Answer</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <div class="attr">
                                    <h4 class="label">Which of these best describes the professor? <em class="has-text-grey-dark">(Optional)</em></h4>
                                    <label for="respect" style={{ marginRight: 10 }}>
                                        <input type="checkbox" class="attrCheckbox checkRespect" onChange={handleOnChange_12} id="respect" name="respect" value="Respect" />
                                Respectful
                            </label>
                                    <label for="engaging" style={{ marginRight: 10 }}>
                                        <input type="checkbox" class="attrCheckbox checkEngaging" onChange={handleOnChange_13} id="engaging" name="engaging" value="Engaging" />
                                Engaging
                            </label>
                                    <label for="caring" style={{ marginRight: 10 }}>
                                        <input type="checkbox" class="attrCheckbox checkCaring" onChange={handleOnChange_14} id="caring" name="caring" value="Caring" />
                                Caring
                            </label>
                                    <label for="few" style={{ marginRight: 10 }}>
                                        <input type="checkbox" class="attrCheckbox checkFew" onChange={handleOnChange_15} id="few" name="few" value="Few" />
                                Few Grades
                            </label>
                                    <label for="paper" style={{ marginRight: 10 }}>
                                        <input type="checkbox" class="attrCheckbox checkPaper" onChange={handleOnChange_16} id="paper" name="paper" value="Paper" />
                                Paper Heavy
                            </label>
                                    <label for="mandatory" style={{ marginRight: 10 }}>
                                        <input type="checkbox" class="attrCheckbox checkMandatory" onChange={handleOnChange_17} id="mandatory" name="mandatory" value="Mandatory" />
                                Attend or Fail
                            </label>
                                </div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <div class="reviewText">
                                    <h4 class="label">Give some specifics <em class="has-text-grey-dark">(Required)</em></h4>
                                    <textarea class="textarea" id="textbox" name="reviewText" onChange={handleOnChange_11} rows="10" cols="30" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="control">
                            <input type="submit" class="button is-light" value="Submit" onClick={createTodo} />
                        </div>
                    </form>
                </div>
            </div>
            <div class="column"></div>
        </div>
    )
}
