import React, {useState, useEffect} from 'react';

import {
  Text,
  View,
  Button,
  StyleSheet,
  Alert,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

import {bold, plane} from '../../assets/font';

//import {checkLogin} from '../../redux/actions';
import {ScrollView} from 'react-native-gesture-handler';
//import * as KakaoLogins from '@react-native-seoul/kakao-login';

const {width, height} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [id, setId] = useState('');
  const [passwd, setPasswd] = useState('');
  const [secretpasswd, setSecretpasswd] = useState('');
  const [checkPoint, setCheckPoint] = useState(false);

  useEffect(() => {}, []);

  const onLogin = async () => {
    //확인
    if (id == '' || passwd == '') {
      Alert.alert(
        '실패',
        '아이디 혹은 비밀번호가 잘못됐습니다.\n다시 확인해주세요.',
        [
          {
            text: '확인',
            style: 'cancel',
          },
        ],
      );
    } else {
      let body = {
        id: id.toLowerCase(),
        passwd: passwd,
      };
    }
  };

  const signInWithKakao = async () => {
    const token = await KakaoLogins.login();
    console.log(token);
    //setResult(JSON.stringify(token));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text></Text>
          <TextInput
            style={styles.input}
            placeholder="  아이디"
            onChangeText={n => {
              setId(n);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder=" 비밀번호"
            secureTextEntry={true}
            right={<TextInput.Icon name="eye" />}
            onChangeText={n => {
              setPasswd(n);
            }}
          />
        </View>
        <View style={styles.login}>
          <TouchableOpacity style={styles.login} onPress={onLogin}>
            <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.reg}
          onPress={() => {
            navigation.navigate('Register');
            //signInWithKakao();
          }}>
          <Text style={styles.regText}>회원가입</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  logo: {
    height: 200,
    width: 200,
    marginTop: 75,
  },
  login: {
    backgroundColor: 'rgb(64,183,173)',
    flexDirection: 'row',
    width: width - 50,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 25,
    fontFamily: bold,
  },
  input: {
    borderRadius: 10,
    width: width - 50,
    height: 50,
    paddingVertical: 10,
    marginVertical: 10,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'black',
    textAlign: 'center',
  },
  inputContainer: {},
  reg: {
    flexDirection: 'row',
    width: width - 50,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  regText: {
    color: 'black',
    fontSize: 17,
    fontFamily: bold,
  },
  checkContainer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 60,
  },
  checkPoint: {
    borderRadius: 20,
    width: 30,
    height: 30,
    borderColor: 'grey',
    borderWidth: 2,
    marginHorizontal: 10,
    justifyContent: 'flex-start',
  },
  checked: {
    backgroundColor: 'black',
  },
  checkIcon: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
  },
  checkText: {
    color: 'black',
    fontFamily: plane,
    fontSize: 17,
  },
});