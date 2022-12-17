import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea,
LeftIcon, RightIcon, StyledInputLabel, StyledTextInput, StyledButton, Colors, ButtonText,
Line, MsgBox, ExtraView, ExtraText, TextLink, TextLinkContent } from '../components/styles';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { View} from 'react-native';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

const {brand, darkLight, primary} = Colors;

const SignUp = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <StatusBar style='dark'/>
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/images/logo1.png')}></PageLogo>
        <PageTitle>SolSpun</PageTitle>
        <SubTitle>Account Sign Up</SubTitle>

        <Formik
          initialValues={{username:'', telegramUsername:'', password: '', confirmPassword: ''}}
          onSubmit = {(values)=> {
            console.log(values);
            navigation.navigate('Login')
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <StyledFormArea>
              <MyTextInput label='Username' icon='person' placeholder='Andy' placeholderTextColor={darkLight}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value = {values.username}
              keyboardType='username-id'
              />
              <MyTextInput label='Telegram Username' icon='person' placeholder='@solspun' placeholderTextColor={darkLight}
              onChangeText={handleChange('telegramUsername')}
              onBlur={handleBlur('telegramUsername')}
              value = {values.telegramUsername}
              keyboardType='username-id'
              />
              <MyTextInput label='Password' icon='lock' placeholder='***' placeholderTextColor={darkLight}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value = {values.password}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
              />
              <MyTextInput label='Confirm Password' icon='lock' placeholder='***' placeholderTextColor={darkLight}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value = {values.confirmPassword}
              secureTextEntry={hidePassword}
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText> Sign Up </ButtonText>
              </StyledButton>
              <Line/>
              <ExtraView>
                <ExtraText> Already have an account? </ExtraText>
                <TextLink onPress={()=> navigation.navigate('Login')}>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )
        }
        </Formik>
      </InnerContainer>


    </StyledContainer>


  );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off': 'md-eye'} size ={30} color={darkLight}/>
        </RightIcon>


      )
      }
    </View>
  )
}

export default SignUp;
/*import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
//onst CoinGecko = require('coingecko-api')
/** 
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page 1</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}*/




// export default function App (){
//   const [fetchingData, setFetchingDataState] = React.useState(true);
//   const [items, setItems] = React.useState([]);

//   React.useEffect(() => {
//       //let a = getCoingeckoList();
//       //console.log(a)
//   },[]);
//   setTimeout(()  =>{
//     setFetchingDataState(false);
//   }, 1000);

//   if (fetchingData){
//     return <Loading />
//   }
//   else {
//     return <Home data = {items} />
//   }
// }

// async function getCoingeckoList(){
//   const CoinGeckoClient = new CoinGecko();
//   let data = await CoinGeckoClient.coins.list();
//   let data2 = await CoinGeckoClient.order.MARKET_CAP_DESC;
//   let b = data.data.slice(0.10);
//   console.log(data2);
// }

// let flag = true;

// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <Text>This is the home screen of app</Text>
//     </View>
//   );
// }

// const Loading = () =>{
//   return (
//     <View style={styles.container}>
//       <Text>Loading...</Text>
//     </View>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
