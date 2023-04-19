import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import GameList from '../../components/gameList/GameList';

export default function MyStore() {
    return (
        <>
        <Tabs value="myStore">
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
        <GameList allGame={true} />
        </>
    );
}
