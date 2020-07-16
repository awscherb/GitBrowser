import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import { typography } from 'react-native-material-design-styles';
const typographyStyle = StyleSheet.create(typography);

const RepoResult = ({ repo }) => {

    return (
        <View style={styles.listItem}>
            <View style={styles.columns}>
                <Image
                    style={styles.avatar}
                    source={{ uri: repo.owner.avatar_url }}
                />
                <View style={styles.content}>
                    <Text style={typographyStyle.paperFontTitle}>{repo.name}</Text>
                    <Text style={typographyStyle.paperFontBody1}>{repo.description ? repo.description : "No description"}</Text>
                </View>
            </View>
            <View
                style={styles.spacer}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    listItem: {
    },
    avatar: {
        width: 48,
        height: 48,
        marginTop: 16,
        marginBottom: 16,
        marginStart: 16
    },
    columns: {
        flexDirection: "row"
    },
    content: {
        marginTop: 16,
        marginBottom: 16,
        flex: 1,
        paddingStart: 16,
        paddingEnd: 16,
    },
    spacer: {
        borderBottomColor: "#BDBDBD",
        borderBottomWidth: 1,
    }
})

export default RepoResult