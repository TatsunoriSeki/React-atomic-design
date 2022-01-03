import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { userState } from "../../store/userState";
import { useRecoilState } from "recoil";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    name: "TestName",
    mail: "example@example.com",
    tel: "111-2222-3333",
    company: {
      name: "TestCompany"
    },
    WEB: "https://google.com"
  };
});

export const Users = () => {
  //const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>Users Page</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>change</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard keys={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmaxx(200px, 1fr));
  grid-gap: 20px;
`;
