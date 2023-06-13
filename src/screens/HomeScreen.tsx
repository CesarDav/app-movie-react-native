import { useContext, useEffect } from 'react';

import { ActivityIndicator, View, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from 'react-native-snap-carousel';

import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from "../components/MoviePoster";
import { useMovies } from "../hooks/useMovies";
import { getImagaColors } from '../helpers/helpers';
import { GradientContext } from '../contex/GradientContext';


const { width: windowWidth } = Dimensions.get('window')


export const HomeScreen = () => {

    const { setMainColors } = useContext(GradientContext)

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets()

    if (isLoading) {
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color='red' size={100} />
        </View>
    }


    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const [primary = "green", secondary = 'orange'] = await getImagaColors(uri);

        setMainColors({ primary, secondary })

    }

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(0)
        }

    }, [nowPlaying])

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20, }} >

                    {/* movies main */}
                    <View style={{ height: 440 }}>
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => <MoviePoster movie={item} />}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index => getPosterColors(index)}
                        />

                    </View>

                    {/* moview secondary */}
                    <HorizontalSlider title='Popular' movies={popular} />
                    <HorizontalSlider title='Top Rated' movies={topRated} />
                    <HorizontalSlider title='Upcoming' movies={upcoming} />
                </View>
            </ScrollView>
        </GradientBackground>
    )
};