# Website deployment

The GitHub Pages workflow publishes both versions in a single artifact:

- `/` builds the website from `main`.
- `/redesign/` builds the website from `design/rochester-community` with Vite's `/redesign/` base path.

The two source branches remain separate. The root website does not import the redesign.

A push to `main` builds and publishes both versions. After updating only the design branch, open **Actions → Deploy Vite site to GitHub Pages → Run workflow**, select `main`, and run it to refresh `/redesign/` while preserving the main homepage.

If either build fails, the workflow does not publish a partial site; the previous successful deployment remains live.
