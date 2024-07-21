import styled from "styled-components";
import sendImg from "../../assets/ui/send.svg";

export const Background = styled.div`
    width: 100vw;
    height: 100vh;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    overflow-y: scroll;

    position: absolute;
    bottom: 0;
    z-index: 2;

    padding: 4vw;
    padding-bottom: 0;

    width: 100vw;
    height: 50vh;
    background-color: white;
    border-radius: 6vw 6vw 0 0;
`;

export const Comment = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2vw;
`;

export const CommentArea = styled.div``;

export const ProfImg = styled.img`
    width: 8vw;
    margin-right: 2vw;
    align-self: baseline;
`;

export const Name = styled.span`
    font-size: 2rem;
    font-weight: bold;
    margin-right: 10vw;
`;

export const CommentTime = styled.span`
    font-size: 2rem;
`;

export const Text = styled.div`
    font-size: 2rem;
`;

export const CommentWrite = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: sticky;
    bottom: 0;

    padding-top: 2vw;
    padding-bottom: 4vw;
    background-color: white;
`;

export const TextArea = styled.textarea`
    width: 84vw;
    height: 8vw;

    border-radius: 1vw;

    padding-top: 1.5vw;
    font-size: 2.5rem;
`;

export const SendBtn = styled.button`
    width: 5vw;
    height: 5vw;

    background-color: inherit;
    background-image: url(${sendImg});
    background-size: cover;
    border: none;
`;