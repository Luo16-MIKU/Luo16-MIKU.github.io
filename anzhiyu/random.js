var posts=["posts/c92d424b.html","posts/45c6f3ac.html","posts/ab028f3a.html","posts/0.html","posts/35572bee.html","posts/bbed5b96.html","posts/a4b62475.html","posts/fd29bee3.html","posts/7db44c5b.html","posts/85f8fc4d.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};