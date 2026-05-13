import { View, Text } from 'react-native';
export default function App() {
return (
<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
<Text>Olá, mundo!</Text>
</View>
);
}

import { View, Text, StyleSheet } from 'react-native';
export default function App() {
return (
<View style={styles.container}>
<Text style={styles.titulo}>Meu App</Text>
<Text style={styles.subtitulo}>Aprendendo React Native</Text>
</View>
);
}
const styles = StyleSheet.create({
container: { flex:1, justifyContent:'center', alignItems:'center',
backgroundColor:'#f7dcdc' },
titulo: { fontSize:24, fontWeight:'bold' },
subtitulo: { fontSize:18, color:'#555' }
});

import { useState } from 'react';
import { View, Text, Button } from 'react-native';
export default function App() {
const [contador, setContador] = useState(0);
return (
<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
<Text style={{fontSize:24}}>{contador}</Text>
<Button title="+" onPress={() => setContador(contador+1)} />
<Button title="-" onPress={() => setContador(contador-1)} />
</View>
);
}

import { FlatList, View, Text } from 'react-native';
const dados = [
{ id:'1', nome:'Item 1' },
{ id:'2', nome:'Item 2' }
];
export default function App() {
return (
<FlatList
data={dados}
keyExtractor={item => item.id}
renderItem={({item}) => (
<View style={{padding:10, margin:5, backgroundColor:'#ddd'}}>
<Text>{item.nome}</Text>
</View>
)}
/>
);
}

