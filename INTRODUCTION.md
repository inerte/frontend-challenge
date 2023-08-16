For forms:

After some quick research reaffirming my initial idea, landed on using [React Hook Form](https://react-hook-form.com/). It's widely used, and is feature complete.

For routing I went the other way and decided for a lightweight solution, [Wouter](https://github.com/molefrog/wouter). The reasons are that what it offers is enough for this project. The trade-off is eventually if the project needs more features from well know heavy hitter like React Router, it might require a migration, although this pain in minimized by the fact that the API is very similar.

For a CSS framework I chose [Bulma](https://bulma.io/) because I could just include from the CDN and start using it. I would probably go with [Tailwind](https://tailwindcss.com/) or add Bulma to the project pipeline, and minimize the CSS file on build time.

To fetch data I basically took the simplest library listed here https://react.dev/reference/react/useEffect#what-are-good-alternatives-to-data-fetching-in-effects

I've added eslint with the default Airbnb config, and prettier to format the code.

Run lint with `npm run lint`

I turned off the `react/jsx-props-no-spreading` rule since React Hook Form uses the spread operator as the preferred way with `register` to pass props to the component.

While reading the SWR documentation I came across https://swr.vercel.app/docs/prefetching so I added the `preload` link to index.html, which speeds up loading the colors on the more-info page. If you feel like that's cheating, please remove it. I also added a loading indicator to colors, so you see that in action.

In terms of this challenge my biggest deviation from the requirements might have been the decision to add end-to-end tests with [Playwright](https://playwright.dev/). To execute those tests run `npm run test:e2e`. Why those tests and not unit tests? Because I wanted to show that I can write tests at different levels, and there isn't a lot of logic in each one of the pages, they're basically updating the state and rendering it on the Confirmation step. An e2e test can exercise the entire application, and I think it's a good fit for this project.

TODO (good ideas but not enough time):

- Return to the first page if loading subsequent pages without data
- The `selectClassName` is hack-ish, should use something like classnames
- More accessibility
- An e2e test that the back button keep form data

PS: I hope I am not judged by the commits atomicity :) Some of them are pretty large - in reality I would make smaller and more atomic commits, and bundle them with smaller Pull Requests, but I was pressed for time and just getting the basics of the app up and running in big chunks.
