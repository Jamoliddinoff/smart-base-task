import React from 'react';
import Container from "../Container";
import styled from "styled-components";
import Text from "../Text";
import {useTranslation} from "react-i18next";
import useScreenSize from "../../hooks/useScreenSize";

const ViewVideo = ({url}) => {
    const {t} = useTranslation();
    const {width} = useScreenSize();

    return (
        <Container>
            <div className={'justify-center'}>
                <Text size={width > 700 ? 32 : 20} weight={600} color={'#000'}>{t("videoTitle")}</Text>
            </div>
            <VideoWrapper>
                <iframe
                    width="100%"
                    height="480"
                    src={`${url}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </VideoWrapper>

        </Container>
    );
};

const VideoWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
  margin: 20px 0px;
`;

export default ViewVideo;
