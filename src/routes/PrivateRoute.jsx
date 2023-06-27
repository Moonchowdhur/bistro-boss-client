import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../pages/provider/Authprovider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="radial-progress text-primary" style={{ "--value": 70 }}>
        70%
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

// const AllUsers = () => {
//   const [users, setUsers] = useState([]);

//   const handleAdminBtn = (id) => {
//     const updatedUsers = users.map((user) => {
//       if (user._id === id) {
//         return { ...user, role: 'admin' };
//       }
//       return user;
//     });
//     setUsers(updatedUsers);
//   };

//   const handleInstructorBtn = (id) => {
//     const updatedUsers = users.map((user) => {
//       if (user._id === id) {
//         return { ...user, role: 'instructor' };
//       }
//       return user;
//     });
//     setUsers(updatedUsers);
//   };

//   // Rest of your code...

//   return (
//     <div className="w-full max-h-screen">
//       {/* Rest of your code... */}
//       <tbody>
//         {users.map((user, index) => (
//           <tr key={user._id} className="text-base">
//             {/* Rest of your code... */}
//             <th className="flex items-center gap-3">
//               {user?.role === 'instructor' ? (
//                 <div className="text-base">
//                   <h2>Instructor</h2>
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => handleInstructorBtn(user._id)}
//                   className="bg-orange-300 py-2 text-base px-2 rounded-lg text-white"
//                   disabled={user?.role === 'admin'}
//                 >
//                   Make Instructor
//                 </button>
//               )}
//               {user?.role === 'admin' ? (
//                 <div className="text-base">
//                   <h2>Admin</h2>
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => handleAdminBtn(user._id)}
//                   className="bg-[#40128B] py-2 text-base px-2 rounded-lg text-white"
//                   disabled={user?.role === 'instructor'}
//                 >
//                   Make Admin
//                 </button>
//               )}
//             </th>
//           </tr>
//         ))}
//       </tbody>
//     </div>
//   );
// };

// export default AllUsers;
