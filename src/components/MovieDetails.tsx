import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Cast, FullMovie } from "../interfaces";
import { CastItem } from "./CastItem";

interface Props {
    fullMovie: FullMovie;
    cast: Cast[];
}

export const MovieDetails: FC<Props> = ({ fullMovie, cast }) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star"
                        size={16}
                        color='grey'
                    />
                    <Text>{fullMovie.vote_average}</Text>
                    <Text style={{ marginLeft: 10 }}>
                        -{fullMovie.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>

                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    History
                </Text>
                <Text>{fullMovie.overview}</Text>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Budget
                </Text>
                <Text> {new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(fullMovie.budget)}</Text>
                {/* <Text>{fullMovie.budget}</Text> */}

            </View>
            <View
                style={{ marginTop: 10, marginBottom: 100 }}
            >
                <Text>{fullMovie.overview}</Text>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
                    Actors
                </Text>

                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CastItem
                        actor={item}
                    />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70 }}
                />


            </View>

            {/* <Text>
                {fullMovie.release_date}
            </Text> */}
        </>
    )
}