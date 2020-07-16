
import React from 'react';
import { connect } from 'react-redux'


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Actions } from './reducer';

import RepoResult from './RepoResult'



declare const global: { HermesInternal: null | {} };

type Props = {
  payload: string,
  loading: boolean,
  data: Array<any>
}

let Search: React.FC<Props> = ({ payload, loading, data, dispatch }) => {

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Search for a repo:</Text>
              <TextInput style={{ height: 48, borderColor: 'gray', borderWidth: 1, marginVertical: 16, paddingStart: 16, paddingEnd: 16 }}
                onChangeText={text => {
                  dispatch({ type: Actions.SearchQuery, payload: text })
                }} />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View style={styles.resultsList}>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              key={item.id}
              onPress={() => console.log("Clicked")}>
              <RepoResult repo={item} />
            </TouchableHighlight>
          }
        />
      </View>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  payload: state.payload,
  loading: state.loading,
  data: state.data
})


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  resultsList: {
    flex: 1,

    backgroundColor: Colors.white,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

Search = connect(mapStateToProps)(Search);

export default Search;
