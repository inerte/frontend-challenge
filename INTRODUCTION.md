For forms:

After some quick research reaffirming my initial idea, landed on using [React Hook Form](https://react-hook-form.com/). It's widely used, and is feature complete.

For routing I went the other way and decided for a lightweight solution, [Wouter](https://github.com/molefrog/wouter). The reasons are that what it offers is enough for this project. The trade-off is eventually if the project needs more features from well know heavy hitter like React Router, it might require a migration, although this pain in minimized by the fact that the API is very similar.

For a CSS framework I chose [Bulma](https://bulma.io/) because I could just include from the CDN and start using it. I would probably go with [Tailwind](https://tailwindcss.com/) or add Bulma to the project pipeline, and minimize the CSS file on build time.
