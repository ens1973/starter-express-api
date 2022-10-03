import { c as create_ssr_component, v as validate_component, b as subscribe, d as add_attribute } from './index-5826ab5b.js';
import { p as page } from './stores-90fbda1a.js';

const logo = "/_app/immutable/assets/svelte-logo-87df40b8.svg";
const github = "/_app/immutable/assets/github-1ea8d62e.svg";
const css$1 = {
  code: "header.svelte-9k39sy.svelte-9k39sy{display:flex;justify-content:space-between}.corner.svelte-9k39sy.svelte-9k39sy{width:3em;height:3em}.corner.svelte-9k39sy a.svelte-9k39sy{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-9k39sy img.svelte-9k39sy{width:2em;height:2em;object-fit:contain}nav.svelte-9k39sy.svelte-9k39sy{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-9k39sy.svelte-9k39sy{width:2em;height:3em;display:block}path.svelte-9k39sy.svelte-9k39sy{fill:var(--background)}ul.svelte-9k39sy.svelte-9k39sy{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-9k39sy.svelte-9k39sy{position:relative;height:100%}li.active.svelte-9k39sy.svelte-9k39sy::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.svelte-9k39sy a.svelte-9k39sy{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-9k39sy.svelte-9k39sy:hover{color:var(--color-theme-1)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-9k39sy"}"><div class="${"corner svelte-9k39sy"}"><a href="${"https://kit.svelte.dev"}" class="${"svelte-9k39sy"}"><img${add_attribute("src", logo, 0)} alt="${"SvelteKit"}" class="${"svelte-9k39sy"}"></a></div>

	<nav class="${"svelte-9k39sy"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-9k39sy"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-9k39sy"}"></path></svg>
		<ul class="${"svelte-9k39sy"}"><li class="${["svelte-9k39sy", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a href="${"/"}" class="${"svelte-9k39sy"}">Home</a></li>
			<li class="${["svelte-9k39sy", $page.url.pathname === "/about" ? "active" : ""].join(" ").trim()}"><a href="${"/about"}" class="${"svelte-9k39sy"}">About</a></li>
			<li class="${[
    "svelte-9k39sy",
    $page.url.pathname.startsWith("/sverdle") ? "active" : ""
  ].join(" ").trim()}"><a href="${"/sverdle"}" class="${"svelte-9k39sy"}">Sverdle</a></li></ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-9k39sy"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-9k39sy"}"></path></svg></nav>

	<div class="${"corner svelte-9k39sy"}"><a href="${"https://github.com/sveltejs/kit"}" class="${"svelte-9k39sy"}"><img${add_attribute("src", github, 0)} alt="${"GitHub"}" class="${"svelte-9k39sy"}"></a></div>
</header>`;
});
const css = {
  code: ".app.svelte-8o1gnw.svelte-8o1gnw{display:flex;flex-direction:column;min-height:100vh}main.svelte-8o1gnw.svelte-8o1gnw{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-8o1gnw.svelte-8o1gnw{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}footer.svelte-8o1gnw a.svelte-8o1gnw{font-weight:bold}@media(min-width: 480px){footer.svelte-8o1gnw.svelte-8o1gnw{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-8o1gnw"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"svelte-8o1gnw"}">${slots.default ? slots.default({}) : ``}</main>

	<footer class="${"svelte-8o1gnw"}"><p>visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-8o1gnw"}">kit.svelte.dev</a> to learn SvelteKit</p></footer>
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-d6b03788.js.map
