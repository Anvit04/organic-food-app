import React from 'react'

const YouTubeEmbed = ({videoId}) => {
    return (
        <div className="aspect-[1.77777] w-full rounded-xl overflow-hidden">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
            ></iframe>
        </div>
    )
}

export default YouTubeEmbed