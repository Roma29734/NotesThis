import {View} from 'react-native';
import HeaderBar from '../../viewComponents/HeaderBar';
import ItemKeeps from '../../viewComponents/ItemKeeps';
import Style from '../../viewComponents/Main.basic.style';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomeScreen = ({navigation}: any) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <View style={Style.contrainer}>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <HeaderBar title={'NotesThis'} />
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <ItemKeeps />
    </View>
  );
};

export default HomeScreen;
