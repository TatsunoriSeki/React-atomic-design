import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../..//molecules/user/UserIconWithName";

export const UserCard = (props) => {
  const { user, isAdmin } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} isAdmin={isAdmin} />
      <SDL>
        <dl>
          <dt>mail</dt>
          <dd>{user.mail}</dd>
          <dt>tel</dt>
          <dd>{user.tel}</dd>
          <dt>company</dt>
          <dd>{user.company.name}</dd>
          <dt>Web</dt>
          <dd>{user.WEB}</dd>
        </dl>
      </SDL>
    </Card>
  );
};

const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
