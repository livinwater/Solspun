
import React, {useState, Fragment, useEffect} from 'react';
//import { StyleSheet } from 'react-native';
import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea,
LeftIcon, RightIcon, StyledInputLabel, StyledTextInput, StyledButton, Colors, ButtonText,
Line, MsgBox, ExtraView, ExtraText, TextLink, TextLinkContent } from '../components/styles';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
//import { View} from 'react-native';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import {getPairInformationByChain, getPairsMatchingBaseTokenAddress, searchPairsMatchingQuery} from 'dexscreener-api';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

const {brand, darkLight, primary} = Colors;

function createData(
  assetName: string,
  quoteToken: string,
  chainId: string,
  dexId: string,
  priceUSD: string,
  priceChange: number,
) {
  return { assetName, quoteToken, chainId, dexId, priceUSD, priceChange};
}

// export default class Table1 extends Component {
//   constructor(props) {
//     super(props);
//     event.preventDefault();
//     const searchResponse = await searchPairsMatchingQuery("BTC USDC");
//     this.state = {
//       tableHead: ['Pair', 'Dex', 'Price', '24h Changes'],
//       tableData: [
//         ['1', '2', '3', '4'],
//         ['a', 'b', 'c', 'd'],
//         ['1', '2', '3', '456\n789'],
//         ['a', 'b', 'c', 'd']
//       ]
//     }
//   }

const HomePage = () => {
  const [data, setData] = useState(true);
  const [dexData1, dexCexData] = useState(true);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = React.useState([]);
  const existingRows: any[] = [];

  useEffect (() => {
    let ignore = false;
    if (!ignore)  getData()
    return () => { ignore = true; }
  }
  )

  async function getData(){
    //event.preventDefault();
    const searchResponse = await searchPairsMatchingQuery("BTC USDC");
    const searchResponse2 = await searchPairsMatchingQuery("ETH USDC");
    const searchResponse3 = await searchPairsMatchingQuery("SOL USDC");
    // const existingRows = rows;
    //: any[] = [];

    // existingRows.push(
    // createData(searchResponse.pairs[1].baseToken.symbol, searchResponse.pairs[1].quoteToken.symbol,
    //   searchResponse.pairs[1].chainId, searchResponse.pairs[1].dexId, searchResponse.pairs[1].priceUsd!,
    //   searchResponse.pairs[1].priceChange.h24),
    // createData(searchResponse2.pairs[0].baseToken.symbol, searchResponse2.pairs[0].quoteToken.symbol,
    //     searchResponse2.pairs[0].chainId, searchResponse2.pairs[0].dexId, searchResponse2.pairs[0].priceUsd!,
    //     searchResponse2.pairs[0].priceChange.h24),
    // createData(searchResponse3.pairs[1].baseToken.symbol, searchResponse3.pairs[1].quoteToken.symbol,
    //       searchResponse3.pairs[1].chainId, searchResponse3.pairs[1].dexId, searchResponse3.pairs[1].priceUsd!,
    //       searchResponse3.pairs[1].priceChange.h24)
    // );

    const dataList = [
      {
         "Pair":searchResponse.pairs[1].baseToken.symbol+'/'+searchResponse.pairs[1].quoteToken.symbol,
         "Dex":searchResponse.pairs[1].dexId,
         "Price":searchResponse.pairs[1].priceUsd!,
         "Change":searchResponse.pairs[1].priceChange.h24
      },
      {
        "Pair":searchResponse2.pairs[0].baseToken.symbol+'/'+searchResponse2.pairs[0].quoteToken.symbol,
        "Dex":searchResponse2.pairs[0].dexId,
        "Price":searchResponse2.pairs[0].priceUsd!,
        "Change":searchResponse2.pairs[0].priceChange.h24
     },
     {
      "Pair":searchResponse3.pairs[1].baseToken.symbol+'/'+searchResponse3.pairs[1].quoteToken.symbol,
      "Dex":searchResponse3.pairs[1].dexId,
      "Price":searchResponse3.pairs[1].priceUsd!,
      "Change":searchResponse3.pairs[1].priceChange.h24
   },
  ];
    
  return (
      <div>
      {dataList.map(function(d, idx){
         return (<li key={idx}>{d.Pair}</li>)
       })}
      </div>
    );
  }

  //  console.log(data);
  //   return (
  //     // <Fragment>
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>Pair</th>
  //             <th>Dex</th>
  //             <th>Price</th>
  //             <th>24 Change</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {dataList.map(item => {
  //             return (
  //               <tr key={item.Pair}>
  //                 <td>{ item.Dex }</td>
  //                 <td>{ item.Price }</td>
  //                 <td>{ item.Change}</td>
  //               </tr>
  //             );
  //           })}
  //         </tbody>
  //       </table>
  //   );
      /* <StyledContainer>
      <StatusBar style='dark'/>
        <StyledFormArea>
                 <StyledButton onPress={getData}>
                   <ButtonText> Generate </ButtonText>
                </StyledButton>
                
        </StyledFormArea>
        </StyledContainer>
        </Fragment> */
      /* // <StyledContainer>
      //   <StatusBar style='dark'/>
      //   <InnerContainer>
      //     <PageTitle>SolSpun</PageTitle>
      //     <SubTitle>Funds</SubTitle>
      //     <StyledFormArea>
      //           <StyledButton onPress={getData}>
      //             <ButtonText> Login </ButtonText>
      //           </StyledButton>
      //           <Line/>
      //         </StyledFormArea>
      //   </InnerContainer>
      //  </StyledContainer> */
  
        
  
  }

export default HomePage;




