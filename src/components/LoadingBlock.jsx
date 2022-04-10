import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock(props) {
    return (
        <ContentLoader
            speed={2}
            width={288}
            height={360}
            viewBox="0 0 288 360"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="62" y="256" rx="13" ry="13" width="179" height="27" />
            <circle cx="149" cy="116" r="116" />
            <rect x="116" y="305" rx="13" ry="13" width="70" height="40" />
        </ContentLoader>
    );
}

export default LoadingBlock;
