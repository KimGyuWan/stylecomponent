import styled from "styled-components";
import "./App.css";
import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { TitleCommon, Inputui } from "./Commonui";

function App() {
  return (
    <>
      <div className="App p-5">
        <form action="">
          <TitleCommon>필수정보</TitleCommon>
          <div className="formdiv">
            <ul className="row">
              <li className="col-12">
                <Inputui
                  inputinfo={{
                    type: "text",
                    name: "company",
                    labeltext: "회사이름",
                    alerttext: "회사명을 입력해주세요.",
                  }}
                >
                  회사이름 (필수)
                </Inputui>
              </li>
              <li className="col-6">
                <Inputui
                  inputinfo={{
                    type: "text",
                    name: "name",
                    labeltext: "담당자 성함",
                    alerttext: "담당자 성함을 입력해주세요.",
                  }}
                >
                  담당자 성함 (필수)
                </Inputui>
              </li>
              <li className="col-6">
                <Inputui
                  inputinfo={{
                    type: "text",
                    name: "manager",
                    labeltext: "직책",
                    alerttext: "부서 또는 직책(직함)을 입력해주세요.",
                  }}
                >
                  직책 (필수)
                </Inputui>
              </li>
              <li className="col-6">
                <Inputui
                  inputinfo={{
                    type: "number",
                    name: "number",
                    labeltext: "전화번호",
                    alerttext: "전화번호를 입력해주세요.",
                  }}
                >
                  전화번호 (필수)
                </Inputui>
              </li>
              <li className="col-6">
                <Inputui
                  inputinfo={{
                    type: "email",
                    name: "email",
                    labeltext: "이메일주소",
                    alerttext: "이메일주소를 입력해주세요.",
                  }}
                >
                  이메일 주소 (필수)
                </Inputui>
              </li>
              <li>
                <label htmlFor="text">프로젝트 개요</label>
                <textarea
                  name="text"
                  id=""
                  cols="30"
                  rows="10"
                  className="col-12 p-2"
                  placeholder='프로젝트와 관련된 기초 정보를 입력해 주세요.
            만약 RFP가 있으시다면 아래 "파일 업로드"를 선택해 파일을 첨부하여 주십시오.'
                ></textarea>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
