# __Assignment #3: Part 2__
DIaper App
​
## About
This is an app called diaper. it is an app used to help parent record and track their baby's activties.
​
## Objective
Teaching the parents to have a healthy routine with their baby. The app is designed to make parents' lives easier, covering tricky topics like breastfeeding, diet, sleep training and more.
​
​
Tracking baby activity, feeding times and baby's behaviour towards food. 
​
## Profile 
User can sign up and log into an account.
​
## Timer 
User can record time laps of feeding time and save them on the analytics page
​
## Bottle Page
this page gave you the ability to record which liquids your baby likes. You can keep a recording of them to.
​
## Solid Page
What type of food does your baby like.This page give you the ability to record which food your baby likes. You can keep a recording of them to.
​
## User Stories
​
As a mother, I want to record and track my baby’s sleep
As a mother, I want a record of breast, bottle and solid feeds
As a mother, I want to record the number and type of diaper changes
As a mother, I want to learn tips for baby and parenting
As a mother, I want to keep a diary and picture of the day to make a photo album later.
As a father , I want to have an account so I  know how I can assist my wife and be a better father to my children.
As a mother, I want to record my child’s milestones, progress and growth. 
As a sibling, I want to know how I can care and play with brother/sister 
​
## Roadmap:
​
Q1 - Develop Firebase Account
​
Q2 - Allow users to connect to firebase via email. Allow Firebase to render the User names and email onto app
​
​
Q3 - Allow users to record ans store time lapses onto firebase account.
​
Q4 - Allow users to be able to select and measure liquids required for baby feeding.
​
## Backlog 
​
The things we would love to continue to work on
​
We were not able to get the diaper feature worling because of the ardunio sensors
Creating multiple accounts to control the same child
Chat group fro multiple accounts
​
​
​
## Dependencies
​
    * axios": "^0.19.0"
    * expo": "^35.0.0"
    * firebase": "^7.2.2"
    * firebase-admin": "^8.6.1"
    * native-base": "^2.13.8"
    * react": "16.8.3"
    * react-dom": "16.8.3"
    * react-native": "https://github.com/expo/react-native/archive/sdk-35.0.0.tar.gz"
    * react-native-elements": "^1.2.7"
    * react-native-gesture-handler": "^1.4.1"
    * react-native-vector-icons": "^6.6.0"
    * react-native-web": "^0.11.7"
    * react-navigation": "^4.0.10"
    * react-navigation-drawer": "^2.3.3"
    * react-navigation-stack": "^1.10.3"
    * react-navigation-tabs": "^2.5.6"
​
## Set UP and Instration
​
1.Create a new folder - Change the directory where you want to install the folder
​
```
expo init <app_name>
```
​
2.When prompted, choose blank and hit keyborad key: enter
​
3.Inset app name and choose yarn dependency (y) if you want to use yarn
​
4.Change the directory to the file where you created now
​
```
cd file_name
```
​
5.Execute
​
```
git add -A
git commit -m "first message"
```
​
6.add **/node_modules in gitignore
​
7.Execute again
​
```
git commit -m "first message"
```
​
```
git commit -m "second message"
```
​
8.Go to github.com and create a new repository
​
9.Copy SSH and pase cli
​
```
git remote add origin git@github.com:xxxx/xxxxxxgit
```
​
```
git push -u origin master
```
​
```
expo start
```
or
```
yarn start
```
​
## Start cli Instructions
​
1.Move the directory to work
​
​
```
expo start
```
​
or
​
```
yarn start
```
​
2.When QR Code apperars in terinal window, you can load the app through
*Web browser (q)
*android simulator (a)
*ios simulator (i)
*Scan QR Code with camera app on ios to see app on device
