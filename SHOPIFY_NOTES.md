# Team Merchandise Landing Page → Shopify Redirect Integration

## Purpose

Create a small static landing page for a team merchandise order.

The landing page should **display the merchandise clearly** and then send users to the correct **Shopify-hosted product page** to complete product selection, checkout, payment, shipping, taxes, and order confirmation.

This keeps the custom frontend simple and avoids handling payment, cart, checkout, or customer data directly.

---

## Recommended Approach

Use a static frontend:

```text
HTML + CSS + JavaScript
```

TypeScript is fine if the project already has a build step, but it is not necessary.

The frontend should only do the following:

1. Show team merchandise items.
2. Show photos, names, prices, short descriptions, and deadline/order notes.
3. Link each item to its Shopify product page.
4. Let Shopify handle variants, cart, checkout, payment, shipping, taxes, and order confirmation.

---

## What Not To Build

Do **not** build:

* A custom cart
* A custom checkout
* Payment forms
* Shopify Storefront API integration
* Shopify Admin API integration
* Embedded Shopify Buy Button
* Variant selectors on the landing page
* Inventory logic on the landing page

For this use case, direct redirects are safer and simpler.

---

## Basic Architecture

```text
User visits landing page
        ↓
User views merch item
        ↓
User clicks “Order Hoodie”
        ↓
Browser opens Shopify product page
        ↓
User selects size/color/options in Shopify
        ↓
Shopify handles checkout and payment
```

---

## Required Inputs From Shopify/Admin Team

Before frontend work begins, collect the following:

| Item                 |   Required? | Notes                                                        |
| -------------------- | ----------: | ------------------------------------------------------------ |
| Shopify store domain |         Yes | Example: `https://team-store.myshopify.com` or custom domain |
| Product URLs         |         Yes | One URL per merch item                                       |
| Product names        |         Yes | Should match Shopify where possible                          |
| Product photos       |         Yes | Prefer optimized `.webp`/`.jpg` files                        |
| Prices               | Recommended | Can show “from $X” if variants differ                        |
| Order deadline       | Recommended | Important for team/group orders                              |
| Delivery/pickup info | Recommended | Example: “Orders delivered at practice”                      |
| Refund/exchange note | Recommended | Link to Shopify policy if available                          |
| Contact email        | Recommended | For sizing/order questions                                   |

---

## Shopify Product URL Format

Most Shopify product pages follow a structure similar to:

```text
https://your-store-domain.com/products/product-handle
```

Example:

```text
https://team-store.myshopify.com/products/team-hoodie
```

However, the safest approach is:

1. Create the product in Shopify.
2. Open the product page from Shopify/admin.
3. Copy the final public product URL.
4. Paste that exact URL into the frontend product configuration.

Do not guess URLs if the Shopify product pages already exist.

---

## Product Handle Notes

Shopify generates a URL and handle when a product is created. The handle is the URL-friendly part of the product page.

Example:

```text
Product name: Team Travel Hoodie
Possible handle: team-travel-hoodie
Possible URL: https://team-store.com/products/team-travel-hoodie
```

Avoid changing handles repeatedly after sharing links, because old shared links may break unless redirects are configured.

Reference:

* Shopify: Adding and updating products
  https://help.shopify.com/en/manual/products/add-update-products

---

## Frontend Link Strategy

Use normal anchor links:

```html
<a href="https://team-store.com/products/team-hoodie">
  Order Hoodie
</a>
```

This is better than using JavaScript-only button redirects because:

* Users can open links in a new tab.
* Links are accessible.
* Links work if JavaScript fails.
* Crawlers, previews, and accessibility tools understand the page better.

Style the anchor like a button with CSS if desired.

Example:

```html
<a class="product-card__button" href="https://team-store.com/products/team-hoodie">
  Order Hoodie
</a>
```

---

## Same Tab vs New Tab

Recommended default:

