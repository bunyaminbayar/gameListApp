import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import GameList from '../myLibraryGameList/GameList';

export default function MyLibrary() {
    return (
        <>
        <Tabs value="myLibrary">
            <Tab
                value="myLibrary"
                label={
                    <Link to="/myLibrary" style={{ textDecoration: 'none', color: 'inherit' }}>
                        My Library
                    </Link>
                }
            />
            <Tab
                value="myStore"
                label={
                    <Link to="/myStore" style={{ textDecoration: 'none', color: 'inherit' }}>
                        My Store
                    </Link>
                }
            />
        </Tabs>
        <GameList />
        </>
    );
}
