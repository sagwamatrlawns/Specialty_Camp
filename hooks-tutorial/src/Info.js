import React, { useEffect, useReducer, useState } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action]: action.value,
  };
}

const Info = () => {
  //const [name, setName] = useState(" ");
  //const [nickname, setNickname] = useState(" ");
  const [state, dispatch] = useReducer(reducer, {
    name: "sdf",
    nickname: "sdf",
  });

  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target.name, {
      [e.target.name]: e.target.value,
    });
  };

  //   useEffect(() => {
  //     console.log("effect");
  //     console.log(name);
  //     return () => {
  //       console.log("cleanup");
  //       console.log(name);
  //     };
  //   }, [name]);

  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };
  //   const onChangeNickname = (e) => {
  //     setNickname(e.target.value);
  //   };
  //   return (
  //     <div>
  //       <div>
  //         <input value={name} onChange={onChangeName} />
  //         <input value={nickname} onChange={onChangeNickname} />
  //       </div>
  //       <div>
  //         <div>
  //           <b>이름: </b> {name}
  //         </div>
  //         <div>
  //           <b>닉네임:</b> {nickname}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};
export default Info;