```html
<a href="https://team-store.com/products/team-hoodie">
  Order Hoodie
</a>
```

This opens in the same tab.

If the team wants Shopify to open in a new tab, use:

```html
<a
  href="https://team-store.com/products/team-hoodie"
  target="_blank"
  rel="noopener"
>
  Order Hoodie
</a>
```

Reference:

* MDN: `rel="noopener"`
  https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/noopener

---

## Example Product Configuration

A simple product data file keeps the page maintainable.

### JavaScript Example

```js
const products = [
  {
    name: "Team Hoodie",
    price: "$65",
    image: "./assets/team-hoodie.webp",
    description: "Team hoodie with front logo.",
    shopifyUrl: "https://team-store.com/products/team-hoodie"
  },
  {
    name: "Team T-Shirt",
    price: "$30",
    image: "./assets/team-tshirt.webp",
    description: "Soft cotton team shirt.",
    shopifyUrl: "https://team-store.com/products/team-tshirt"
  },
  {
    name: "Team Hat",
    price: "$25",
    image: "./assets/team-hat.webp",
    description: "Adjustable team hat.",
    shopifyUrl: "https://team-store.com/products/team-hat"
  }
];
```

### TypeScript Example

```ts
type Product = {
  name: string;
  price: string;
  image: string;
  description: string;
  shopifyUrl: string;
};

const products: Product[] = [
  {
    name: "Team Hoodie",
    price: "$65",
    image: "./assets/team-hoodie.webp",
    description: "Team hoodie with front logo.",
    shopifyUrl: "https://team-store.com/products/team-hoodie"
  }
];
```

---

## Example HTML Structure

```html
<header class="hero">
  <h1>Team Merchandise Order</h1>
  <p>Order official team merchandise through our Shopify store.</p>
  <p><strong>Order deadline:</strong> March 15, 2026</p>
</header>

<main>
  <section class="product-grid" aria-label="Team merchandise">
    <article class="product-card">
      <img src="./assets/team-hoodie.webp" alt="Team hoodie" />
      <h2>Team Hoodie</h2>
      <p>$65</p>
      <p>Team hoodie with front logo.</p>
      <a class="product-card__button" href="https://team-store.com/products/team-hoodie">
        Order Hoodie
      </a>
    </article>

    <article class="product-card">
      <img src="./assets/team-tshirt.webp" alt="Team t-shirt" />
      <h2>Team T-Shirt</h2>
      <p>$30</p>
      <p>Soft cotton team shirt.</p>
      <a class="product-card__button" href="https://team-store.com/products/team-tshirt">
        Order T-Shirt
      </a>
    </article>
  </section>
</main>
```

---

## Optional UTM Parameters

UTM parameters are optional tracking tags added to links.

Example:

```text
https://team-store.com/products/team-hoodie?utm_source=landing_page&utm_medium=team_site&utm_campaign=team_merch_2026
```

They can help answer questions like:

* How many people came from the landing page?
* Did QR code traffic convert better than email traffic?
* Which merch campaign produced orders?

Recommended simple pattern:

```text
utm_source=landing_page
utm_medium=team_site
utm_campaign=team_merch_2026
```

For QR codes:

```text
utm_source=qr_code
utm_medium=print
utm_campaign=team_merch_2026
```

For email:

```text
utm_source=email
utm_medium=team_announcement
utm_campaign=team_merch_2026
```

For a small team order, UTMs are nice to have but not mandatory.

References:

* Shopify: Viewing order conversion summary
  https://help.shopify.com/en/manual/fulfillment/managing-orders/analytics/conversion-summary

* Shopify: Measuring marketing performance
  https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/marketing-performance

* MDN: URLSearchParams
  https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

---

## Optional UTM Helper

If the developer wants to append UTMs consistently:

```js
function withUtm(url, campaign = "team_merch_2026") {
  const nextUrl = new URL(url);

  nextUrl.searchParams.set("utm_source", "landing_page");
  nextUrl.searchParams.set("utm_medium", "team_site");
  nextUrl.searchParams.set("utm_campaign", campaign);

  return nextUrl.toString();
}
```

