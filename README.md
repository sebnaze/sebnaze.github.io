# Personal website -- Sebastien Naze
### Forked from [there](https://github.com/tbakerx/react-resume-template).


## To update content

Most content is in `src/data/data.tsx`. After editing this file, committing and pushing changes, it might be necessary to clear cache and remove previous build from stack:

    npm cache clear --force
    rm -rf node_modules

Then run

    npm install gh-pages --save-dev
    npm deploy run 


## To test on local machine

You can build and test the website on a local machine if all dependencies are fullfilled. Note that things can be tricky with portability between local and github-pages deployment because of the potential different versions of the dependencies.  

### 1. Make sure you have node and yarn installed

To build this website, you will need to have the latest stable versions of Node and Yarn downloaded and installed on your machine. If you don't already have them, you can get Node [here,](https://nodejs.org/en/download/) and Yarn [here.](https://yarnpkg.com/getting-started/install)

Test and deployed locally with node v20.10.0 and yarn 1.22.19 (as of Jan 2024).

### 2. Pull, fork or clone this repo

### 3. Install dependencies and run

Once you have your own copy of this repo forked and downloaded, open the folder in your favorite terminal and run `yarn install` to install dependencies. Following this, run `yarn dev` to run the project. In your terminal you should be given the url of the running instance (usually http://localhost:3000 unless you have something else running).

### 4. Customize the data to make it your own

All of the data for the site is driven via a file at `/src/data/data.tsx`. This is where you'll find the existing content, and updating the values here will be reflected on the site. If you have the site running as described above, you should see these changes reflected on save. The data types for all of these items are given in the same folder in the `dataDef.ts` file. Example images can be found at `src/images/` and are imported in the data file. To change, simply update these images using the same name and location, or add new images and update the imports. 

### 5. Hook up contact form
Due to the variety of options available for contact form providers, I've hooked up the contact form only so far as handling inputs and state. Form submission and the actual sending of the email is open to your own implementation. My personal recommendation for email provider is [Sendgrid.](https://sendgrid.com/)

## Troubleshooting

### GIT repo permission denied after npm deploy run
Make sure you ssh agent is up and using the correct key:

    eval "$(ssh-agent -s)"
    ssh-add path/to/private_key

### npm ERR! Cannot read properties of undefined (reading 'spec')
You may need to clear cache and delete previous builds:

    npm cache clear --force
    rm -rf node_modules

### npm ERR! Cannot read properties of undefined (reading 'export')
This has occured when running on local machine, may need to comment the following line in `next.config.js`:

    output: 'export', 

Likewise, if image optimization is not supported, comment

    unoptimized: true,

### ESLINT error
Some links are broken in the build, run
    
    npx eslint . --fix

### npm ERR! Cannot read properties of undefined (...)
Check dependencies' versions in `package.json`. 
Some edits, upgrades or downgrades were done compared to template to have it deployed:
"next": ^13.4.1 --> ^14.0.4
"gh-pages": ^6.1.1 --> ^3.2.3
