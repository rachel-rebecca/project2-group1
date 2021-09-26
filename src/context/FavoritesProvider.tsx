import React, { ReactNode, useState } from "react";
import Event from "../models/Event";
import GetDetailsInterface from "../models/GetDetailsInterface";


export interface FaveEvent {
    name?: string;
    url?: string;
    date?: string;
    id?: string;
}

interface FavoritesProps {
    addToFaves: (event: FaveEvent) => void;
    remove: (id?: string) => void;
    favoritesList: FaveEvent[];
}

const defaultValues: FavoritesProps = {
    addToFaves: () => {},
    remove: () => {},
    favoritesList: [] 
}

export const Favorites = React.createContext<FavoritesProps>(defaultValues)


export default function FavoritesProvider({children}: {children: ReactNode}) {
    const[favoritesList, setFavoritesList] = useState<FaveEvent[]>([]);
   
    

    function addToFaves(event: FaveEvent) {
        if (favoritesList.length == 0) {
           setFavoritesList([event])
        
        } else {
            let newFavorites = [...favoritesList];
            newFavorites.push(event);
            setFavoritesList(newFavorites)
        }  
    }

    function remove(id?: any): void {
        let newFavorites = [...favoritesList];
        let foundIndex = newFavorites.findIndex(event => event.id === id);
        newFavorites.splice(foundIndex, 1)    
        setFavoritesList(newFavorites)
    }

    return <Favorites.Provider value={{addToFaves, remove, favoritesList}}>{children}</Favorites.Provider>

}