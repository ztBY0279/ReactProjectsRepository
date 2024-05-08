import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Github() {
    const [userData , setUserData] = useState(null);
    const endURL = "https://api.github.com/users/ztBY0279";

    useEffect(() => {
        fetch(endURL)
            .then((response) => response.json())
            .then((data) => {
                setUserData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-4">Github User Profile</h1>
        {userData ? (
            <div className="flex flex-col items-center">
                <img src={userData.avatar_url} alt="User Avatar" className="w-32 h-32 rounded-full mb-4" />
                <h2 className="text-xl font-semibold mb-2">{userData.name}</h2>
                <p className="text-gray-600 mb-2">Email: {userData.email || "Not available"}</p>
                <p className="text-gray-600 mb-2">Followers: {userData.followers}</p>
                <p className="text-gray-600 mb-4">Following: {userData.following}</p>
                <p className="text-gray-600 mb-4">Bio: {userData.bio}</p>
                <p className="text-gray-600 mb-4">html_url: <Link target="_blank" style={{color:"blue"}} to={userData.html_url}> {userData.html_url}</Link></p>
            </div>
        ) : (
            <p className="text-center">Loading...</p>
        )}
    </div>

    );
}

export default Github;




// //import React from 'react'

// import { useEffect, useState } from "react"

// function Github() {
//     const [data , setData] = useState([]);
    
//     const endURL = "https://api.github.com/users/ztBY0279";

//      useEffect(()=>{
//         fetch(endURL)
//         .then((response)=>{
//             return response.json();
//         })
//         .then((data)=>{
//             console.log(data);
//             setData(data);
//         })
//         .catch((error)=>{
//             console.log(error);
//         })
//      },[])
//      console.log('the value of data is ',data);
//   return (
//     <div>
//       <h1>this is github api code</h1>
//     </div>
//   )
// }

// export default Github
