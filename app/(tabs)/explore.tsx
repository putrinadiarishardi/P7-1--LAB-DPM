import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Button, Card, Divider } from 'react-native-paper';

const ExploreScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([
        { id: '1', title: 'Naomi Campbell', description: 'Ikon supermodel yang telah tampil di berbagai fashion show besar selama beberapa dekade.' },
        { id: '2', title: 'Gigi Hadid', description: 'Supermodel modern yang sering berjalan untuk brand seperti Versace, Chanel, dan Victoria\'s Secret.' },
        { id: '3', title: 'Bella Hadid', description: 'Adik dari Gigi Hadid yang juga menjadi bintang di berbagai runway show ternama.' },
        { id: '4', title: 'Kendall Jenner', description: 'Supermodel yang tampil untuk brand high-fashion seperti Balmain, Givenchy, dan Prada.' },
        { id: '5', title: 'Cara Delevingne', description: 'Model dan aktris yang dikenal dengan gaya edgy-nya, tampil untuk Chanel dan Burberry.' },
        { id: '6', title: 'Joan Smalls', description: 'Model Puerto Rico yang sering tampil di runway Gucci, Givenchy, dan Tom Ford.' },
        { id: '7', title: 'Adut Akech', description: 'Model asal Sudan-Australia yang menjadi ikon baru dunia fashion.' },
        { id: '8', title: 'Karlie Kloss', description: 'Supermodel Amerika yang terkenal di runway Victoria\'s Secret dan brand fashion mewah lainnya.' },
        { id: '9', title: 'Liu Wen', description: 'Supermodel Tiongkok yang menjadi model Asia pertama untuk Victoria\'s Secret.' },
        { id: '10', title: 'Irina Shayk', description: 'Model asal Rusia yang sering tampil untuk brand seperti Versace dan Givenchy.' },
        { id: '11', title: 'Cindy Crawford', description: 'Supermodel legendaris yang mendominasi runway tahun 90-an.' },
        { id: '12', title: 'Claudia Schiffer', description: 'Ikon fashion dari Jerman yang menjadi supermodel terkemuka.' },
        { id: '13', title: 'Tyra Banks', description: 'Supermodel yang juga terkenal sebagai pembawa acara "America\'s Next Top Model."' },
        { id: '14', title: 'Alessandra Ambrosio', description: 'Model Brasil yang dikenal melalui fashion show Victoria\'s Secret.' },
        { id: '15', title: 'Heidi Klum', description: 'Model Jerman yang juga menjadi presenter dan produser acara fashion.' },
    ]);
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = () => {
        const filtered = data.filter(item =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <ThemedView style={styles.container}>
            <View style={styles.header}>
                <ThemedText style={styles.welcomeText}>Welcome to Explore!</ThemedText>
                <ThemedText style={styles.subText}>Discover top fashion show artists</ThemedText>
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search artists..."
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <Button mode="contained" onPress={handleSearch} style={styles.searchButton}>
                    Search
                </Button>
            </View>
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card style={styles.card}>
                        <Card.Title title={item.title} />
                        <Divider />
                        <Card.Content>
                            <ThemedText style={styles.descriptionText}>{item.description}</ThemedText>
                        </Card.Content>
                    </Card>
                )}
                ListEmptyComponent={
                    <ThemedText style={styles.emptyText}>No artists found</ThemedText>
                }
            />
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#2E7D32', 
    },
    header: {
        marginBottom: 20,
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    subText: {
        fontSize: 16,
        color: '#C8E6C9',
        marginTop: 8,
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff',
        marginRight: 8,
    },
    searchButton: {
        backgroundColor: '#64b5f6',
    },
    card: {
        marginBottom: 16,
        borderRadius: 8,
        elevation: 3,
    },
    emptyText: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
        color: '#C8E6C9',
    },
    descriptionText: {
        color: '#black', 
    },
});

export default ExploreScreen;
