import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const NativeToWeb = (props) => {
  const consentConfig = {
    ContentSquare: true,
    Eulerian: true,
    GMP_FL: true,
    google_analytics: false,
  };

  const data = `const consentConfig = {
    ContentSquare: ${consentConfig.ContentSquare},
    Eulerian: ${consentConfig.Eulerian},
    GMP_FL: ${consentConfig.GMP_FL},
    google_analytics: ${consentConfig.google_analytics}}`;

  return (
    <>
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{
            html: `<body style="display:flex;justify-content:center;flex-direction:column;align-items:center">
                      <h2>React native webview</h2>
                      <button style="color:red; height:100;width:300; font-size:30px"
                        onclick="showConsent()">show consent params</button>
                      <p id="demo"></p>
                      <script>
                      function showConsent() {
                        if (consentConfig) {
                          window.alert('consentConfig.ContentSquare : '+ consentConfig.ContentSquare)
                        }else{
                           window.alert('no consentConfig setted');
                        }
                      }
                    </script>
           </body>`,
          }}
          injectedJavaScriptBeforeContentLoaded={data}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  flexContainer: {
    flex: 1,
  },
});
export default NativeToWeb;
