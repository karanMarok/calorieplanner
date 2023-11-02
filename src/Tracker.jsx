import { useState } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Tracker = () => {

    const [percentage, setPercentage] = useState(0);
    const [calorie, setCalorie] = useState();
    const [updatedCalorie, setUpdatedCalorie] = useState(calorie);
    const [updatedPercentage, setUpdatedPercentage] = useState(percentage);
    const [calories, setCalories] = useState([]);

    const [newCalories, setnewCalories] = useState([]);

    const [finalCalories, setFinalCalories] = useState();

    const [totalCalories, setTotalCalories] = useState();

    const handleCalorieChange = (e) => {
        (!parseInt(e.target.value)) ? null : setCalorie(e.target.value)
    }

    const handleSetCalorie = () => {
        (!parseInt(calorie)) ? setPercentage(0) : setUpdatedPercentage(percentage);
        (!parseInt(calorie)) ? alert("Please enter a valid calorie number") : setUpdatedCalorie(calorie);
    }

    const handleAddedCalories = () => {
        if (!updatedCalorie) {
            alert("Set a calorie goal first!");
        }
        else {
            setCalories([...calories, '']);
        }
    }

    const handleRemoveCalories = (index) => {
        const updatedCalories = [...calories];
        updatedCalories.splice(index, 1);

        const updatedNewCalories = [...newCalories];
        updatedNewCalories.pop();

        setCalories(updatedCalories);
        setnewCalories(updatedNewCalories);

        const totalNewCalories = updatedNewCalories.reduce((acc, currentValue) => acc + currentValue, 0);
        const newUpdatedCalorie = calorie - totalNewCalories;
        setUpdatedCalorie(newUpdatedCalorie);

        let finalCal = Math.floor(100 - ((newUpdatedCalorie / calorie) * 100));
        setUpdatedPercentage(finalCal);
        setFinalCalories(finalCal);
        setTotalCalories(totalNewCalories);
    }

    const handleNewCalories = (e, index) => {
        const userInput = parseInt(e.target.value) || 0;

        if (userInput <= calorie) {
            const newCaloriesArray = [...newCalories];
            newCaloriesArray[index] = userInput;
            setnewCalories(newCaloriesArray);

            const totalNewCalories = newCaloriesArray.reduce((acc, currentValue) => acc + currentValue, 0);
            if(totalNewCalories <= calorie) {
                const newUpdatedCalorie = calorie - totalNewCalories;
                setUpdatedCalorie(newUpdatedCalorie);
    
                let finalCal = Math.floor(100 - ((newUpdatedCalorie / calorie) * 100));
                setUpdatedPercentage(finalCal);
                setFinalCalories(finalCal);
                setTotalCalories(totalNewCalories);
            } else {
                alert("Total calories exceed your actual goal")
            }
        }
        else {
            alert("Add a number smaller than actual goal")
        }

    }

    return (
        <>

            <div style={{ display: "flex", justifyContent: "space-around"}}>

                <div classsName="card" style={{ maxWidth: "50vw", marginTop: "50px", padding:"30px", border: "1px solid #d3d3d3"}}>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="trackerBody" style={{ width: "17vw", height: "15vw", display: "flex", justifyContent: "center" }}>
                            <CircularProgressbarWithChildren value={updatedPercentage} styles={buildStyles({ pathColor: `rgb(0, 128, 0)` })}>
                                <div style={{ fontSize: "20px", marginTop: "-5px" }}>
                                    <strong>{updatedPercentage}% Achieved</strong>
                                </div>
                                <div style={{ fontSize: "20px", marginTop: "10px" }}>
                                    <strong>{updatedCalorie} cal left</strong>
                                </div>
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>


                    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                        <div>
                            <input type="text" maxLength='4' placeholder='Enter your Calorie Goal' onChange={handleCalorieChange}></input>
                            <button className="btn btn-success" style={{ marginLeft: "10px" }} onClick={handleSetCalorie}>Set Goal</button>
                            <p style={{ marginTop: "30px" }}> <b>Goal Status:</b> {(finalCalories == 100) ? "Congratulations! You have achieved your goal" : "In Progress"}</p>
                            <p style={{ marginTop: "30px" }}> <b>Total Calories Added:</b> {totalCalories} cal</p>
                        </div>
                    </div>


                    <div style={{ display: "flex", justifyContent: "center", width: "20vw", marginTop: "50px" }}>
                        <div>
                            <button type="button" className="btn btn-success" style={{ width: "100px" }} onClick={handleAddedCalories}>Add Calories</button>
                            <div>
                                <button type="button" className="btn btn-success" style={{ width: "100px", marginTop: "20px", marginRight: "20px" }} onClick={handleRemoveCalories}>Remove Calories</button>
                            </div>
                        </div>

                        <div>
                            {calories.map((item, index) => {
                                return (<div style={{ marginBottom: "10px" }}><input style={{ width: "100px" }} type="text" value={newCalories[index]} onChange={(e) => handleNewCalories(e, index)} id={index} name={index} /></div>);
                            })}
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Tracker;