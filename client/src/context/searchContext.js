import React, { createContext, useState} from 'react';


export const SearchContext = createContext({
    Search: "",
    setSearch: () => "",
});


export const SearchProvider = ({ children }) => {
    const [Search, setSearch] = useState("");
    
    





    return (
        <SearchContext.Provider value={{ Search, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
}
