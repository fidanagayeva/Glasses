import React, { useState } from 'react';
import { FiMaximize } from 'react-icons/fi';

const Map = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(14);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div className={`relative w-full ${isFullScreen ? 'h-screen' : 'h-[31.5rem]'}`}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.4386261668!2d-74.11808608788898!3d40.70531100194845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18e7fd77%3A0xa70f0d942ad42a3d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1634825098542!5m2!1sen!2s"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>

            <div className="absolute bottom-2 left-2 bg-white p-5 shadow-md text-left max-w-xs">
                <p className="text-gray-400 mb-2">OUR STORES</p>
                <h3 className="m-0 mb-2 text-lg">VISIT OUR NEW STORE IN NEW YORK</h3>
                <p className="m-0 mb-2 text-sm text-gray-400">294 Bay Meadows Ave.<br />Bay Shore, NY 11706</p>
                <a href="https://woodmart.xtemos.com/contact-us/demo/glasses/" target="_blank" rel="noopener noreferrer" className="text-black underline text-sm">
                    SEE MORE ABOUT
                </a>
            </div>

            <div className="absolute top-2 right-2 flex gap-2 bg-white p-2 rounded shadow-md">
                <FiMaximize size={24} onClick={toggleFullScreen} className="cursor-pointer" />
            </div>
        </div>
    );
};

export default Map;
