import React, { FC } from 'react';
import type { RouteComponentProps } from 'react-router-dom';

export const Status: FC<RouteComponentProps<{ code: string }>> = ({
  match: {
    params: { code }
  }
}) => (
  <>
    <div className="content">Status {code}</div>
  </>
);
