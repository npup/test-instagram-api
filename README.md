# test-instagram-api

This is the master branch, deployed js weighing in at **about 860k** (without any compression).

	$ git clone git@github.com:npup/test-instagram-api.git
	$ cd test-instagram-api

There is also a "vanilla" branch which uses no framework at all when deployed.  
To try _that_ out, first do ```git checkout vanilla```, otherwise just do:

	$ npm i

Edit `SCP_DEPLOY_DESTINATION` in `.npmrc` to point to the deployment server directory.  
Register app with Instagram's API at [https://instagram.com/developer/](https://instagram.com/developer/) and edit `src/config.js` accordingly. If using [sandbox mode](https://instagram.com/developer/sandbox/), be sure to invite a few accounts to test - and to make some sandbox-available content available.

	$ npm run deploy # build app and scp it to deployment destination

Navigate to the deployment destination (callback URL) in your browser.  Be prepared to login (once) to Instagram when trying to retrieve posts for the tags.
