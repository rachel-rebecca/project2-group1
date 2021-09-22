import React, { ReactNode, useState } from "react";
import Event from "../models/Event";
import GetDetailsInterface from "../models/GetDetailsInterface"



interface FavoritesProps {
    addToFaves: (event: Event) => void;
    remove: (id: string) => void;
    favoritesList: Event[];
}

const defaultValues: FavoritesProps = {
    addToFaves: () => {},
    remove: () => {},
    favoritesList: [] 
}

export const Favorites = React.createContext<FavoritesProps>(defaultValues)


export default function FavoritesProvider({children}: {children: ReactNode}) {
    const[favoritesList, setFavoritesList] = useState<Event[]>([]);

    function addToFaves(event: Event): void {
        let newFavorites = [...favoritesList];
        newFavorites.push(event);
        setFavoritesList(newFavorites)
    }

    function remove(id: string): void {
        let newFavorites = [...favoritesList];
        let foundIndex = newFavorites.findIndex(event => event.id == id);
        newFavorites.splice(foundIndex, 1)    
        setFavoritesList(newFavorites)
    }

    return <Favorites.Provider value={{addToFaves, remove, favoritesList}}>{children}</Favorites.Provider>

}