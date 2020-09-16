import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import Mic from './images/mic.webp';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
    var PendingReviews = [
        { name: 'Akash', designation: 'react developer', jobID: '0112', submiDate: '22-09-2020' },
        { name: 'Krishna', designation: 'Python developer', jobID: '0122', submiDate: '21-09-2020' },
        { name: 'Ramesh', designation: 'Java developer', jobID: '0152', submiDate: '22-09-2020' },
        { name: 'Gireesh', designation: 'Flutter developer', jobID: '0132', submiDate: '22-09-2020' },
        { name: 'Eshan', designation: 'Flutter developer', jobID: '0182', submiDate: '28-08-2020' }
    ];

    var LatestJobs = [
        { name: 'Akash', jobID: '0112', PostedOn: '22-09-2020' },
        { name: 'Krishna', jobID: '0122', PostedOn: '21-09-2020' },
        { name: 'Ramesh', jobID: '0152', PostedOn: '22-09-2020' },
        { name: 'Gireesh', jobID: '0132', PostedOn: '22-09-2020' },
        { name: 'Avinash', jobID: '0162', PostedOn: '12-07-2020' }
    ];

    const showAlert = () => {
        Alert.alert(
            'Clicked on Mic'
        )
    }

    const Notification = () => {
        Alert.alert(
            'Notification'
        )
    }

    const Info = () => {
        Alert.alert(
            'Information'
        )
    }

    const PendingReviewItem = (item) => {
        Alert.alert("JOBID:", item.jobID)
    }

    const LatestJobsItem = (item) => {
        Alert.alert("JOBID:", item.jobID)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.notificationIcon}>
                <Ionicons style={{ marginRight: 10 }} onPress={Info} name="information-circle-outline" size={30} />
                <Ionicons style={{ marginRight: 10 }} onPress={Notification} name="notifications" size={30} />
            </View>
            <LinearGradient
                colors={['#f5f3f6', '#bd84de', '#9607de', '#f5f3f6']}
                style={styles.linearGradient}
                start={{ x: 0.9, y: 0 }}
            >
                <TouchableOpacity
                    onPress={showAlert}
                    style={{ height: 340 }}
                >
                    <Image
                        style={styles.image}
                        source={Mic}
                    />
                </TouchableOpacity>


                <Text style={styles.heading}>Pending Reviews</Text>

                <ScrollView horizontal={true} style={styles.scrollView}>
                    {PendingReviews.map((item, index) => (
                        <TouchableOpacity onPress={() => PendingReviewItem(item)} key={item.jobID} style={styles.ViewItem}>
                            <View style={styles.row}>
                                <Ionicons name="person-circle" size={30} color='#797D7F' />
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                            <Text>{item.designation}</Text>
                            <Text>JobId:{item.jobID}</Text>
                            <Text>SubmittedOn:{item.submiDate}</Text>
                        </TouchableOpacity>
                    )
                    )}
                </ScrollView>

                <Text style={styles.heading}>Latest Jobs</Text>

                <ScrollView horizontal={true} style={styles.scrollView}>
                    {LatestJobs.map((item, key) => (
                        <TouchableOpacity onPress={() => LatestJobsItem(item)} key={item.jobID} style={styles.ViewItem}>
                            <View style={styles.row}>
                                <Ionicons name="play-circle" size={30} color='#797D7F' />
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                            <Text>JobId:{item.jobID}</Text>
                            <Text>PostedOn:{item.PostedOn}</Text>
                        </TouchableOpacity>
                    )
                    )}
                </ScrollView>
            </LinearGradient>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        marginHorizontal: 20
    },
    text: {
        fontSize: 42,
    },
    heading: {
        fontWeight: 'bold',
        marginLeft: 5,
        color: 'black'
    },
    image: {
        marginTop: 20,
        alignSelf: 'center',
        width: 300, height: 300,
        borderRadius: 150
    },
    ViewItem: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'silver',
        backgroundColor: 'white',
        width: 190,
        padding: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
    },
    row: {
        flexDirection: 'row'
    },
    name: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#797D7F',
        alignSelf: 'center'
    },
    notificationIcon: {
        alignSelf: 'flex-end',
        position: 'absolute',
        zIndex: 2000,
        flexDirection: 'row'
    },
    linearGradient: {
        height: '100%'
    }
});

export default HomeScreen;
