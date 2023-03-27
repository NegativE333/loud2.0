import axios  from "axios";
import React, {useCallback, useMemo} from "react";
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';


import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";

interface FavoriteButtonProps{
    songId: string;
}

const FavoriteButton:React.FC<FavoriteButtonProps> = ({songId}) => {

    const { mutate: mutateFavorites } = useFavorites();
    const {data: currentUser, mutate} = useCurrentUser();

    const isFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];

        return list.includes(songId);
    }, [currentUser, songId]);

    const toggleFavorites = useCallback(async () => {
        let response;

        if(isFavorite){
            response = await axios.delete('/api/favourite', {data: {songId}});
        }
        else{
            response = await axios.post('/api/favourite', { songId });
        }

        const updatedFavoriteIds = response?.data?.favoriteIds;

        mutate({
            ...currentUser,
            favoriteIds: updatedFavoriteIds
        });

        mutateFavorites();
    }, [songId, isFavorite, currentUser, mutate, mutateFavorites]);

    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

    return(
        <div 
            onClick={toggleFavorites}
            className="cursor-pointer group/item w-6 h-6 lg:w-8 lg:h-8 border-white border-2 rounded-full flex justify-center items-center transition hover:border-netural-300">
            <Icon size={20}/>
        </div>
    )
}

export default FavoriteButton;