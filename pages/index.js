import config from "../config.json";
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu />
                <Header />
                <Timeline
                    playlists={config.playlists}
                    favoritos={config.favorites}
                />
            </div>
        </>
    );
}

export default HomePage

const StyledHeader = styled.div`
    section img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .banner {
        margin-top: 50px;
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
`;
function Header() {
    return (
        <StyledHeader>
            {<img className="banner" src={config.banner} />}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    );
}

function Timeline(props) {
    const playlistNames = Object.keys(props.playlists);

    const favoritosObj = Object.keys(props.favoritos);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                return (
                    <section className="playlists">
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
            <section className="favoritos">
                <h2>Favoritos</h2>
                <div>
                    {favoritosObj.map((favorito) => {
                        const favoritos = props.favoritos[favorito];
                        return (
                            <a href={favoritos.url}>
                                <img src={favoritos.profile} />
                                <span>
                                    {favoritos.name}
                                </span>
                            </a>
                        )
                    })}
                </div>
            </section>
        </StyledTimeline>
    )
}