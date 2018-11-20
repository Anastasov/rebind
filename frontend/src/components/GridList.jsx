/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { withStyles } from "@material-ui/core/styles";
import styles, { logoPixelSize } from "./GridListStyles";
import Icon from "./Icon";
import { doIfChildOf } from "../util/ObjectUtils";
/* eslint-enable */

const getGridListSize = (items, spacing) => ({
  height: items.length * (logoPixelSize + spacing)
});
const MAXIMUM_NUMBER_OF_ICONS_ON_MODAL = 24;
const GridListWrapper = ({
  classes,
  items = [],
  spacing = 0,
  cols = 3,
  onAwayClick,
  dynamic = true
}) => (
  <ClickAwayListener onClickAway={onAwayClick}>
    <div
      id="wrapper-grid"
      className={
        items && items.length > MAXIMUM_NUMBER_OF_ICONS_ON_MODAL
          ? classes.wrapper_scroll
          : classes.wrapper
      }
    >
      <GridList
        style={dynamic && getGridListSize(items, spacing)}
        className={classes.gridList}
        spacing={spacing}
        cols={cols}
      >
        {items.map(item => (
          <GridListTile
            style={{ height: 75, width: "" }}
            key={item.name}
            cols={1}
          >
            <ClickAwayListener
              onClickAway={doIfChildOf("wrapper-grid", item.onClickAway)}
            >
              <div
                className={item.selected ? classes.item_selected : classes.item}
              >
                <Icon
                  onClick={item.onClick}
                  className={classes.image}
                  name={item.name}
                  alt={item.title}
                />
              </div>
            </ClickAwayListener>
          </GridListTile>
        ))}
      </GridList>
    </div>
  </ClickAwayListener>
);

GridListWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  cols: PropTypes.number,
  spacing: PropTypes.number,
  onAwayClick: PropTypes.func,
  dynamic: PropTypes.bool,
  items: PropTypes.array
};

GridListWrapper.defaultProps = {
  items: [],
  cols: 3,
  spacing: 0,
  onAwayClick: () => null,
  dynamic: true
};

export default withStyles(styles)(GridListWrapper);
