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

### For Ellena

I'm not very familiar with Javascript and the heuristics of frontend design. This is where I think you could can help out. 

Tasks:
- Bring up some sort of file strucure and page design (very preliminary nothing crazy)
- Leave visual design for later, (Figma, etc.)
- Tell me what it intales, what matters in frontend design


## System Architecture - Reference

### The Frontend

The way I see it, our website should consist of a static frontend and product links to the Shopify hosted backend for payments. From a computation perpective, very easy.

#### Cloudflare Pages 

Info: [Cloudflare Pages](https://pages.cloudflare.com/)

This is for static webpage hosting and where I currently have the QR code attendance HTTP 302 redirect schema. There is some nice CI/CD stuff to whip up for this sake and to push this to active hosting. 

**Why**: Since the page will effectively be for stricly visual and no calculating or dealing with reports will be done.

Also will buy and configure the Domain Name from them as well, everything is consolodated there.

#### The Backend Links to the Shopify Starter service

We can simply include button links to the Shopify hosted payments and security ecosystem.

The other side of the recipient I AM NOT SURE YET. I'll play around with it and see what data schema is required and whip that up myself.


#### Development

Make a branch, and we'll use pull requests for changes.

#### Design Stages

- 1. Whip up the file strucure and basics of the JS/HTML/CSS project
- 2. For proper design, we'll try to follow the 

## Frontend Structure

### Website structure

- Homepage
- Odyssey Info
- Merchandise pages
- Other? Not sure lmk what you think


