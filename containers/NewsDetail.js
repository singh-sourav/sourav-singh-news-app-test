import React from 'react';
import {
  View, Text, Image, ScrollView,
} from 'react-native';

class NewsDetail extends React.Component {
    static navigationOptions = {
      title: 'News Detail',
    };


    render() {
      const { navigation } = this.props;
      const headline = navigation.getParam('headline', 'No headline');
      const author = navigation.getParam('author', 'No author');
      const image = navigation.getParam('image', 'No Image');
      const description = navigation.getParam('description', 'No description');
      return (

        <ScrollView contentContainerStyle={styles.newsContainerStyles}>
          <View>
            <Text style={styles.headlineText}>{headline}</Text>
            <Text style={{
              marginTop: 40, marginBottom: 40, fontSize: 20, color: 'grey',
            }}
            >
              {`- by ${author}`}

            </Text>
            <Image
              style={styles.imageStyle}
              source={{ uri: image }}
            />
            <Text style={{ marginTop: 40, color: 'grey', fontSize: 20 }}>{description}</Text>
          </View>

        </ScrollView>
      );
    }
}

const styles = {

  headlineText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  imageStyle: {
    alignSelf: 'center',
    width: '100%',
    height: 300,
  },
  newsContainerStyles: {
    borderBottomWidth: 1,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
};

export default NewsDetail;
