import CountryPicker from "react-native-country-picker-modal";

// change the import path according to your project structure
import closeImgLight from "/asset/iconWhite.png";

const DARK_COLOR = "#18171C";
const PLACEHOLDER_COLOR = "rgba(255,255,255,0.2)";
const LIGHT_COLOR = "#FFF";

export default props => (
    <CountryPicker
        filterPlaceholderTextColor={PLACEHOLDER_COLOR}
        closeButtonImage={closeImgLight}
        styles={darkTheme}
        {...props}
    />
);

const darkTheme = StyleSheet.create({
    modalContainer: {
        backgroundColor: DARK_COLOR
    },
    contentContainer: {
        backgroundColor: DARK_COLOR
    },
    header: {
        backgroundColor: DARK_COLOR
    },
    itemCountryName: {
        borderBottomWidth: 0
    },
    countryName: {
        color: LIGHT_COLOR
    },
    letterText: {
        color: LIGHT_COLOR
    },
    input: {
        color: LIGHT_COLOR,
        borderBottomWidth: 1,
        borderColor: LIGHT_COLOR
    }
});
