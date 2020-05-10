# Security

Any time you accept and display user input, you have to be careful because of potential XSS (cross-site-scripting) attacks. JSX helps developers by default. According to the React [docs](https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks):

> By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered.

However sometimes you may need to display some user markup with `innerHTML`. React uses `dangerouslySetInnerHTML` to remind developers to be careful using it. According to the [docs](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml):

> dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.

# 🛁 Clean, clean, clean that data

When rendering user markup, it's important to sanitize the data on the backend and on the frontend in case the database is ever compromised. I used two libraries for sanitizing data: [DOMPurify](https://github.com/cure53/DOMPurify) and [sanitize-url](https://github.com/braintree/sanitize-url). Whenever I have to use `dangerouslySetInnerHTML`, I use DOMPurify to first sanitize the data. For any URLs that are used in links or images, I used sanitize-url first.
