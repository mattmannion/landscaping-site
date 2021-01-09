Landscaping project for client.

--ON GOING--

#########################################

Matt Mannion's React App setup w/ Parcel and Sass.

run in terminal to remove .gitkeep placeholders:

- find . -name "\*.gitkeep" -type f -delete
  - !!make EXTREMELY sure that you are in the project root!!

go through file structure and check file setup:

- index.html
- index.jsx/tsx
- app.jsx/tsx
- sass.scss

  - [remember to also set the files up accordingly]

- delete git folder and modify gitignore to your needs.
  it is setup by default to ignore src/\*, dist/, and .cache/.

packages installed globally

- npm-run-all - using run-s
  - [using sequential]
- parcel
- rimraf for clearing dist/ and .cache/ for a clean build each time.

this repo is for my personal use only and is a WIP at all times. use if you'd like but i'm not responsible for any bugs, or problems found therein. thanks.

package.json has grown, please use autoprefixer 9 for postcss
