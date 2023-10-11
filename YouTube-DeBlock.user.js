// ==UserScript==
// @name         YouTube DeBlock
// @description  Semi-working 2023 adblock for YouTube video. Uses "yout-ube.com" and replaces all videos with embeds.
// @author       YelloNolo
// @version      0.9.5
// @date         2023-10-10
// @namespace    https://yello.zip
// @homepage     https://github.com/YelloNolo/YouTube-Adblock
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    // Function remove the "ad" from the page. It finds the "ad" by searching for the class name.
    function removeElementsByClassName(className) {
        const elements = document.querySelectorAll('.' + className);
        elements.forEach(element => {
            element.remove();
        });
    }


    let globalFrame;
    // Function that replaces the video with an embed of "yout-ube.com". It finds the video by searching for the class name.
    function replaceVideoToEmbed(className, newDomain) {
        const currentURL = window.location.href;
        const newURL = getNewURL(newDomain);
        const elements = document.querySelectorAll("." + className);

        elements.forEach(element => {
            const iframe = document.createElement('iframe');
            iframe.src = newURL;
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.zIndex = '9999';
            iframe.allowfullscreen = 'true';

            globalFrame = iframe;

            // Replace the existing element with the custom URL
            element.parentNode.replaceChild(iframe, element);
            console.log("Modified URL:", newURL);
        });
    }

    // Removes the original video frame.
    function removeOgIframe() {
        const iframes = document.querySelectorAll('iframe');
        console.log("beginning the removal");
        iframes.forEach(iframe => {
            const paragraph = document.createElement('p');
            paragraph.className = 'replaceme';
            iframe.parentNode.insertBefore(paragraph, iframe);
            iframe.remove();
            console.log("out with the old");
        });
    }

    // Embeds the new video into the page
    function updateVideoToNewFrame(className, newDomain) {
        const elements = document.querySelectorAll("." + className);
        const newURL = getNewURL(newDomain);
        console.log("frame: " + elements);

        removeOgIframe();

        elements.forEach(element => {
            const iframe = document.createElement('iframe');
            iframe.src = newURL;
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.zIndex = '9999';
            iframe.allowfullscreen = 'true';

            globalFrame = iframe;

            // Replace the existing element with the custom URL
            element.parentNode.replaceChild(iframe, element);
            console.log("In with the new: " + newURL);
        });
    }

    // Temp function from testing. It tries to find if the video is unavalible, but is yet to work.
    function tmp() {
        const textToFind = "This video is unavailable";

        setTimeout(function() {
            for (let i=0;i<=100;i++) {
                if (window.includes(textToFind)) {
                    reloadPage();
                    console.log("Fetch Error Found... Reloading...");
                }
            }
            console.log("Fetch Pass");
        }, 3000);
    }

    // Function to replace "youtube.com" with "yout-ube.com"
    function getNewURL(newDomain) {
        const currentURL = window.location.href;
        if (currentURL.includes("youtube.com")) {
            const newURL = currentURL.replace("youtube.com", newDomain);
            return newURL;
        }
    }

    // Adds youtube.com to all nameless redirects
    function addDomainToURLs() {
        const links = document.querySelectorAll('a');

        links.forEach(link => {
            let href = link.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('www')) {
                href = 'https://www.youtube.com' + href;

                link.setAttribute('href', href);
            }
        });

    }

    function reloadPage() {

        location.reload();
    }

    function reloadFrame() {
        const iframe = document.querySelectorAll('iframe');
        if (iframe) {
            iframe.contentWindow.location.reload();
        }
    }

    // Just for testing...
    function test() {
        const testNewURL = getNewURL();
        console.log(testNewURL);
    }

    // Has the video allready been replaced?
    let replaced = false;

    // Function to run when the button is clicked
    function onButtonClick() {
        // Any class the blocker uses to find the message.
        const blockerClass = 'ytd-enforcement-message-view-model';
        // Any class the broken video uses to be replaced.
        const ogVideoClass = 'yt-playability-error-supported-renderers';
        // The site that will replace the broken domain
        const newDomain = "yout-ube.com";
        // Replace temp class
        const tempReplaceClass = "replaceme";

        console.log("Replaced: " + replaced);
        removeElementsByClassName(blockerClass);
        if (!replaced) {
            console.log("newing");
            replaceVideoToEmbed(ogVideoClass, newDomain);
            replaced = true;
        } else {
            updateVideoToNewFrame(tempReplaceClass, newDomain);
        }
        addDomainToURLs();

        console.log("clicked");
        //test();
    }

    // Function that checks if the page is even blocked
    function checkForClass() {
        // The site that will replace the broken domain
        const newDomain = "yout-ube.com";
        // Any class the blocker uses to find the message.
        const blockerClass = 'ytd-enforcement-message-view-model';
        // Any class the broken video uses to be replaced.
        const ogVideoClass = 'yt-playability-error-supported-renderers';
        // Replace temp class
        const tempReplaceClass = "replaceme";

        // Check to find "ad"
        const elements = document.querySelectorAll('.' + tempReplaceClass);
        if (elements) {
            replaced = false;
        }

        // Webpage Search for Class(s)
        const ogVideoClassFinder = document.querySelectorAll("." + ogVideoClass);
        const tempReplaceClassFinder = document.querySelectorAll("." + tempReplaceClass);

        if (!replaced) {
            removeElementsByClassName(blockerClass);
            replaceVideoToEmbed(ogVideoClass, newDomain);
            replaced = true;
        } else if (replaced) {
            updateVideoToNewFrame(tempReplaceClass, newDomain);
        }

        addDomainToURLs();
    }

    //window.addEventListener('load', onCheckForBlock);

    // Button for testing. I've yet to get the page to auto load. It also helps with debugging.
    const button = document.createElement('button');
    button.textContent = 'Force Fix';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.zIndex = '9999';

    // Listen
    button.addEventListener('click', onButtonClick);
    document.body.appendChild(button);

    // Run on page load
    const classCheckInterval = setInterval(checkForClass, 1000);
    document.addEventListener('click', checkForClass, 1000);
    // Clear iframe on link click
    window.addEventListener('popstate', removeOgIframe);


})();
