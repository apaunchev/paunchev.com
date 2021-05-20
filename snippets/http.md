---
updatedAt: '2021-05-09 19:39:02'
published: true
---

# HTTP

## Cache-Control header

Useful directives and what they mean:

- `max-age=[seconds]`: specifies the maximum amount of time that a resource will be considered fresh.
- `s-maxage=[seconds]`: similar to `max-age`, but only applies to shared caches.
- `public`: marks authenticated responses as cacheable. Often redundant as other directives (e.g., `max-age`) imply that caches may store a copy.
- `private`: allows only the end recipient of the response (e.g., the browser) to store a copy of it.
- `no-store`: instructs caches not to keep a copy of the resource under any conditions.
- `no-cache`: does not mean ‘no cache’. Will always revalidate with the server, and if there is no new content (`304`), the cached resource can be retrieved; otherwise, a fresh copy will be downloaded.
- `must-revalidate`: like `no-cache`, but with a grace period. Needs an associated `max-age` directive; e.g., `Cache-Control: must-revalidate, max-age=600`.
- `proxy-revalidate`: similiar to `must-revalidate`, but only applies to shared caches.
- `stale-while-revalidate`: provides a grace period for which the recipient can use an out-of-date resource while checking for a new version. E.g., `Cache-Control: max-age=31536000, stale-while-revalidate=86400`.
- `immutable`: a way of telling the recipient that a file will never change and to never bother revalidating it. It completely cuts out the overhead of a roundtrip of latency. **To be used with care.**
