import React, { useState, useContext } from "react";
import { Tabs, Tab } from "@mui/material";
import UserContext from "../../context/UserContext";

function MyLibraryNav() {

    // 
    const { tabs, setTabs } = useContext(UserContext);

    const handleChange = (event, newValue) => {
        setTabs(newValue);
    };

    return (
        <>
            <Tabs value={tabs} onChange={handleChange}>
                <Tab value="myLibrary" label="My Library" />
                <Tab value="myStore" label="My Store" />
            </Tabs>
        </>
    );
}

export default MyLibraryNav;
