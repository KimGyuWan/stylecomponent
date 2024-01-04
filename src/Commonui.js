import styled from "styled-components";
import "@fontsource/noto-sans-kr";
import arrowbtnimg from "./icon/go.svg";

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

export const Inputui = (props) => {
  return (
    <div className={props.className && props.className}>
      <div>
        <input
          className="w-100 p-2 mb-3"
          type="text"
          name={props.inputinfo.name}
          placeholder={props.children}
        />
        <label htmlFor={props.inputinfo.name} className="d-none">
          {props.inputinfo.labeltext}
          <i></i>
        </label>
      </div>
      <span className="d-none">{props.inputinfo.alerttext}</span>
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
