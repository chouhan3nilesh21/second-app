import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MapStringToJsonConverter {

    public static String convertMapStringToJson(String mapString) {
        try {
            // Parse the mapString into a Map
            Map<String, Object> map = parseMapString(mapString);

            // Convert Map to JSON
            return convertMapToJson(map);
        } catch (Exception e) {
            e.printStackTrace();
            return "{}"; // Return an empty JSON object in case of an error
        }
    }

    private static Map<String, Object> parseMapString(String mapString) {
        // Split the mapString into key-value pairs
        String[] keyValuePairs = mapString.split(", ");
        Map<String, Object> map = new HashMap<>();

        // Extract key-value pairs and populate the map
        for (String pair : keyValuePairs) {
            String[] entry = pair.split("=");
            if (entry.length == 2) {
                String key = entry[0].trim();
                String value = entry[1].trim();

                // Check if the value is an array
                if (value.startsWith("[") && value.endsWith("]")) {
                    List<String> arrayValues = parseArrayValue(value);
                    map.put(key, arrayValues);
                } else {
                    map.put(key, value);
                }
            }
        }

        return map;
    }

    private static List<String> parseArrayValue(String arrayString) {
        // Use regular expression to extract array values
        List<String> arrayValues = new ArrayList<>();
        Matcher matcher = Pattern.compile("\\[([^\\]]+)\\]").matcher(arrayString);
        while (matcher.find()) {
            String[] values = matcher.group(1).split(",\\s*");
            for (String value : values) {
                arrayValues.add(value.trim());
            }
        }
        return arrayValues;
    }

    private static String convertMapToJson(Map<String, Object> map) {
        try {
            // Create a Jackson ObjectMapper
            ObjectMapper objectMapper = new ObjectMapper();

            // Create a JSON object and populate it with Map entries
            JsonNode jsonNode = objectMapper.valueToTree(map);

            // Convert JSON object to string
            return objectMapper.writeValueAsString(jsonNode);
        } catch (Exception e) {
            e.printStackTrace();
            return "{}"; // Return an empty JSON object in case of an error
        }
    }

    public static void main(String[] args) {
        // Example usage
        String mapString = "key1=value1, key2=value2, key3=[value3_1, value3_2, value3_3]";

        String jsonString = convertMapStringToJson(mapString);

        System.out.println("JSON String: " + jsonString);
    }
}
