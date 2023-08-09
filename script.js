        // Wait for the document to be fully loaded
        document.addEventListener("DOMContentLoaded", function () {
            // Get all the banner divs
            const banners = document.querySelectorAll(".Animation > div");
    
            let currentBannerIndex = 0;
    
            // Function to switch to the next banner
            function switchBanner() {
                banners[currentBannerIndex].classList.remove("active");
                currentBannerIndex = (currentBannerIndex + 1) % banners.length;
                banners[currentBannerIndex].classList.add("active");
            }
    
            // Initial setup: show the first banner
            banners[currentBannerIndex].classList.add("active");
    
            // Set an interval to switch banners every 10 seconds
            setInterval(switchBanner, 1000);
        });