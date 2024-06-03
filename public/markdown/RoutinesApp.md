# Routines App

![Test Image](./images/kastra.jpg)

###### ["Expo", "Sqlite", "React Native", "Typescript"]

## Summary

This is a mobile app that helps users manage their daily routines in an ordered manner, allowing for more control over the visual progress they have of their daily tasks. I built the app using Expo and React Native to allow for simple cross-platform development, allowing me significantly faster development speeds compared to native development. As apps have much different requirements from webpages, I had to learn a signficantly deeper set of skills for React than I had needed before, resulting in me today being much more comfortable with the library and laying the groundwork for my [other project involving complex React topics](/Portfolio), as well as my future work with React Native (coming soon!). This project is also my first experience working with Google's Material Design language, which I found to provide the best user interface for the app.

The app allows users to create Routines, which are logical groupings of daily tasks. These tasks can be marked as complete, semi-complete, or incomplete, allowing the user fine control over how they feel their tasks went, as well as an appealing visual layout to go with it.

## Challenges

This was my first time diving in to creating and implementing a user interface completely independently. As the visual experience was my highest priority for the app, I spent the bulk of my time creating and improving upon this aspect of the app. I often ran into challenges related to how to display information, which I almost always solved by looking at official Android and Google apps that conformed to Material Design guidelines.

All of the remaining challenges I solved revolved around React Native's implementation, which required careful study to implement native-feeling components in a non-native environment. The largest challenge was implementing a reorderable list of the tasks and routines in the app that didn't compromise on the design nor on the user experience. Straightforward implementations of reorderable lists in React Native did not provide the drag-and-drop functionality I thought best suited the app, and often resulted in sub-20 FPS performance due to the interactions between the input handler, the javascript engine, and the UI thread. I eventually solved this by creating my own reusable list component using the PanResponder API and custom React hooks, which allowed me to have a smooth (60+ FPS) drag-and-drop experience that felt native to the app, all without limiting user interaction with the list items.

## Future

Currently, I had to pause development on this project to focus on others, and due to difficulties implementing a calendar view for the app. I plan to return to this project in the future to complete the demo and, eventually, publish the app.
