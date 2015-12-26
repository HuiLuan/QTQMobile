/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
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


 var SystemUrl_Key="SystemUrl_Key";

var SystemUrlSet=require('./SystemUrlSet');


var Login = React.createClass({


  getInitialState: function() {
    return {
     
     systemurl:null,

      colorProps: {
        titleColor: '#3b5998',
        subtitleColor: '#6a7180',
      },
    };
  },


  componentDidMount: function() {          
        this.SetSystemUrlFromStorage().done();

    },


    async  SetSystemUrlFromStorage()
    {      
        var surl=await AsyncStorage.getItem(SystemUrl_Key);     
        if(surl!==null)
        {     
          this.setState({systemurl:surl});     
        }          
    },


  render: function() {


    return (
 

  <ScrollView
      contentContainerStyle={{flex:1}}
      keyboardDismissMode='on-drag'
      keyboardShouldPersistTaps={false}
      >
     
      <ToolbarAndroid
      actions={toolbarActions}
      icon={require('./Image/setting.jpg')}
      onActionSelected={this.onActionSelected}     
      style={styles.toolbar}

      title="青铜器软件" />

  <View style={{flex:1,flexDirection: 'column'}}>

      <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>

<Text style={{}}>

 Q3 管理系統
</Text>     

      <TextInput      style={styles.input}      placeholder='用户名'/>
      <TextInput      style={styles.input}      placeholder='密码'      password={true}/>

      <TouchableOpacity style={styles.btn}  onPress={() =>           
      {
         this.SetSystemUrlFromStorage()
          if(this.state.systemurl===''||this.state.systemurl===null)
          {
             ToastAndroid.show('请先设置系统地址！', ToastAndroid.LONG)
          }
          else
          {
            ToastAndroid.show('获得系统地址：'+this.state.systemurl,ToastAndroid.LONG)}
          }
      }>

      <Text style={styles.text}>登  录</Text>
      </TouchableOpacity>

      </View>

      </View>
      </ScrollView>

    );
  },


onSettingClick:function(){

var _this=this;
const {navigator} =this.props;

if(navigator)
{
  navigator.push({
    name:SystemUrlSet,
    component:SystemUrlSet,
    params:{     
    
       getSystemUrl: function(systemurl) {
                        _this.setState({
                            systemurl: systemurl
                        })
                    },
    }
  }); 
}

},


  onActionSelected: function(position) {
  if (position === 0) { // index of 'Settings'
     //ToastAndroid.show('点击了设置', ToastAndroid.LONG)
 this.onSettingClick();
  }
},

});


var toolbarActions = [
  // {title: 'Filter'},
   {title: '设置', icon: require('./Image/setting.jpg'), show: 'always'},
];

var styles = StyleSheet.create({


  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFF'
  },
  btn: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3333FF',
    height: 40,
    borderRadius: 5,
    marginTop: 10
  },

  input: {
    marginTop: 20,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightblue',
    paddingLeft:20,
    paddingRight:20,
  },

  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
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
    marginBottom: 5,
  },
});
module.exports = Login;