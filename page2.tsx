import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import RNExitApp from 'react-native-exit-app';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function Page2() {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'column', flexGrow: 1}}>
          <TouchableOpacity
            style={{flex: 1, alignSelf: 'center'}}
            onPress={() => {
              console.log('Exit App Called');
              RNExitApp.exitApp();
            }}>
            <Text style={{fontSize: 20, fontWeight: '600'}}>Exit App</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Page2;
