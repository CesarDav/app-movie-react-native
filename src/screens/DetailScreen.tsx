import { FC } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';


const scrennHeigth = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetaiLScreen'> { }

export const DetailScreen: FC<Props> = ({ route, navigation }) => {
    const movie = route.params;

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, fullMovie, cast } = useMovieDetails(movie.id);

    return (
        <ScrollView>

            <View style={styles.imageContainer} >

                <Image
                    source={{
                        uri
                    }}
                    style={styles.posterImage}

                />
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle} >{movie.original_title}</Text>
                <Text style={styles.title} >{movie.title}</Text>
            </View>

            {
                isLoading
                    ? (
                        <ActivityIndicator
                            style={{ marginTop: 20 }}
                            size={40}
                            color={'grey'}
                        />
                    )
                    : (

                        <MovieDetails
                            fullMovie={fullMovie!}
                            cast={cast}
                        />
                    )
            }

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Icon
                    color='white'
                    name='arrow-back'
                    size={40}


                />

            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: scrennHeigth * 0.7,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,
        elevation: 10,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25

    },
    posterImage: {
        flex: 1,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25
    },
    marginContainer: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 18,
        opacity: 0.8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        position: 'absolute',
        top: 30,
        left: 5
    }

})