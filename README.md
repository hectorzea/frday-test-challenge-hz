# Friday Test Challenge (Hector Zea)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The name of the application its called Vehilove

Link of the application video ---> https://www.youtube.com/watch?v=MkhnhO_9Fco&ab_channel=HectorZea

Vehilove is a simple application that allows you to pick first a make, then the app bring you all the models, and when you select a model it shows all the available vehicles and simple selecting one to finish =)

All of this done completly in TYPESCRIPT <3!

# Installing the project!

To run thid project do the following:

1) download and start the api server provided by Friday
   https://www.dropbox.com/s/i3bjhj90ccbtf1w/friday-code-challenge.zip?dl=0&file_subpath=%2Fapiserver
 
2) enter inside the downloaded folder and use the command "node apiserver/server.js" to start the backend server

3) start the frontend with "yarn start" 
  
and when everything its up, it will automatically open the http://localhost:3000/
   

Desktop Version

![image](https://user-images.githubusercontent.com/19554398/143962865-3aafc419-c036-4dd7-acf6-90dd6e1bdd89.png)


![image](https://user-images.githubusercontent.com/19554398/143968394-3b39775d-3d9d-4f49-acca-24c4ef82ea65.png)


Mobile Version

![image](https://user-images.githubusercontent.com/19554398/143962907-868bac09-25b2-42d7-84ab-a199fd3e587f.png)

![image](https://user-images.githubusercontent.com/19554398/143968441-03111183-643d-4113-bf8a-ecf043be2b6c.png)



## Available Scripts

In the project directory, you can run to start the project:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

You can run all the entire tests using this command =3 

## Technical Solution 👌

Well, im gonna start explaining how i thought about the process to select a car.

At first, the user need to find a make to see al the models related, and with the model and the make we can select a vehicle.

The approach i took for the data flow in the app was using Context / Providers because the scope is short - middle term project

The first thing i did was to create the Context and then the provider

Context: this is like the body of how my data flow will be working, this is called AppContext and has all the initial default values

![image](https://user-images.githubusercontent.com/19554398/143965173-9e498afa-1c78-41ac-adab-3342d04c8f38.png)

![image](https://user-images.githubusercontent.com/19554398/143964001-716043ba-3959-4666-bc5c-8c931aa95a5f.png)

## How components are distributed on this application?🧐🧐

We have the main App Component that is super easy to read:

we have a vehicle selected?, we show the final step of the app, else we show the makes, if we have a make selected, we show the models too and if we have the make and the model we show the vehicles =)

![image](https://user-images.githubusercontent.com/19554398/143964805-d8ca0396-4291-40ce-81cd-d3c910fa7fc8.png)

Provider: the provider is the responsible for moving and dispatching all this properties across the entire application, like selecting a make, model, or vehicle. maybe its the most important file on the entire application

## what if the server is shutted down?🥲🥲🥲

if the server is shutted down i will warn you =) 
![image](https://user-images.githubusercontent.com/19554398/143967051-25c2d0ec-cd18-47eb-a9d8-b0cd3c980c36.png)


## How is the 503 random backend error resolved here?🧐🧐

Inside the provider is a function called loadData, that is the responsible for all the backend calls, its a generic function that receives an entity and if we have params we send a params object. all this calls are catched because at some random time when we call the backend a 503 error can happen. so this is solved in the application using a retry button, so, click retry until that random goes nice with you =)

![image](https://user-images.githubusercontent.com/19554398/143964562-384e4780-793b-4e4c-b58d-c95e38c16c7d.png)

![image](https://user-images.githubusercontent.com/19554398/143965029-f87c6ac5-314a-4f98-9b69-061deff66382.png)

![image](https://user-images.githubusercontent.com/19554398/143965049-eac17867-6bdd-40cc-b027-a61222abf506.png)


this process is used for the models and for the vehicles too, so, thats nice because the user can keep going with the process of selecting a vehicle without having a crash in the application 

## Third party libraries?🧐🧐

-axios
-styled components 

## Test Coverage🧐🧐

![image](https://user-images.githubusercontent.com/19554398/143966081-3791e80f-9d3d-4c5c-99f0-eec6c808b36b.png)


