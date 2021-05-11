import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
    console.log({ videoSrcURL })

    return (

        <iframe
            src={videoSrcURL}
            title={videoTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            webKitAllowFullScreen="true"
            mozAllowFullScreen="true"
            allowFullScreen
        ></iframe>
    )
}
export default Video