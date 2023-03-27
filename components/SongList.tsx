import React from 'react';
import SongCard from './SongCard';
// import { isEmpty } from 'lodash';
// import MovieCard from './MovieCard';

interface MovieListProps{
    data: Record<string, any>[];
    title: string;
}

const MovieList:React.FC<MovieListProps> = ({data, title}) => {
    // if(isEmpty(data)){
    //     return null;
    // }
    return (
        <div className='px-4 md:px-12 mt-4 space-y-8 overflow-hidden'>
            <div>
                <p className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>
                    {title}
                </p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-2 gap-4'>
                    {data.map((song) => (
                        // <MovieCard 
                        // key={movie.id} 
                        // data={movie}
                        // />
                        <SongCard 
                            key={song.id}
                            data={song}
                        />
                    ))} 
                </div>
            </div>
        </div>
    )
}

export default MovieList;