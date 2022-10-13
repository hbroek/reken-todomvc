# reken-todomvc
Reken based implementation of the TodoMVC reference application. 

## About TodoMVC
For more information about TodoMVC goals and functionality see the [todomvc.com] website(https://todomvc.com/).

## Reken based implementation
In this section we list out the various Reken functionality (attributes) we use to implement the TodoMVC application

### Dynamic HTML
The dynamic state based HTML is generated with the **data-text** and the **data-html** attributes See for example the text of the todo items and the display number of todos left.

It also uses the **data-if** attribute to conditional display HTML content. For example the "Clear completed" button and the whole footer.

The **data-for** attribute is used to generate the list of todos based on a JS array.
### Data Binding
On the todo input control and the task completion checkboxes we use the **data-value** attribute to bind the input controls to their state.

### Dynamic Styling
Classes conditionally enabled with the **data-class** attribute. See the current filter status.

### User actions
User clicks are acted on with the **data-action** attribute. And input control value change events are acted on with  the **data-on-change** event.

### Routing
In the Single Page application various routing states are captured with the **data-route** attribute. It shows the same UI but with a different task filter based on the routing variable currentFilter.
