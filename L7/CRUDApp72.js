import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { getFirestore, collection, addDoc, updateDoc, doc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { FIRESTORE_DB } from '../firebaseConfig';
// Assuming FIREBASE_APP has already been initialized
//const FIRESTORE_DB = getFirestore(FIREBASE_APP);
const ITEMS_COLLECTION = collection(FIRESTORE_DB, 'items');

const App72 = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(ITEMS_COLLECTION, (snapshot) => {
      const updatedItems = [];
      snapshot.forEach((doc) => {
        updatedItems.push({ id: doc.id, ...doc.data() });
      });
      setItems(updatedItems);
    });

    return () => unsubscribe();
  }, []);

  const handleAddData = async () => {
    try {
      await addDoc(ITEMS_COLLECTION, {
        text: text
      });
      setText('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const handleUpdateData = async (itemId, newText) => {
    try {
      const itemDoc = doc(FIRESTORE_DB, 'items', itemId);
      await updateDoc(itemDoc, { text: newText });
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  const handleDeleteData = async (itemId) => {
    try {
      const itemDoc = doc(FIRESTORE_DB, 'items', itemId);
      await deleteDoc(itemDoc);
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
      <TextInput
        style={{ flex: 1, marginRight: 10 }}
        value={item.text}
        onChangeText={(newText) => handleUpdateData(item.id, newText)}
      />
      <Button
        title="Delete"
        onPress={() => handleDeleteData(item.id)}
      />
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
        style={{ marginBottom: 10 }}
      />
      <Button
        title="Add Data"
        onPress={handleAddData}
        style={{ marginBottom: 20 }}
      />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default App72;
