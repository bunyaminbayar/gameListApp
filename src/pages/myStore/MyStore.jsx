import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';
import GameList from '../../components/gameList/GameList';
import LanguageContext from '../../context/LanguageContext';

export default function MyStore() {

    // Global Language
    const { language } = useContext(LanguageContext);

    return (
        <>
            <Tabs value="myStore">
                <Tab
                    value="myLibrary"
                    label={
                        <Link to="/myLibrary" style={{ textDecoration: 'none', color: 'inherit' }}>
                            {language === "en" ? "My Library" : "Kütüphanem"}
                        </Link>
                    }
                />
                <Tab
                    value="myStore"
                    label={
                        <Link to="/myStore" style={{ textDecoration: 'none', color: 'inherit' }}>
                            {language === "en" ? "My Store" : "Mağazam"}
                        </Link>
                    }
                />
            </Tabs>
            {/** Get all games */}
            <GameList allGame={true} />
        </>
    );
}
