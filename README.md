# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When the URL is clicked, it tells the browser to find the webpage on the internet or serve it to us, the client (user).
To do that, the browser tells the DNS (domain name service) what address it wants to gain access to.
Then the DNS will find that location on the internet (what network and what drive, folder, file, etc.).
The server's computer will return the information of the website's webpages, or more specifically, where the files are hosted.
Then the browser can update the page.

## From start to finish, how does data reach you to be rendered in the browser?

The client's (user) browser will find the IP address associated with the URL. Then the browser will inquire from the server (techtonic) a webpage file.
The server then finds the file location of the web address (the IP address) it was given, and returns that file to the browser to update. The user / client
can now see the webpage after the browser freshes itself with the new data.

## What code is rendered in the browser?

HTML code is rendered in the browser.

## What is the server-side code’s main function?

To store, organize, find, edit and return the data that is requested from the client.

## What is the client-side code’s main function?

To display the files in a usable manner. So that the page is readable.
Otherwise there would be a lot of unrecognizable information for the user.

## What is runtime?

When a program or application is accessed and started by a user.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

There is only one instance created. Unless the user opens multiple browsers.

## How many instances of the server-side code are available at any given time?

The number of instances available would equal how ever many that were created by the code. Normally one.
There could be variants however. These could be used for adding features, fixing bugs, etc.

## How many instances of the databases connected to the server application are created?

There would be one for whatever is live and being utilized. Otherwise and others would be backups.
