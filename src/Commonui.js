import styled from "styled-components";
import "@fontsource/noto-sans-kr";
import arrowbtnimg from "./icon/go.svg";
import { useState } from "react";

export const Font = styled.p`
  font-family: "Noto Sans KR";
`;

// title
export const TitleCommon = styled.h2`
  font-family: "Noto Sans KR";
  font-weight: 500;
  font-size: 1.8rem;
  text-align: center;
`;

// form

// export const Inputui = (props) => {
//   const [onfocus, setOnfocus] = useState(false);
//   const [text, setText] = useState(null);
//   const bool = text === "" ? "notext" : "yestext";

//   const bool2 = () => {
//     if (text === null) {
//       return "notyet";
//     } else if (text === "") {
//       return "notext";
//     } else {
//       return "yestext";
//     }
//   };

//   const onChange = (e) => {
//     setText(e.target.value);
//   };

//   return (
//     <div className={`${props.className && props.className} mydiv`}>
//       <div>
//         <input
//           id="inputfocus"
//           className={`${bool2()} forminput w-100 p-2`}
//           type="text"
//           name={props.inputinfo.name}
//           placeholder={props.children}
//           onChange={onChange}
//           onFocus={() => {
//             setOnfocus(true);
//           }}
//           // onBlur={() => {
//           //   setOnfocus(false);
//           // }}
//           value={text}
//         />
//       </div>
//       {onfocus && (
//         <label
//           htmlFor={props.inputinfo.name}
//           className={`${onfocus ? "on" : null} formlabel`}
//           style={{ color: text === "" ? "#ff3300" : "#23b889" }}
//         >
//           {props.inputinfo.labeltext}
//           <i
//             className={text === "" ? "bi bi-x-lg" : "bi bi-check2"}
//             style={{
//               backgroundColor: text === "" ? "#ff3300" : "#23b889",
//             }}
//           ></i>
//         </label>
//       )}

//       {text === "" && onfocus && <span>{props.inputinfo.alerttext}</span>}
//     </div>
//   );
// };

export const Inputui = (props) => {
  const [onfocus, setOnfocus] = useState(false);
  const [text, setText] = useState(null);
  // const [blank, setBlank] = useState("");
  // const bool = text === "" ? "notext" : "yestext";

  const bool2 = () => {
    if (text === null) {
      return "notyet";
    } else if (text === "") {
      return "notext";
    } else {
      return "yestext";
    }
  };

  const bool3 = () => {
    if (text === null) {
      return "";
    } else if (text === "") {
      return "bi bi-x-lg";
    } else {
      return "bi bi-check2";
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={`${props.className && props.className} mydiv`}>
      <div>
        {/* <input
          id="inputfocus"
          className={`${bool2()} forminput w-100 p-2`}
          type="text"
          name={props.inputinfo.name}
          placeholder={props.children}
          onChange={onChange}
          onFocus={() => {
            setOnfocus(true);
          }}
          // onBlur={() => {
          //   setOnfocus(false);
          // }}
          value={text}
          onBlur={(e) => {
            if (text === "") {
              // setOnfocus(false);
              e.target.className = "notext forminput w-100 p-2";
            }
          }}
        /> */}

        <input
          id="inputfocus"
          className={`${bool2()} forminput w-100 p-2 ]`}
          type="text"
          name={props.inputinfo.name}
          placeholder={props.children}
          onChange={onChange}
          onFocus={() => {
            setOnfocus(true);
          }}
          onBlur={(e) => {
            if (text === "") {
              // e.classList = "notext forminput w-100 p-2";
            }
          }}
          value={text}
        />

        {onfocus && (
          <label
            htmlFor={props.inputinfo.name}
            className={`${onfocus ? "on" : null} formlabel ${bool2()}`}
            // style={{ color: text === "" ? "#ff3300" : "#23b889" }}
          >
            {props.inputinfo.labeltext}
            <i
              className={`${bool2()} ${bool3()} `}
              // className={text === "" ? "bi bi-x-lg" : "bi bi-check2"}
              style={{
                backgroundColor: text === "" ? "#ff3300" : "#23b889",
              }}
            ></i>
          </label>
        )}
      </div>

      {text === "" && onfocus && <span>{props.inputinfo.alerttext}</span>}
    </div>
  );
};
// button
export const BtnCommon = styled.button`
  padding: 1rem 3rem;
  background-color: transparent;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

export const ACommon = styled.a`
  text-decoration: none;
  color: black;
  display: inline-block;
  padding: 1rem 3rem;
  background-color: transparent;
  border: 1px solid #ccc;
  box-sizing: border-box;
  cursor: pointer;
`;

// icon

export const Abtn = (props) => {
  return (
    <a
      href={props.href}
      className={props.className && props.className}
      target={props.target && props.target}
    >
      {props.children}
      <img src={arrowbtnimg} alt="화살" />
    </a>
  );
};

// list

// gallery
