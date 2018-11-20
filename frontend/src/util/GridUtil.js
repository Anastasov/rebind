/* eslint-disable */
import React from "React";
import Grid from "@material-ui/core/Grid";
/* eslint-enable */

export const createCols = (cols, containerProps, itemProps) => (
  <Grid
    container
    direction="row"
    spacing={8}
    justify="center"
    alignItems="center"
    {...containerProps}
  >
    {cols.map((row, index) => (
      <Grid key={index.toString()} item {...itemProps}>
        {row}
      </Grid>
    ))}
  </Grid>
);

export const createRows = (row, containerProps, itemProps) => (
  <Grid
    container
    direction="column"
    spacing={8}
    justify="center"
    alignItems="center"
    {...containerProps}
  >
    {row.map((col, index) => (
      <Grid key={index.toString()} item {...itemProps}>
        {col}
      </Grid>
    ))}
  </Grid>
);

export const createStyledRows = (row, containerProps, itemProps) => (
  <Grid
    container
    direction="column"
    spacing={8}
    justify="center"
    alignItems="center"
    {...containerProps}
  >
    {row.map((col, index) => {
      const currentProps = itemProps[index];
      return (
        <Grid key={index.toString()} item {...currentProps}>
          {col}
        </Grid>
      );
    })}
  </Grid>
);

export const createMatrix = (cells, containerProps, itemProps) =>
  createRows([createCols(cells, containerProps, itemProps)]);
