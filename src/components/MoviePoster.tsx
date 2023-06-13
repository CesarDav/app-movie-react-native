import { FC } from "react";
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Movie } from "../interfaces";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from "../navigation/Navigation";


interface Props {
    movie: Movie;
    height?: number,
    width?: number
}


export const MoviePoster: FC<Props> = ({ movie, height = 420, width = 300 }) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navitaion = useNavigation<StackNavigationProp<RootStackParams>>()

    return (
        <TouchableOpacity
            onPress={() => navitaion.navigate('DetaiLScreen', movie)}
            style={{
                width,
                height,
                marginHorizontal: 8,
                paddingBottom: 20,
                paddingHorizontal: 7
            }}
            activeOpacity={0.9}
        >
            <View
                style={styles.imageContainer}
            >
                <Image
                    source={{
                        uri
                    }}
                    style={styles.image}

                />
            </View>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        elevation: 10
    },
    image: {
        flex: 1,
        borderRadius: 18,

    }
});