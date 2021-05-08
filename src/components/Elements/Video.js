import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
    console.log({ videoSrcURL })

    return (

        <iframe
            src={videoSrcURL}
            title={videoTitle}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowfullscreen
        ></iframe>
    )
}
export default Video