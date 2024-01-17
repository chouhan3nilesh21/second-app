public class Direct {
    private static String toJson(String s) {
        s = s.substring(0, s.length()).replace("{", "{\"");
        s = s.substring(0, s.length()).replace("}", "\"}");
        s = s.substring(0, s.length()).replace(", ", "\", \"");
        s = s.substring(0, s.length()).replace("=", "\":\"");
        s = s.substring(0, s.length()).replace("[", "[\"");
        s = s.substring(0, s.length()).replace("]", "\"]");
        s = s.substring(0, s.length()).replace("\"[", "[");
        s = s.substring(0, s.length()).replace("]\"", "]");
        s = s.substring(0, s.length()).replace("}\", \"{", "}, {");
        return s;
    }
    public static void main(String[] args) {
        String mapString = "key1=value1, key2=value2, key3=[value3_1, value3_2, value3_3]";

        String jsonString = toJson(mapString);

        System.out.println("JSON String: " + jsonString);
    }
}
