  'use strict';

  var React = require('react-native');
  var {  
    StyleSheet,
    Text,
    View,
    TextInput,  
    TouchableOpacity,
    ToastAndroid,
    AsyncStorage,
    BackAndroid,
  } = React;




  var Login=require('./Login');

  var SystemUrl_Key="SystemUrl_Key";

  var SystemUrlSet=React.createClass({

  getInitialState:function(){

    return {
      systemurl:'',
    };
  },


  _updateText:function(texturl){
    this.setState({systemurl:texturl,});

  // this.setState((state)=>{
  // 	return {
  // 		systemurl:state.systemurl+texturl,
  // 	};
  // });

  },

  componentDidMount: function() 
  {
    //这里获取从FirstPageComponent传递过来的参数: id

    this._loadInitialState().done();

    this.setState({       //id: this.props.id
  });

     const { navigator } = this.props;

      BackAndroid.addEventListener('hardwareBackPress', function() {
          if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
          }
          return false;
      });


},

 componentWillUnmount() {
      BackAndroid.removeEventListener('hardwareBackPress');
    },



  async _loadInitialState()
  {

    try
    {

      var surl=await AsyncStorage.getItem(SystemUrl_Key);     
      if(surl!==null)
      {     
        this.setState({systemurl:surl});     
      }
        else
      {
  // ToastAndroid.show('没有获取到systemurl:', ToastAndroid.LONG)
  }
  }
  catch(error)
  {
    ToastAndroid.show('错误信息：'+error.message, ToastAndroid.LONG)
  }

  },




  async  _savePress()
  {

  if(this.state.systemurl==='')
  {
    ToastAndroid.show('请输入系统地址', ToastAndroid.LONG);
    return;
  }

  const { navigator } = this.props;
  if(this.props.getSystemUrl)
  {	
    this.props.getSystemUrl(this.state.systemurl); 
  }

  try {

    await AsyncStorage.setItem(SystemUrl_Key, this.state.systemurl);

  } catch (error) {

   ToastAndroid.show('错误信息：'+error.message, ToastAndroid.LONG);
  }

  ToastAndroid.show('保存成功', ToastAndroid.LONG);

  if(navigator) {
        //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPage了
        navigator.pop();
      }

    },


    render:function(){

     return(

      <View style={{flex:1}}>


      <TextInput     style={styles.input}  value={this.state.systemurl}  onChange={(event) => this._updateText(event.nativeEvent.text)}   placeholder='输入服务器地址'/>

      <TouchableOpacity style={styles.btn}  onPress={() =>

          //ToastAndroid.show('This is a toast with long duration', ToastAndroid.LONG)
          this._savePress()

        }>
        <Text style={styles.text}>保  存</Text>
        </TouchableOpacity>

        </View>
        );
   },

  });

  var styles=StyleSheet.create({
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

  });

  module.exports = SystemUrlSet;