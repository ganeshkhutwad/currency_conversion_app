# Currency Conversion App

### To Run Application

* Extract “currency_conversion_app” or clone https://github.com/ganeshkhutwad/currency_conversion_app.git repository.
* Execute following commands
<pre><code>cd currency_conversion_app`
npm install
npm start  OR npm run start
</code></pre>
* Hit http://localhost:3000 url in the browser.


### To Run Automated Tests(Cypress Tests)
* There are two ways to run cypress tests

1. Run using cypress GUI
2. Record test cases through command line

**Note: Before running cypress tests, application should be in running state in separate command prompt.**
<pre><code>cd currency_conversion_app
npm run start
</code></pre>


##### Run using cypress GUI
<pre><code>cd currency_conversion_app
npm run cypress
</code></pre>

* It will bootstrap cypress UI and you will see a popup
* Click on home_page.spec.js

##### Record Tests
`npm run cypress_record`


### To Run Unit Tests(JEST Tests)
<pre><code>cd currency_conversion_app
npm run test
</code></pre>

**It might be possible sometimes don’t show test cases results due to no change. Just press key “A”**


