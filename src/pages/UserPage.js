import React, { useContext } from 'react';
import { UserContext, ThemeContext } from '../Context';

export default function UserPage(props) {
  const userContext = useContext(UserContext);
  const themeContext = useContext(ThemeContext);
  return (
    <div>
      <h3 className={themeContext.themeColor}>{userContext.name}</h3>
    </div>
  )
}