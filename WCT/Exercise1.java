import java.util.Arrays;

public class ArrayNestedCheck {

    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3};
        int[] arr2 = {0, 1, 2, 3, 4, 5};
        
        boolean result = canBeNested(arr1, arr2);
        System.out.println(result);  // Output: true
    }

    public static boolean canBeNested(int[] arr1, int[] arr2) {
        // Check if arr1's min is greater than arr2's min
        int minArr1 = Arrays.stream(arr1).min().orElse(Integer.MAX_VALUE);
        int minArr2 = Arrays.stream(arr2).min().orElse(Integer.MAX_VALUE);

        // Check if arr1's max is less than arr2's max
        int maxArr1 = Arrays.stream(arr1).max().orElse(Integer.MIN_VALUE);
        int maxArr2 = Arrays.stream(arr2).max().orElse(Integer.MIN_VALUE);

        return minArr1 > minArr2 && maxArr1 < maxArr2;
    }
}