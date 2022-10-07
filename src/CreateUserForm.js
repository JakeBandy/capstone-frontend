// import React, { useEffect, useReducer } from "react";

// export const CreateUserForm = () => {
//   const initialFormState = {
//     text_todo: "",
//   };

//   const createUserReducer = (state, action) => {
//     switch (action.type) {
//       case "HANDLE_INPUT_TEXT":
//         return {
//           ...state,
//           [action.field]: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
//   const [state, dispatch] = useReducer(createUserReducer, initialFormState);

//    useEffect(() => {
//      console.log({ initialFormState });
//    }, [initialFormState]);

//   const handleChange = (e) => {
//     dispatch({
//       field: e.target.name,
//       payload: e.target.value,
//       type: "HANDLE_INPUT_TEXT",
//     });
//   };

//   const handleSubmit = () => {
//     console.log(state);
//     fetch("https://capstone-backend-ten.vercel.app", {
//       method: "POST",
//       body: JSON.stringify(state),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer Tokene",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => data);
//   };

//   return (
//     <form>
      
//       <label for="text_todo">
//         Last name:
//         <input type="text" name="todo" onChange={handleChange} />
//       </label>
//       <input
//         type="submit"
//         onClick={(e) => {
//           e.preventDefault();
//           handleSubmit();
//         }}
//       />
//     </form>
//   );
// };