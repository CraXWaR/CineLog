import { useState } from "react";
import type { Movie } from "../../types/movies.type.ts";
import {useParams} from "react-router";

import {useAuth} from "../../context/auth.context.tsx";
import {useProfileMovies} from "../../hooks/useProfileMovies.ts";
import {usePublicProfile} from "../../hooks/usePublicProfile.ts";
import {useFriendRequest} from "../../hooks/useFriendRequest.ts";

import ProfileHeader from "../../components/Profile/ProfileHeader.tsx";
import FriendsSidebar from "../../components/Profile/FriendsSidebar.tsx";
import MovieSection from "../../components/Profile/MovieSection.tsx";
import MovieModal from "../../components/Movies/MovieModal/MovieModal.tsx";
import Error from "../../components/UI/Error/Error.tsx";
import Loading from "../../components/UI/Loading/Loading.tsx";

import styles from "./ProfilePage.module.css";

//TODO FEAT REAL DATA INSTEAD OF AI GENERATED DUMMY DATA
const FRIENDS = [
    { id: "u-002", username: "marina_k",  avatar: "MK" },
    { id: "u-003", username: "dmitri_p",  avatar: "DP" },
    { id: "u-004", username: "sofia_l",   avatar: "SL" },
];

export default function ProfilePage() {
    const {user} = useAuth();
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    const { publicId } = useParams<{ publicId: string }>();
    if (!publicId) return <Error text="// INVALID PROFILE LINK"/>;
    const isOwnProfile = user?.publicId === publicId;

    const {handleSendRequest, handleRemoveRequest, handleAcceptRequest, handleRemoveFriend, loading: loadingFriendRequest, statusLoading, status} = useFriendRequest(publicId!);

    const { profile, loading: profileLoading, error: profileError } = usePublicProfile(publicId);
    const {watched, watchLater, genres, loading: loadingMovies, error, handleMovieWatched, handleMovieWatchLater} = useProfileMovies(publicId as string);

    if (profileLoading || loadingMovies) return <Loading text="Loading profile..."/>;
    if (profileError || error) return <Error text={profileError || error!}/>;


    return (
        <div className={styles.page}>
            <ProfileHeader
                profile={profile!}
                isOwnProfile={isOwnProfile}
                user={user}
                friendsCount={FRIENDS.length}
                status={status}
                loadingFriendRequest={loadingFriendRequest}
                statusLoading={statusLoading}
                onSendRequest={handleSendRequest}
                onRemoveRequest={handleRemoveRequest}
                onAcceptRequest={handleAcceptRequest}
                onRemoveFriend={handleRemoveFriend}/>

            <div className={styles.layout}>
                <FriendsSidebar friends={FRIENDS}/>

                <MovieSection
                    friends={FRIENDS}
                    watched={watched}
                    watchLater={watchLater}
                    genres={genres}
                    onMovieClick={setSelectedMovie}
                />
            </div>

            {selectedMovie && (
                <MovieModal
                    movie={selectedMovie}
                    genres={genres}
                    onClose={() => setSelectedMovie(null)}
                    onWatched={(movieId) => handleMovieWatched(movieId, selectedMovie!)}
                    onWatchLater={(movieId, added) => handleMovieWatchLater(movieId, selectedMovie!, added)}
                />
            )}
        </div>
    );
}