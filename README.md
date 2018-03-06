# coffee-machine

A simple web application for simulating a coffee machine

## Methods

The `coffeeMachine` object has the following methods:

| Name           | Returns                       | Description                                       |
| -------------- | ----------------------------- | ------------------------------------------------- |
| `espresso`     | `<Object>` The current state  | Brews an espresso                                 |
| `americano`    | `<Object>` The current state  | Brews a café americano                            |
| `fillBeans`    | `<Number>` The current beans  | Refills the beans                                 |
| `fillWater`    | `<Number>` The current water  | Refills the water                                 |
| `emptyGrounds` | `<Number>` The current grouns | Empties the bean grounds                          |
| `getState`     | `<Object>` The current state  | Returns the current state of supplies and grounds |
