---
title: "Know your worth"
postedAt: "2020-06-01"
summary: "I shipped a new website called IT Salaries. It is targeted at the Bulgarian IT community and offers a way to keep track of current salary levels, both across the market and for specific positions and companies."
---

I shipped a new website called [IT Salaries](https://it-salaries-bulgaria.now.sh). It is targeted at the Bulgarian IT community and offers a way to keep track of current salary levels, both across the market and for specific positions and companies. Read on to understand why and how I built it.

## Why

Talking about compensation is, for the most part, still considered taboo in Bulgaria. In fact, most employment contracts specifically include a clause that prevents you from disclosing your salary. I am sure you can think of reasons why this might be the case, but I am a firm believer that transparency in compensation will ultimately lead to a win-win situation for both employers and employees.

The IT industry in Bulgaria has been steadily growing for the past 5 years. Not only is it becoming a significant contributor to the country’s GDP, but it also provides a stable and lucrative career for tens of thousands of Bulgarians today. But as a developing industry, salary levels are all over the place too. Job candidates must be dreading the “What is your desired salary?” question – I certainly do. These days it is literally one of the first questions during a phone screen.

Nobody wants to get paid less than what they are worth, but first we need to know what we are worth. Thankfully, a lot of companies are helping by becoming more transparent in their job listings. As of the day I am writing this, 7391 out of 23059 listings (32%) on [Jobs.bg](https://www.jobs.bg/) disclose salaries.

I have been thinking how this data could be used for good.

## How

I built [IT Salaries](https://it-salaries-bulgaria.now.sh) as a simple website that downloads all IT listings with disclosed salaries from Jobs.bg and lets the user analyze this data. (It could be argued that having only this subset does not give an accurate picture of the entire market, but that is where we are today, and it is still a good start.)

I wanted to give the user ways to search and filter this data (which is practically impossible on Jobs.bg), so they could verify, for example, how much a support analyst or a software engineer could earn. Probably the biggest challenge is the fact that the content is not curated and therefore is very inconsistent in language and spelling, making it difficult to find what you are looking for. I will keep working on adding smarter filters to try and solve this problem.

One useful feature I built in is that all gross amounts will be converted into their net equivalent. It is not a difficult calculation, but I needed all salaries to be net so that the sorting worked reliably.

I also included some basic statistics such as highest/average/median/lowest salaries. These should be taken with a grain of salt as they are based on the lower end of salary ranges and the real industry numbers might differ.

The website is built with [Next.js](https://nextjs.org/), using [Ant Design](https://ant.design/), and hosted on [Vercel](https://vercel.com/).

## Conclusion

If all this sounds relevant to you, please check out [IT Salaries](https://it-salaries-bulgaria.now.sh). It is not a commercial project and is only meant to serve the community and raise awareness of what you could expect on the Bulgarian IT job market.
