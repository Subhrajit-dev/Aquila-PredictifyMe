import React, { useEffect, useState } from 'react';
import './InstallPrompt.css';

const InstallPrompt = () => {
    const [installPrompt, setInstallPrompt] = useState(null);
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later
            setInstallPrompt(e);
            // Show the install prompt
            setShowPrompt(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!installPrompt) {
            return;
        }

        // Show the install prompt
        installPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await installPrompt.userChoice;

        if (outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }

        // Clear the saved prompt since it can't be used again
        setInstallPrompt(null);
        setShowPrompt(false);
    };

    const handleDismiss = () => {
        setShowPrompt(false);
        // Store dismissal in localStorage to not show again for a while
        localStorage.setItem('pwa-install-dismissed', Date.now().toString());
    };

    // Check if user dismissed recently (within 7 days)
    useEffect(() => {
        const dismissedTime = localStorage.getItem('pwa-install-dismissed');
        if (dismissedTime) {
            const daysSinceDismissal = (Date.now() - parseInt(dismissedTime)) / (1000 * 60 * 60 * 24);
            if (daysSinceDismissal < 7) {
                setShowPrompt(false);
            }
        }
    }, []);

    if (!showPrompt || !installPrompt) {
        return null;
    }

    return (
        <div className="install-prompt-overlay">
            <div className="install-prompt">
                <button className="close-button" onClick={handleDismiss}>
                    ✕
                </button>
                <div className="install-icon">
                    <svg
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <h3>Install PredictifyMe</h3>
                <p>
                    Install our app for a better experience! Get quick access, offline
                    support, and notifications.
                </p>
                <div className="install-buttons">
                    <button className="install-button" onClick={handleInstallClick}>
                        Install App
                    </button>
                    <button className="dismiss-button" onClick={handleDismiss}>
                        Not Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstallPrompt;
