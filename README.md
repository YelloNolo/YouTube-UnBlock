# YouTube UnBlock

**Status:** This project is fully functional as of 10/24/2023. (some bugs here and there)

## Is this blocker getting in the way?
![indeed an image](/img/YouTube-ad-blocker-experiment.png)

## 🩹 Look no further, as here is a bandied
The script [DeBlock](/YouTube-DeBlock.user.js) finds and removes the roadblock and embeds your choice of an [Outside Source](#custom-sources) in place of [YouTube](https://youtube.com) videos. You are still on the official YouTube webpage with full access to comments, likes, playlists, and recommendations.

>Note: I did not create any of the [Custom Sources](https://github.com/YelloNolo/YouTube-UnBlock/tree/main#custom-sources) nor do I have any affiliations with them. I only redirect all links on "youtube.com".

## Ad-Blocker Reccommendation 
This script does not block ads, it only removes the block. I Recommend [uBlock Origin](https://github.com/gorhill/uBlock) and [Decentraleyes](https://chrome.google.com/webstore/detail/decentraleyes/ldpochfccmkkmhdbclfhpagapcfdljkj). I also Recommend [AdGuard](https://www.adguard.com/en/) if you have the resources.


## GitHub Install
1. Install [Tampermonkey](https://www.tampermonkey.net/), [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or any other user script manager.
2. Open the script: "[YouTube-DeBlock.user.js](/YouTube-DeBlock.user.js)"
3. Click the "Raw" button at the top right of the page, this should prompt the user script install page.

## Greasy Fork Install
1. Install [Tampermonkey](https://www.tampermonkey.net/), [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or any other user script manager.
2. Click install on the Greasy Fork webpage: [YouTube DeBlock](https://greasyfork.org/en/scripts/477098-youtube-deblock)


Pros
---
- No Blockers
- No Ads
- Access to:
  - Comments
  - Likes
  - Recommendations
- Stays on YouTube
- Full-Screen (YouTube Embed Only)
- Track Watch History (YouTube Embed Only)

Cons
---
- Some Bugs
- Playlists are broken (currently)

## Exceptions
This script will not run if a block is not detected. If no block appears, YouTube continues as normal.

## Custom Sources
- [yout-ube.com](https://yout-ube.com) - Should be fixed
- [nsfwyoutube.com](https://nsfwyoutube.com) - Fix coming soon
- Recommend Some More to [Issues](https://github.com/YelloNolo/YouTube-UnBlock/issues/3)

## Plans?
- [ ] Add multi-language support (aka, translations with google translate)
- [ ] Fix Bug: Frame loads multiple times! Add the check to each runtime. 
- [ ] So... Playlists are broken :O. Youtube thinks the videos fail to load, then skips them, repeatedly, forever...

## Issues?
If there are any issues, or you have a suggestion, please feel free to [open an issue](https://github.com/YelloNolo/YouTube-UnBlock/issues). I appreciate the feedback!

## Other Locations
You can currently find the script in:
- [GitHub repository](https://github.com/YelloNolo/YouTube-UnBlock/)
- [Greasy Fork](https://greasyfork.org/en/scripts/477098-youtube-deblock)
