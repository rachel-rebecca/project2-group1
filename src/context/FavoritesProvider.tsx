import React, { ReactNode, useState } from "react";



export interface FaveEvent {
    name?: string;
    url?: string;
    date?: string;
    id?: string;
}

export interface SearchCriteria {
    keyword?: any;
    latlong?: any;
    startDateTime?: any;
    endDateTime?: any; 
}


interface FavoritesProps {
    addToFaves: (event: FaveEvent) => void;
    remove: (list?: FaveEvent[]) => void;
    favoritesList: FaveEvent[];
    searchCriteria: SearchCriteria[];
}

const defaultValues: FavoritesProps = {
    addToFaves: () => {},
    remove: () => {},
    favoritesList: [],
    searchCriteria: [],
}

export const Favorites = React.createContext<FavoritesProps>(defaultValues)


export default function FavoritesProvider({children}: {children: ReactNode}) {
    const[favoritesList, setFavoritesList] = useState<FaveEvent[]>([]);
    let[searchCriteria, setSearchCriteria] = useState<SearchCriteria[]>([])
    

    function addToFaves(event: FaveEvent) {
        // if (favoritesList.length == 0) {
        //    setFavoritesList([event])
        
        // } else {
            let newFavorites = [...favoritesList];
            newFavorites.push(event);
            setFavoritesList(newFavorites);
            console.log(favoritesList);
        // }  
    }

    function remove(list?: any): void {
        // let newFavorites = [...favoritesList];
        // let foundIndex = newFavorites.findIndex(event => event.id === id);
        // newFavorites.splice(foundIndex, 1)    
        setFavoritesList(list)
    }

    return <Favorites.Provider value={{addToFaves, remove, favoritesList, searchCriteria}}>{children}</Favorites.Provider>

}