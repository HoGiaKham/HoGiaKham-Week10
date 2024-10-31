import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

const API_Screen_02 = ({ route, navigation }) => {
    const { name } = route.params;

    const [searchText, setSearchText] = useState('');
    const [tasks, setTasks] = useState([
        { id: '1', title: 'To check email', completed: false },
        { id: '2', title: 'UI task web page', completed: false },
        { id: '3', title: 'Learn JavaScript basics', completed: false },
        { id: '4', title: 'Learn HTML Advance', completed: false },
        { id: '5', title: 'Medical App UI', completed: false },
        { id: '6', title: 'Learn Java', completed: false },
    ]);

    const toggleTask = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const confirmDelete = (id) => {
        Alert.alert(
            "Delete Task",
            "Are you sure you want to delete this task?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "OK", onPress: () => deleteTask(id) }
            ]
        );
    };

    const deleteTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchText.toLowerCase())
    );

    const renderItem = ({ item }) => (
        <View style={styles.taskItem}>
            <TouchableOpacity onPress={() => toggleTask(item.id)} style={styles.checkbox}>
                {item.completed && <Text style={styles.checkmark}>✔</Text>}
            </TouchableOpacity>
            <Text style={[styles.taskTitle, item.completed && styles.completedTask]}>
                {item.title}
            </Text>
            <View style={styles.actionContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('API_Screen_03', { task: item })}>
                    <Text style={styles.editText}>✎</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                    <Text style={styles.deleteText}>🗑</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Hello {name}!</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Search tasks..."
                placeholderTextColor="#aaa"
                value={searchText}
                onChangeText={setSearchText}
            />
            <FlatList
                data={filteredTasks}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={<Text style={styles.emptyText}>No tasks found</Text>}
            />
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('API_Screen_03')}>
                <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    greeting: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 15,
    },
    searchInput: {
        height: 45,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
        color: '#444',
        backgroundColor: '#fff',
    },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginVertical: 6,
        backgroundColor: '#e7f1ff',
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    checkbox: {
        width: 26,
        height: 26,
        borderWidth: 1,
        borderColor: '#007bff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    checkmark: {
        color: '#007bff',
        fontSize: 18,
    },
    taskTitle: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    completedTask: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editText: {
        color: '#007bff',
        fontSize: 18,
        marginLeft: 12,
    },
    deleteText: {
        color: '#ff3d3d',
        fontSize: 18,
        marginLeft: 12,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 30,
        color: '#aaa',
        fontSize: 16,
    },
    addButton: {
        backgroundColor: '#007bff',
        height: 55,
        width: 55,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 25,
        right: 25,
        shadowColor: "#007bff",
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    addText: {
        color: '#fff',
        fontSize: 32,
        lineHeight: 35,
    },
});

export default API_Screen_02;
