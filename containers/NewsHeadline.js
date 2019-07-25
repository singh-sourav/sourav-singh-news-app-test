import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';

const NewsHeadline = ({ headline, image,author,goToDetails }) => {
	return (
        <TouchableOpacity onPress={goToDetails}>
		<View style={styles.newsContainerStyles}>
			<View style={styles.headlineText}>
			<Text style={{fontWeight:"bold"}}>{headline}</Text>
            <Text style={styles.authorText}>{author}</Text>
            </View>
            <Image 
				style={styles.imageStyle}
				source={{ uri: image }} 
			/>
		</View>
        </TouchableOpacity>
	);
};

const styles = {
    headlineText:{
        width:"50%",
        flexDirection:"column"
    },
    authorText:{
        marginTop:40,
        color:"grey"
    },
	imageStyle: {
		alignSelf: 'center',
        width: "40%",
        marginLeft:"10%",
		height: 100
	},
	newsContainerStyles: {
        borderBottomWidth: 1,
        flexDirection:"row",
        padding: 10,
		backgroundColor: '#fff',
		borderColor: '#ddd',
	}
};

export default NewsHeadline;
