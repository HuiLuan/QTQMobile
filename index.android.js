/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    Navigator,

    } = React;

var Login=require('./Login');

var QTQMobile = React.createClass({
  render: function() {

    var defaultName = 'Login';
    var defaultComponent = Login;

    return (
        <Navigator
            initialRoute={{ name: defaultName, component: defaultComponent }}
            configureScene={() => {
            //动画
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
            renderScene={(route, navigator) => {
            let Component = route.component;
            if(route.component) {
              return <Component {...route.params} navigator={navigator} />
            }
          }} />

    );
  }
});
AppRegistry.registerComponent('QTQMobile', () =>QTQMobile);
