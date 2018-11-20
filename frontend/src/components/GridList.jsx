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

const getGridListSize = items => ({ height: items.length * logoPixelSize });

const GridListWrapper = ({
  classes,
  items = [],
  onAwayClick,
  dynamic = true
}) => (
  <ClickAwayListener onClickAway={onAwayClick}>
    <div id="wrapper-grid" className={classes.wrapper}>
      <GridList
        style={dynamic && getGridListSize(items)}
        className={classes.gridList}
        spacing={0}
        cols={3}
      >
        {items.map(item => (
          <GridListTile key={item.name} cols={1}>
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
  onAwayClick: PropTypes.func,
  dynamic: PropTypes.bool,
  items: PropTypes.array
};

GridListWrapper.defaultProps = {
  items: [],
  onAwayClick: () => null,
  dynamic: true
};

export default withStyles(styles)(GridListWrapper);
