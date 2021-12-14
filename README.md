
# RECORDS APP 

Small and easy app, built maybe for an Album Store owner, in which you can register your favourite Albums from all times and add some information about them. 
You can also leave a message so that you can contact with the Store.

I used <https://firebase.google.com/> for the backend.

### Core Concepts 
Here there are some of the core concepts that you ll learn if you want to work with this code!

* Vuex.
* Vue Router.
* Use Firebase as a Backend.
* HTTP Requests using the Fetch and also AXIOS.
* Login and Authentication (How to deal with Token).
* How to deploy a project.
* Using Firebase for Deploying the project.


## Getting Started

### Cloning the Project:

git clone <https://github.com/delvalj/RecordsApp.git>

## Installing

###  How to Install it

Open the terminal and run: 

- npm install

## Starting 

### Open the project in LocalHost:

In the terminal: 

- npm run serve

## Deployment

Add additional notes about how to deploy this on a live system.

In order to deploy the project i used the Firesbase Hosting option.
In your local console in Firebase you have the option HOSTING. Go for it.

After that you ll have to install some things to make it work...

- npm run build

After you are done with these you ll find a new directory called DIST. This is the project with all the optimization needed for firebase.

Then, following Firebase instructions

- npm install -g firebase-tools
- firebase login
- firebase init
- firebase deploy

## Built With

* [VUE.JS 3] 
<https://v3.vuejs.org/>
  
## Dependencies

   * "axios": "^0.24.0",
   * "core-js": "^3.6.5",
   * "vue": "^3.0.0",
   * "vue-axios": "^3.4.0",
   * "vue-router": "^4.0.12",
   * "vuex": "^4.0.2"

## Authors

* **Joaquin del Val** - *Initial work* - [delvalj] 
 https://github.com/delvalj
  
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
