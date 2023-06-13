import React, { FC } from "react"
import { View, Text, FlatList } from "react-native"
import { Movie } from "../interfaces"
import { MoviePoster } from "./MoviePoster"


interface Props {
    title?: string,
    movies: Movie[]
}

export const HorizontalSlider: FC<Props> = ({ title, movies }) => {
    return (
        <View
            style={{
                height: title ? 260 : 220,
            }}
        >
            {title && <Text style={{ fontSize: 30, fontWeight: 'bold' }} >{title}</Text>}
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <MoviePoster movie={item} width={140} height={200} />

                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />


        </View>
    )
}