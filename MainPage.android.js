/**
 * Created by luanhui on 2015/12/26.
 */

'use strict';
var React = require('react-native');
var Tabs = require('react-native-tabs');

var {
    StyleSheet,
    Text,
    ToolbarAndroid,
    View,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
    ToastAndroid,
    AsyncStorage,
    } = React;


var SystemUrl_Key = "SystemUrl_Key";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var self = this;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    Selected page: {this.state.page}
                    Selected selected: {this.state.selected}
                </Text>
                <Tabs selected="first" style={styles.tabs}
                      onSelect=
                          {
                          function(el)
                            {
                              self.setState({page: el.props.name});
                              return {selected: true}
                            }
                      }>

                    <View name="first"  style={styles.itemview} >
                        <Text>消息</Text>
                        <Image  source={require('./Image/icon1.png')}></Image>
                    </View>


                    <View name="second" style={styles.itemview} >
                        <Text>功能</Text>
                        <Image  source={require('./Image/icon2.png')}></Image>
                    </View>


                    <View name="third" style={styles.itemview} >
                        <Text>报表</Text>
                        <Image  source={require('./Image/icon3.png')}></Image>
                    </View>

                    <View name="fourth" style={styles.itemview} >
                        <Text>我</Text>
                        <Image  source={require('./Image/icon4.png')}></Image>
                    </View>

                </Tabs>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 50,
    },
    tabs:{
        backgroundColor:'white',
        height:100
    },
    itemview:{
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        height:180,
    },
});

module.exports = MainPage;