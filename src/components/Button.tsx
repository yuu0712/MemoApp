import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  label: string;
  onPress?: () => void;
}

const Button = (props: Props) => {
  const { label, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#467FD3",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
});

export default Button;
