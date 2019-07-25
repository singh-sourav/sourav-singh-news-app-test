import React, { Component } from 'react';
import {
   Text, FlatList, View, Image,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNewsHeadlines } from '../actions/news';
import NewsHeadline from './NewsHeadline';

class NewsList extends Component {
  static navigationOptions = {
    title: 'Home',
  };

state={
  refreshing: false,
}

componentDidMount() {
  this.props.fetchNewsHeadlines();
}

componentDidUpdate() {
  if (this.state.refreshing) {
    this.setState({
      refreshing: false,
    });
  }
}

    renderItem = ({ item }) => (
      <NewsHeadline
        headline={item.title}
        image={item.urlToImage}
        author={item.author}
        goToDetails={() => this.props.navigation.navigate('Details', {
          headline: item.title,
          image: item.urlToImage,
          author: item.author,
          description: item.description,
        })}
      />
    )

      getHeader=() => (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' }}
          />
        </View>)

      refreshNews=() => {
        this.setState({
          refreshing: true,
        },
        () => this.props.fetchNewsHeadlines());
      }

      render() {
        return (
          <View>
            <View>
              <Text style={{
                fontStyle: 'bold', marginTop: 30, marginBottom: 30, fontSize: 35, fontWeight: 'bold',
              }}
              >
               Your Daily Reads
              </Text>

            </View>
            {this.props.newsList.length == 0 ? this.getHeader()
              : (
                <FlatList
                  data={this.props.newsList}
                  renderItem={this.renderItem}
                  refreshing={this.state.refreshing}
                  onRefresh={this.refreshNews}
                  contentContainerStyle={{ flexGrow: 1 }}
                  keyboardShouldPersistTaps="handled"
                />
              )}
          </View>
        );
      }
}


const mapStateToProps = store => ({
  newsList: store.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchNewsHeadlines,
  },
  dispatch,
);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsList);
