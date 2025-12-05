import React from 'react';
import './OfflinePage.css';

const OfflinePage = () => {
    return (
        <div className="offline-container">
            <div className="offline-content">
                <div className="offline-icon">
                    <svg
                        width="120"
                        height="120"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <h1>You're Offline</h1>
                <p>
                    You've accessed this page while offline. PredictifyMe has been cached
                    for offline use!
                </p>
                <p className="offline-subtitle">
                    Please check your internet connection to access real-time features.
                </p>
                <button
                    className="retry-button"
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default OfflinePage;
