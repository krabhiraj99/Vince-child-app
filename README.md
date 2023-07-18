# Vince Child App

This repository houses the Child application, designed for seamless integration with the `parent-app` project using the Nuxt.js module system. This dynamic loading allows for efficient dependency management and modular architecture.

<br>


## Developing

Follow the below steps to develop / run the `campaign` app locally.

### Folder structure
You need to clone the `Vince-parent-app` repository and keep it adjacent to the `Vince-child-app` folder. So the folder structure would look like: 

```
- My root folder
  - Vince-parent-app
  - Vince-child-app
```



### Configuring the Vince-child-app app in Vince-parent application.

Once the `Vince-child-app` is cloned we need to configure the `Vince-parent-app` folder to load the module from local.

1. Goto `vince-live-ui/nuxt.config.js` and scroll to `modules` section where you can define the nuxt module dependency.
2. Copy the full folder path of the `campaign` app and paste it as an entry to the modules array.
3. Comment / disable the dependency of the `campaign` app provided via `npm`.

Example:

```js
...
...
** Nuxt.js modules
  */
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
        '@nuxtjs/pwa',
        'F:\\Vince\\UI\\vincesoftware-apps-plantagen-campaign'
    ],
...
...
```

### Generating routes in `Vince-Child-App` app

Run the below script in the `Vince-child-app` folder.
```powershell
npm run build-route
```

### Running locally

The app can be only started and executed in Vince Live application, so to run and debug the app we need to follow the below steps:

1. Goto `vince-parent-app`
2. Run `npm run dev`
3. Edit your code in the app repository, any changed files will automatically update the VL UI web page 

<br>
