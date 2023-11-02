import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {

    // const inputElement = useRef(0);

    // const [name, setName] = useState();

    // useEffect(() => {
    //     times.current = times.current + 1;
    // }, [name])

    // const changeStyle = () => {
    //     console.log(inputElement.current.value);
    // }

    // const [val, setVal] = useState();

    // const [name, setName] = useState();
    // const prevName = useRef();

    // useEffect(() => {
    //    prevName.current = name; 
    // }, [name])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await axios.post("https://dummyjson.com/products/add");
    //         setVal(response?.data?.products);
    //     }
    //     fetchData();
    // }, [])
     
    
// let age = 19;
// let gender = 'M';
// let isAvailable = false;
// let state = '';
// age > 18 ? gender=="M" ? isAvailable? (state="Jaipur", console.log("Patna")):( state="Mumbai",  console.log("tna")): null: null
// console.log(state)
 
   return (
        <>

            <div className="container-fluid">
                <div className = "row">
                    <div className="col-12" style={{textAlign:"center", backgroundColor: "green", color:"white", fontSize:"50px"}}>
                        <span>Calorie Planner</span>
                    </div>

                </div>
            </div>

            {/* <input ref={inputElement} value={name} onChange={(e) => setName(e.target.value)}></input>

            <button onClick={changeStyle}>Submit</button> */}

            {/* <div>
                <input value={name} onChange={(e)=>setName(e.target.value)}/>
                <p>My name is {name} and it used to be {prevName.current}</p>
            </div> */}

        {/* {val.map((item) => {
            return(<>
                <p>{item.price}</p>
            </>);
        })} */}

            {/* <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    {(val).map((item) => {
                        return(
                            <>
                                <ul>
                                    <li key={item.id}>{item.title}
                                    
                                    <ul>
                                        <li key={item.id}>{item.description}</li>
                                    </ul>
                                    </li>
                                    
                                </ul>

                            </>
                        );
                    })}
                    </div>
                </div>
            </div> */}

            {/* <div className="container-fluid mt-4">
                <div className="row">
                    
                    {(val).map((item) => {
                        return (
                            <>
                                <div className="col-3 mt-2 ml-2 mr -2">
                                    <div className="card justify-content-center" style={{ height: "300px" }}>
                                        <div className="row justify-content-center">
                                            <div className="col-12 justify-content-center d-flex">
                                                <p key={item.id}>{item.title}</p>
                                            </div>
                                            <div className="col-12  justify-content-center  d-flex">
                                                <img src={item.images[0]} style={{ maxWidth: "150px" }}></img>
                                            </div>
                                            <div className="col-6  justify-content-center  d-flex mt-2 ">
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div> */}
       </>
    );
}

export default Navbar;