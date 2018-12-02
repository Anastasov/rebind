/* eslint-disable */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Slider from "react-slick";
import styles from "./styles/CardsPageStyles";
import {
  authInfoSelector,
  cardsSelector,
  profileInitializerSelector
} from "../../reducers/rootReducer";
import { showNavActionCreator } from "../../reducers/nav/navActionCreators";
import { fetchCardsData } from "../../reducers/card/cardDuck";
import responsiveComponent from "../../meta-components/responsiveComponent";
import { hasOwnProps, endsWith } from "../../util/ObjectUtils";
import Card from "./Card";
import { changeCardname, changeField } from "../../reducers/card/cardDuck";
import { CARDS_TAB_PATH } from "../../components/nav/BottomNavigationTabs";
import authComponent from "../../meta-components/authComponent";
import { fetchProfileData } from "../../reducers/profile/profileActionCreators";
/* eslint-enable */

class CardsPage extends Component {
  static defaultProps = {
    profile: null
  };

  static propTypes = {
    classes: PropTypes.object.isRequired,
    profile: PropTypes.object
  };

  componentDidMount() {
    const { authInfo, fetchCards, fetchProfile } = this.props;
    const { id } = authInfo;
    if (id) {
      fetchProfile(id);
      fetchCards(id);
    }
  }

  changeCardName = id => (field, name) => {
    const { authInfo, synchCardName } = this.props;
    synchCardName(authInfo.id, id, id ? { name } : name);
  };

  toggleVisibilityOnUser = (cardId, field, hidden) => {
    const { authInfo, page, synchFieldVisibility } = this.props;
    const { cards } = page;
    const card = cards.filter(c => c.id === cardId)[0];
    const isNotHidden = !hidden;
    const update = {};
    if (field.startsWith("bind_")) {
      const bindId = field.substring("bind_".length);
      update.binds = card.protectedBinds.map(bind => {
        if (bindId === `${bind.id}`) {
          bind.bindCheck = isNotHidden;
        }
        return bind;
      });
    } else if (endsWith(field, "Field")) {
      update[field] = { value: card.user[field].value, hidden: isNotHidden };
    } else {
      update[field] = isNotHidden;
    }
    synchFieldVisibility(authInfo.id, cardId, update, field);
  };

  render() {
    const { classes, page, profile } = this.props;
    const { cards } = page;
    const settings = {
      initialSlide: 0,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      centerMode: true,
      centerPadding: 20
      // beforeChange(currentSlide, nextSlide) {
      //   console.log("before change", currentSlide, nextSlide);
      // },
      // afterChange(currentSlide) {
      //   console.log("after change", { currentSlide, ...cards });
      // }
    };

    const emptyCard = {
      id: 0,
      cardname: "",
      user: {
        usernameField: { value: profile.username, hidden: true },
        emailField: { value: profile.email, hidden: true },
        firstNameField: { value: profile.firstName, hidden: true },
        lastNameField: { value: profile.lastName, hidden: true },
        phoneField: { value: profile.phone, hidden: true },
        postcodeField: { value: profile.postode, hidden: true }
      },
      protectedBinds: profile.binds.map(bind => ({
        ...bind,
        bindCheck: true
      }))
    };
    let array = cards.concat([emptyCard]);
    if (cards.length === 0) {
      array = array.concat([emptyCard]);
    }

    return (
      <div className={classes.root}>
        <div className={classes.root_body}>
          <div style={{ height: 600 }}>
            {!page.initializing && (
              <Slider {...settings}>
                {array.map((card, index) => (
                  <div key={card.id + index}>
                    <Card
                      form={`card-${card.id || 0}`}
                      initialValues={card}
                      setName={this.changeCardName}
                      toggleSwitch={this.toggleVisibilityOnUser}
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const StyledCardsPage = responsiveComponent(CardsPage, {
  vertical: styles,
  horizontal: styles
});

const mapStateToProps = state => ({
  authInfo: authInfoSelector(state),
  profile: profileInitializerSelector(state),
  page: cardsSelector(state)
});
const mapDispatchToProps = {
  showNav: showNavActionCreator,
  fetchProfile: fetchProfileData,
  fetchCards: fetchCardsData,
  synchFieldVisibility: changeField,
  synchCardName: changeCardname
};
const ReduxCardsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledCardsPage);

export default authComponent(ReduxCardsPage, CARDS_TAB_PATH);
