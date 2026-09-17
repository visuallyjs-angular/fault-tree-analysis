# Fault Tree Analysis

This application provides a Fault Tree Analysis diagram with a list of cut sets and a Fussell-Vesely risk contribution chart.

https://visuallyjs.com/demonstrations/fault-tree-analysis

![Fault Tree Analysis screenshot](https://static.visuallyjs.com/img/app-card/fault-tree-analysis-2400.png)


## Architecture

The app consists of three views - the FTA diagram, a Cut Sets view, and a risk contribution chart, and showcases a number of different capabilities that VisuallyJs offers:

- Diagram component - a pannable and zoomable SVG element that uses a shape library to draw vertices
- A diagram palette - the ability to drag/drop new shapes onto the canvas
- Drop on edge - dropping a new shape onto an edge splits the edge automatically, connecting the new shape to the edge's original target, and setting the new shape as the original edge's target.
- Column chart - the risk contribution view uses a ColumnChartComponent

### Diagram

The diagram uses a `DiagramComponent`, which is configured by `diagram-options.ts`. 

- Shapes are provided by a dedicated FTA shapes library, consisting of several event types and logic gates. 
- The diagram has an absolute layout.
- Cells are not rotatable or resizable
- A simple mediator is set on the diagram to prevent edges being dragged from a `top-event`.

### Cut Sets

The `MinimalCutSets` component uses the `useVisuallyJsUpdate` hook as a trigger to compute the list of cut sets in the diagram, which are displayed in a priority list.

### Risk contribution chart

Risk is displayed in a `ColumnChartComponent`, using the cut sets in the dataset. The chart uses the Fussell-Vesely methodology to rank risks.
