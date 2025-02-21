export const Video = () => {
    return (
        <div className="absolute w-full h-full overflow-hidden -z-40">
            <div className="absolute size-full bg-white/30 -z-40" />
            <div className="absolute size-full -z-50">
                <video
                    width={2560}
                    height="auto"
                    controls={false}
                    preload="auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/msvid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};
