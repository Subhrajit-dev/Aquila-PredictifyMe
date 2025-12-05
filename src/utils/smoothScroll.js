// Smooth scroll utility that reduces scroll sensitivity
export const initSmoothScroll = () => {
    let isScrolling = false;

    const handleWheel = (e) => {
        e.preventDefault();

        if (isScrolling) return;

        isScrolling = true;

        // Reduce scroll delta by 30% (adjust multiplier for different sensitivity)
        const scrollAmount = e.deltaY * 0.7;

        window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
        });

        // Reset the scrolling flag after a short delay
        setTimeout(() => {
            isScrolling = false;
        }, 50);
    };

    // Add wheel event listener with passive: false to allow preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Return cleanup function
    return () => {
        window.removeEventListener('wheel', handleWheel);
    };
};
