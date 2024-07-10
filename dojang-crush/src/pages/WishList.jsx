import styled from "styled-components";
import { useState } from "react";

import PlaceComponent from "../components/PlaceComponent";
import ThemeComponent from "../components/ThemeComponent";
import NavigationBar from "../components/NavigationBar";

import sportsIcon from "../assets/theme/sports.svg";
import gameIcon from "../assets/theme/game.svg";
import healingIcon from "../assets/theme/healing.svg";
import natureIcon from "../assets/theme/nature.svg";
import musicIcon from "../assets/theme/music.svg";
import uniqueIcon from "../assets/theme/unique.svg";

const WishListPage = () => {
    const [showList, setShowList] = useState(false);

    const onClickThemeButton = () => {
        setShowList(!showList);
    };

    return (
        <Container>
            {showList ? (
                <>
                    <Header>
                        <Title>Wish List</Title>
                        <ToTheme onClick={onClickThemeButton}>
                            테마별 보기
                        </ToTheme>
                    </Header>
                    <PlaceList>
                        <PlaceComponent
                            place="장소1"
                            address="주소1"
                            users={["유저1", "유저2", "유저3"]}
                        />
                        <PlaceComponent place="장소2" address="주소2" />
                        <PlaceComponent place="장소3" address="주소3" />
                        <PlaceComponent place="장소4" address="주소4" />
                        <PlaceComponent place="장소5" address="주소5" />
                    </PlaceList>
                </>
            ) : (
                <>
                    <Header>
                        <ToTheme onClick={onClickThemeButton}>
                            전체 보기
                        </ToTheme>
                        <Title>Wish List</Title>
                    </Header>

                    <WishList>
                        <ThemeComponent
                            themeKor="스포츠"
                            themeEng="sports"
                            icon={sportsIcon}
                        />
                        <ThemeComponent
                            themeKor="게임"
                            themeEng="game"
                            icon={gameIcon}
                        />
                        <ThemeComponent
                            themeKor="힐링"
                            themeEng="healing"
                            icon={healingIcon}
                        />
                        <ThemeComponent
                            themeKor="자연"
                            themeEng="nature"
                            icon={natureIcon}
                        />
                        <ThemeComponent
                            themeKor="음악"
                            themeEng="music"
                            icon={musicIcon}
                        />
                        <ThemeComponent
                            themeKor="이색"
                            themeEng="unique"
                            icon={uniqueIcon}
                        />
                    </WishList>
                </>
            )}

            <NavigationBar />
        </Container>
    );
};

export default WishListPage;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled.div`
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: center; /* Title을 중앙에 배치 */
    align-items: center;
    margin: 8vw;
`;

const Title = styled.div`
    font-size: 4rem;
    font-weight: bold;
`;

const ToTheme = styled.div`
    font-size: 2.3rem;
    font-weight: bold;
    position: absolute;
    right: 6%;
    top: 100%;
`;

const PlaceList = styled.div`
    flex: 1;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;
`;

const WishList = styled.div`
    display: flex;
    flex: 1;
    width: 100vw;
    overflow-y: auto;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
