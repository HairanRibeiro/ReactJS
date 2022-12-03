import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ListItem from './src/ListItem';

export default function App() {

  const tarefas = [
    {id: '1', tarefa: 'dar prova especial para os alunos'},
    {id: '2', tarefa: 'estudar React Native'},
    {id: '3', tarefa: 'estudar HTML'},
    {id: '4', tarefa: 'estudar CSS'},
    {id: '5', tarefa: 'estudar JavaScript'},
  ]

  return (
    <View style={styles.container}>
      
      <FlatList
      data={tarefas}
      keyExtractor={item => item.id}
      renderItem={ ({item}) => (
        <ListItem
        data={item}
        handleleft={() => aLert ('Tarefa concluida com sucesso!')}
        handleRight={() => aLert('Tarefa foi excluida!')}
        />
      ) }
      ItemSeparatorComponent={ () => <Separator/> }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const Separator = () => <View style={{flex:1, height:1, backgroundColor: '#DDD'}}></View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
