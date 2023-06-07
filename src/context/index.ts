import React from 'react';
import Profile from '../type';

const ProfileContext = React.createContext<Profile | null>(null);

export default ProfileContext;
