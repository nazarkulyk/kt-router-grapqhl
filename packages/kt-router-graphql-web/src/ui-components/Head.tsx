import React, { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { Title, Button } from '@ui5/webcomponents-react';
import { useHistory } from 'react-router-dom';
import { styles } from './styles';

const useStyles = createUseStyles(styles);

export const Head: FC = () => {
  const { head } = useStyles();
  const history = useHistory();

  const goHome = (): void => {
    history.push('/');
  };

  const goBack = (): void => {
    history.go(-1);
  };

  const navigatePage = (statusCode: string): void => {
    history.push(`/pages/status/${statusCode}`);
  };

  return (
    <div className={head}>
      <Title>Application</Title>
      <Button onClick={goBack}>Back</Button>
      <Button onClick={goHome}>Home</Button>
      <Button onClick={() => navigatePage('ok')}>Page with status OK</Button>
      <Button onClick={() => navigatePage('!newStatus')}>Page with status NewStatus</Button>
    </div>
  );
};
