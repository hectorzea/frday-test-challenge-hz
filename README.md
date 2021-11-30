# Friday Test Challenge (Hector Zea)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The name of the application its called Vehilove

Vehilove is a simple application that allows you to pick first a make, then the app bring you all the models, and when you select a model it shows all the available vehicles and simple selecting one to finish =)

All of this done completly in TYPESCRIPT <3!

Desktop Version

![image](https://user-images.githubusercontent.com/19554398/143962865-3aafc419-c036-4dd7-acf6-90dd6e1bdd89.png)


Mobile Version

![image](https://user-images.githubusercontent.com/19554398/143962907-868bac09-25b2-42d7-84ab-a199fd3e587f.png)


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

![image](https://user-images.githubusercontent.com/19554398/143964001-716043ba-3959-4666-bc5c-8c931aa95a5f.png)

Provider: the provider is the responsible for moving and dispatching all this properties across the entire application, like selecting a make, model, or vehicle.

## How is the 503 random backend error resolved here?🧐🧐

Inside the provider is a function called loadData, that is the responsible for all the backend calls, its a generic function that receives an entity and if we have params we send a params object. all this calls are catched because at some random time when we call the backend a 503 error can happen. so this is solved in the application using a retry button

![image](https://user-images.githubusercontent.com/19554398/143964562-384e4780-793b-4e4c-b58d-c95e38c16c7d.png)

this process is used for the models and for the vehicles too, so, thats nice because the user can keep going with the process of selecting a vehicle without having a crash in the application 



