# Frequently Asked Questions

## Why isn't my site live?
1. Check your URL. Is the URL in your URL bar the correct one?
2. Check your folders. Did you link the correct folder in the URL?
3. Did you wait enough time for the site to be published?
	- GitHub pages takes ~5 minutes to propagate and your sites will not be immediately published. 
	- You can check the status by going to your repository → Actions → Check the most recent deployment. 
	- If it is green, the site is live. If it is brown, the site is still being published.

### Why aren't my images showing up?

Check your url of your pictures. When uploading, they always need the *relative path*. So it should be a short URL.  

Absolute path (**incorrect and *only* works on your computer**):
```
/Users/samheckle/dev/web-production-1/project1/images/myimg.jpg
```
Relative path (correct):
```
images/myimg.jpg
```