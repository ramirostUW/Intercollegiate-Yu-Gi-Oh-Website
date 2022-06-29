# Intercollegiate Yu-Gi-Oh! Website

A website for the Intercollegiate Yu-Gi-Oh Championships.

## Testing and deploying the site

To test the website, simply run `npm start` on your local machine and open your browser. The website can be found under `http://localhost:1234/`. 

To deploy the website, first make sure that the URL in `package.json` matches the URL that you are trying to publish to. Then, run`npm start` after making all your changes, then run `npm run build`. Afterwards, simply save your changes and then commit & push. 


## Bugs
- Mobile swiping lag depending on which elements move. Fix or find alternate visual cue for swipe transition
- POTENTIAL BUG: Past tournament accordions still render when collapsed. Could lead to bug with bunch of tournaments

## To-Do
- Add transition when hovering over nav for tab to extend visually upwards
- Add deck profiles (Youtube link below past tournaments, embedded in caption)
- Consider referencing old trailers?