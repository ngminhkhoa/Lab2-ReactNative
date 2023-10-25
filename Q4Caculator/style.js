const { StyleSheet } = require("react-native");

export default styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bottomView: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    buttonRow: {
        flexDirection: 'row',
    },
    buttonRow2: {
        marginTop: 3,
        flexDirection: 'row',
    },
    fullWidthRow: {
        width: '100%',
    },
    button: {
        width: 70,
        height: 55,
        margin: 3,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        elevation: 2,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },
    button2: {
        width: '90%',
        height: 55,
        margin: 3,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        elevation: 2,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },
    button3: {
        width: '45%',
        height: 55,
        margin: 3,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        elevation: 2,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    buttonText: {
        fontSize: 29,
        color: "#000000"
    },
    resultText: {
        fontSize: 39,
        color: "#000000"
    }
})