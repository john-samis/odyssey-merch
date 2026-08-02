# Odyssey Merchandise Frontend

Going through the Shopify Docs, there are many services available, of course. See [Shopify Docs](https://shopify.dev/docs). 

Most of them are full service end-to-end solutions of $100 dollars per month, not for us. What plan Shopiy DOES HAVE is shopify starter.


## Shopfiy Starter

Info: [Shopify Starter](https://www.shopify.com/ca/starter)

This is the service I was talking about briefly in the meeting. This is primarily meant for selling through social media that gives out simple product pages, payment services, order tracking and the like.

**Pricing**: At $7 CAD/month and 5% of transaction fees, that's something quite easy to setup. I'll do that on me and odyssey money later when we release. 

**Why I like it**: Shopify starter is natively headless, and is hosted by the shopify ecosystem. This means that we can bring up a simple frontend that provides links to the service. Effectively, we don't have to deal with security, idempotency, etc. etc. and we can just relax. Also perfect for instagram as well.

This also gives our reports and the like fed to us for tracking purposes.

Before we commit to a massive development effort, I'm gonna play around with it to see how we should interact with it.

## System Architecture - Reference

### The Frontend

The way I see it, our website should consist of a static frontend and product links to the Shopify hosted backend for payments. From a computation perpective, very easy.

#### Cloudflare Pages 

Info: [Cloudflare Pages](https://pages.cloudflare.com/)

This is for static webpage hosting and where I currently have the QR code attendance HTTP 302 redirect schema. There is some nice CI/CD stuff to whip up for this sake and to push this to active hosting. 

**Why**: Since the page will effectively be for stricly visual and no calculating or dealing with reports will be done.

Also will buy and configure the Domain Name from them as well, everything is consolodated there.

#### The Shopify Product Pages

This frontend does not provide cart or checkout functionality. When the Shopify Starter
pages are configured, merchandise cards can navigate to the relevant Shopify-hosted
product pages, where ordering and payment take place.

The other side of the recipient I AM NOT SURE YET. I'll play around with it and see what data schema is required and whip that up myself.

Adding spotify change in coming days.

