import { SafeAreaView, Button } from "react-native";


export default AddProduct = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Button title="This add products" onPress={() => { navigation.replace("MainView") }} />
        </SafeAreaView>
    );
}