Usage:

```js
const hoodieUrl = withUtm("https://team-store.com/products/team-hoodie");
```

This is optional. Hardcoded final URLs are also completely acceptable.

---

## Design Guidance

Keep the landing page simple.

Recommended sections:

1. **Hero**

   * Team name
   * “Official Team Merchandise Order”
   * Order deadline
   * Short explanation

2. **Product Grid**

   * Product image
   * Product name
   * Price
   * Short description
   * Shopify order button

3. **Ordering Notes**

   * Deadline
   * Delivery or pickup details
   * Who to contact with questions

4. **FAQ**

   * “Where do I select my size?”
   * “Can I order multiple items?”
   * “When will items arrive?”
   * “Who handles payment?”
   * “What if I have an issue with my order?”

5. **Footer**

   * Contact email
   * Shopify policy links if provided
   * Team/organization name

---

## UX Notes

Use clear button text:

Good:

```text
Order Hoodie
Order T-Shirt
View on Shopify
```

Avoid vague text:

```text
Click here
Learn more
Go
```

Each product card should make it obvious that checkout happens on Shopify.

Suggested helper text near buttons:

```text
You will be redirected to Shopify to select size, options, and complete checkout.
```

---

## Accessibility Notes

* Use real links: `<a href="...">`.
* Do not use JavaScript-only buttons for navigation.
* Use descriptive link text.
* Add useful `alt` text to product images.
* Ensure sufficient color contrast.
* Ensure the page works with keyboard navigation.
* Keep headings in logical order: `h1`, then `h2`, then `h3`.

Reference:

* MDN: HTML accessibility basics
  https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML

---

## Shopify Setup Checklist

Before launch, confirm:

* [ ] Each merch item has an active Shopify product page.
* [ ] Each product has correct images.
* [ ] Each product has correct price.
* [ ] Each product has correct variants, such as size and color.
* [ ] Inventory or preorder settings are correct.
* [ ] Checkout is active.
* [ ] Storefront password is removed if customers need public access.
* [ ] Shipping/pickup settings are correct.
* [ ] Taxes are configured.
* [ ] Confirmation emails are configured.
* [ ] Product URLs are final.
* [ ] Product URLs have been tested in an incognito/private browser window.

---

## Frontend QA Checklist

Before sharing the landing page:

* [ ] All product buttons open the correct Shopify product page.
* [ ] Links work on desktop and mobile.
* [ ] Product images load quickly.
* [ ] Page layout works on phone screens.
* [ ] Order deadline is visible.
* [ ] Shopify checkout works from the redirected product page.
* [ ] No payment, cart, or checkout logic exists in the custom frontend.
* [ ] External links use `rel="noopener"` if opened with `target="_blank"`.
* [ ] Product URLs are not broken.
* [ ] The page has been tested in Chrome, Safari, and mobile browser.

---

## Suggested File Structure

```text
team-merch-landing/
  index.html
  styles.css
  script.js
  assets/
    team-hoodie.webp
    team-tshirt.webp
    team-hat.webp
  README.md
```

For a very small landing page, this is enough.

---

## References

Shopify Starter plan:

* https://help.shopify.com/en/manual/intro-to-shopify/pricing-plans/plans-features/shopify-starter-plan

Shopify product setup and product handles:

* https://help.shopify.com/en/manual/products/add-update-products

Shopify product details:

* https://help.shopify.com/en/manual/products/details/product-details-page

Shopify URL redirects:

* https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect

Shopify UTM/conversion tracking:

* https://help.shopify.com/en/manual/fulfillment/managing-orders/analytics/conversion-summary
* https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/marketing-performance

MDN anchor/link security:

* https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/noopener

MDN URLSearchParams:

* https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

MDN accessibility basics:

* https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML




