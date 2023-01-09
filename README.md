# ⚒️job-task
## TASK
Use https://fakestoreapi.com/ to make a small SPA application

Basic requirements:

1. Make a navbar
2. Create a product map (Title, product description (must open/close when clicked), image, price)
3. If you click on the product card, you should go to its page
4. Add a filter by product categories
5. Make a 404 page
6. You can make About us as the second page in the collection

Preferred technology Stack for the task:
 -  Framework Vue 2, Vue 3, Nuxt 2
 -  Vuex state manager
 -  Layout without frameworks, only SCSS/SASS
 -  Axios for requests to the server
 -  Pug
 
 ## IMPLEMENTATION
 
The application is made using the Nuxt framework.

It consists of two main pages(PRODUCTS, ABOUT US) and one dynamic(by ID, with information about a specific product).

The application implements filtering based on special requests to API. Data is requested using axios, Vuex state manager is used to store and work with them.

The markup is done using Pug  template engine, the styles - using SCSS. 

Technology Grid was used to place the cards. The application has a responsive design.

 ![](scrsh_job-task.png)
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
