import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  line: {
    height: 2,
    backgroundColor: '#2CD18A',
    width: '100%'
  }
});

export default styles;
