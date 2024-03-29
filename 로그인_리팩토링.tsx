import { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { login } from "../../api/user";
import { logIn2, setUserInfo } from "../../redux/modules/userSlice";
import { ReactComponent as EyeSVG } from "../../assets/images/login_signup_profile/icon_visibility.svg"; // 변경된 부분
import { ReactComponent as ClosedEyeSVG } from "../../assets/images/login_signup_profile/icon_visibility_non.svg"; // 변경된 부분
import { toast } from "react-hot-toast";

const BasicLogin: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, onChangeEmailHandler,resetEmail] = useInput();
  const [password, onChangePasswordHandler, resetNumber] = useInput();
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const sanitizedEmail = email.trim();
  const sanitizedPassword = password.trim();

  // 비밀번호 토클
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  //엔터 누르면 작동
  const handlePasswordKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      loginClickHandler(); // 로그인 버튼 클릭 시뮬레이션
    }
  };

  // 로그인 뮤테이션
  const loginMutation = useMutation(login, {
    onSuccess: (response) => {
      dispatch(logIn2());
      dispatch(setUserInfo(response.data));
      navigate("/");
      toast.success("로그인 되었습니다!", { position: "top-center" });
    },
    onError: (error: { response?: { status?: number } }) => {
      console.log("Error response from server:", error?.response);
     // console.log();
      // resetEmail()
      // resetNumber()
      if (error.response && error.response.status === 404) {
        toast.error("로그인 정보를 찾을 수 없습니다.", {
          position: "top-center",
        });
      } else
        toast.error("에러가 발생했습니다. 다시 시도해 주세요.", {
          position: "top-center",
        });
    },
  });

  const loginClickHandler = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      toast.error("이메일 형식으로 입력해주세요.", { position: "top-center" });
      return;
    }

    const loginInformation = {
      email: sanitizedEmail,
      password: sanitizedPassword,
    };
    loginMutation.mutate(loginInformation);
  };
  return (
    <InnerContainer>
      <Stbox1>
        <Stinput1
          type={"text"}
          placeholder={"이메일 계정"}
          value={email}
          onChange={onChangeEmailHandler}
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          $isFocused={isEmailFocused}
          $hasValue={sanitizedEmail.length > 0}
        />
        <Stinput2Container>
          <Stinput2
            type={showPassword ? "text" : "password"}
            placeholder={"비밀번호 입력"}
            value={password}
            onChange={onChangePasswordHandler}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            onKeyDown={handlePasswordKeyDown}
            $isFocused={isPasswordFocused}
            $hasValue={sanitizedPassword.length > 0}
          />
          <PasswordToggle onClick={togglePasswordVisibility}>
            {showPassword ? <Eye /> : <ClosedEye />}
          </PasswordToggle>
        </Stinput2Container>
      </Stbox1>

      <Stbox2>
        <Stlink1
          onClick={() => {
            navigate("/findemail");
          }}
        >
          로그인 정보를 잊으셨나요?
        </Stlink1>
        <Stbutton onClick={loginClickHandler}>로그인</Stbutton>
      </Stbox2>
    </InnerContainer>
  );
};

export default BasicLogin;

const Stinput2Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const PasswordToggle = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  position: absolute;
  right: 10px;
`;

const Eye = styled(EyeSVG)`
  width: 24px; /* 원하는 크기로 조정 */
  height: 24px; /* 원하는 크기로 조정 */
`;

const ClosedEye = styled(ClosedEyeSVG)`
  width: 24px; /* 원하는 크기로 조정 */
  height: 24px; /* 원하는 크기로 조정 */
`;

const InnerContainer = styled.div`
  width: 100%;
`;

const Stbox1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -158px;
`;
const Stbox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Stinput1 = styled.input<{ $isFocused: boolean; $hasValue: boolean }>`
  width: 329px;
  height: 24px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #85848b;

  background-color: #252628;
  border: none;
  border-radius: 8px;
  outline: none;
  margin-bottom: 10px;

  border: 1px solid ${(props) => (props.$isFocused ? "#8084f4" : "#141414")};
  color: ${(props) => (props.$hasValue ? "#d9d9d9" : "#85848b")};
`;

const Stinput2 = styled.input<{ $isFocused: boolean; $hasValue: boolean }>`
  width: 329px;
  height: 24px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #85848b;
  background-color: #252628;
  border: none;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${(props) => (props.$isFocused ? "#8084f4" : "#141414")};
  color: ${(props) => (props.$hasValue ? "#d9d9d9" : "#85848b")};
`;

const Stlink1 = styled.a`
  margin-top: 4px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  cursor: pointer;
  color: #b2b2b2;
  padding-left: 190px;
`;

const Stbutton = styled.button`
  min-width: 350px;
  min-height: 45px;
  /* padding: 10px; */
  background: linear-gradient(135deg, #8084f4, #c48fed);
  color: #e7e6f0;
  border: none;
  border-radius: 6px;
  font-size: 17px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 68px;
  font-weight: 600;
  &:hover {
    color: #141414;
  }
`;
