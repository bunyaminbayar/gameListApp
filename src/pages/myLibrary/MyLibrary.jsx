import React, { useState, useContext } from "react";
import MyLibraryNav from '../../components/myLibraryNav/MyLibraryNav';
import UserContext from "../../context/UserContext";
import MyStore from "../../components/myGameStore/MyGameStore";
import MyLibraryStore from "../../components/myLibraryStore/MyLibraryStore";


export default function MyLibrary() {

    const { tabs, setTabs } = useContext(UserContext);

    return (
        <div>
            <MyLibraryNav />
            {tabs === "myLibrary" ? <MyLibraryStore /> : <MyStore />}
        </div>
    )
}
