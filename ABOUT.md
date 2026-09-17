### Network Infrastructure Demo

This demo illustrates a network infrastructure monitoring and management tool using VisuallyJS in an Angular application.

#### How it works

The demo combines a network diagram built with `vjs-diagram` and integrated charts (`vjs-pie-chart`, `vjs-bar-chart`) to visualize both the topology and the associated data of the network elements.

#### Components Used

- `vjs-diagram`: Displays the network topology.
- `vjs-diagram-palette`: Provides network equipment symbols.
- `vjs-controls`: Standard navigation controls.
- `vjs-pie-chart`: Displays data (like device status or types) in a pie chart.
- `vjs-bar-chart`: Displays data (like traffic or load) in a bar chart.

#### Component Options

The components are configured as follows:
- `vjs-diagram`: Uses `diagramOptions` to set up equipment shapes and link behaviors.
- `vjs-diagram-palette`: Configured with custom `iconSize` and `dragSize` for high-quality equipment icons.
- `vjs-pie-chart` and `vjs-bar-chart`: Configured with `useModel: true`, which allows them to automatically reflect data from the diagram's underlying data model.

#### Stylesheets

For the VisuallyJS components to render correctly, the following stylesheets must be included in the project (usually in `styles.css`):

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
@import "@visuallyjs/browser-ui-angular/css/visuallyjs-angular.css";
```
