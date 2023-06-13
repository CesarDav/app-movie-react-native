import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse, FullMovie } from '../interfaces';


interface MovieDetail {
    isLoading: boolean;
    fullMovie?: FullMovie
    cast: Cast[]
}



export const useMovieDetails = (id: number) => {
    const [state, setState] = useState<MovieDetail>({
        isLoading: true,
        fullMovie: undefined,
        cast: []
    });

    const getMovieDetails = async () => {

        const movieDetailsPromise = await movieDB.get<FullMovie>(`/${id}`);
        const castPromise = await movieDB.get<CreditsResponse>(`/${id}/credits`);

        const [movieDetailsResponse, castPromiseResponse] = await Promise.all([
            movieDetailsPromise,
            castPromise
        ]);


        setState({
            isLoading: false,
            fullMovie: movieDetailsResponse.data,
            cast: castPromise.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    return {
        ...state
    }

}